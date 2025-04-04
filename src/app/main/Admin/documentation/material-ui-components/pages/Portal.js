import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PortalDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/portal"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Portal
      </Typography>
      <Typography className="description">
        The portal component renders its children into a new "subtree" outside of current DOM
        hierarchy.
      </Typography>

      <Typography className="mb-40" component="div">
        The children of the portal component will be appended to the <code>container</code>{' '}
        specified. The component is used internally by the{' '}
        <a href="/components/modal/">
          <code>Modal</code>
        </a>{' '}
        and{' '}
        <a href="/components/popper/">
          <code>Popper</code>
        </a>{' '}
        components.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Example
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/Admin/documentation/material-ui-components/components/portal/SimplePortal.js')
              .default
          }
          raw={require('!raw-loader!app/main/Admin/documentation/material-ui-components/components/portal/SimplePortal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side
      </Typography>
      <Typography className="mb-40" component="div">
        React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
        <a href="https://reactjs.org/docs/portals.html">
          <code>createPortal()</code>
        </a>{' '}
        API on the server. You have to wait for the client-side hydration to see the children.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/result?p=@mui/core@latest">970 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        As the component does not have any styles, it also comes with the unstyled package.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import Portal from '@mui/core/Portal';
`}
      </FuseHighlight>
    </>
  );
}

export default PortalDoc;
