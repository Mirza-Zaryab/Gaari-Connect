import * as React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StyleSheetManager } from 'styled-components';
import { useTheme, styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

function FramedDemo(props) {
  const { children, document } = props;

  const theme = useTheme();
  React.useEffect(() => {
    document.body.dir = theme.direction;
  }, [document, theme.direction]);

  const cache = React.useMemo(
    () =>
      createCache({
        key: `iframe-demo-${theme.direction}`,
        prepend: true,
        container: document.head,
        stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
      }),
    [document, theme.direction]
  );

  const getWindow = React.useCallback(() => document.defaultView, [document]);

  return (
    <StyleSheetManager
      target={document.head}
      stylisPlugins={theme.direction === 'rtl' ? [rtlPlugin] : []}
    >
      <CacheProvider value={cache}>
        <GlobalStyles
          styles={() => ({
            html: {
              fontSize: '62.5%',
            },
          })}
        />
        {React.cloneElement(children, {
          window: getWindow,
        })}
      </CacheProvider>
    </StyleSheetManager>
  );
}

FramedDemo.propTypes = {
  children: PropTypes.node,
  document: PropTypes.object.isRequired,
};

const Frame = styled('iframe')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexGrow: 1,
  height: 400,
  border: 0,
  boxShadow: theme.shadows[1],
}));

function DemoFrame(props) {
  const { children, name, ...other } = props;
  const title = `${name} demo`;
  /**
   * @type {import('react').Ref<HTMLIFrameElement>}
   */
  const frameRef = React.useRef(null);
  const [iframeLoaded, onLoad] = React.useReducer(() => true, false);

  React.useEffect(() => {
    const document = frameRef.current.contentDocument;
   
    if (document != null && document.readyState === 'complete' && !iframeLoaded) {
      onLoad();
    }
  }, [iframeLoaded]);
  const document = frameRef.current?.contentDocument;
  return (
    <>
      <Frame onLoad={onLoad} ref={frameRef} title={title} {...other} />
      {iframeLoaded !== false
        ? ReactDOM.createPortal(
            <FramedDemo document={document}>{children}</FramedDemo>,
            document.body
          )
        : null}
    </>
  );
}

DemoFrame.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(DemoFrame);
