import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styled } from '@mui/material/styles';
import { resetManageUser, newManageUser, getManageUser } from '../store/ManageUserSlice';
import reducer from '../store';
import ManageUserHeader from './ManageUserHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import InventoryTab from './tabs/InventoryTab';
import PricingTab from './tabs/PricingTab';
import ManageUserImagesTab from './tabs/ManageUserImagesTab';
import ShippingTab from './tabs/ShippingTab';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
  },
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a ManageUser name')
    .min(5, 'The ManageUser name must be at least 5 characters'),
});

function ManageUser(props) {
  const dispatch = useDispatch();
  const ManageUser = useSelector(({ userinfo }) => userinfo.ManageUser);

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noManageUser, setNoManageUser] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateManageUsertate() {
      const { ManageUserId } = routeParams;

      if (ManageUserId === 'new') {
        /**
         * Create New ManageUser data
         */
        dispatch(newManageUser());
      } else {
        /**
         * Get ManageUser data
         */
        dispatch(getManageUser(routeParams)).then((action) => {
          /**
           * If the requested ManageUser is not exist show message
           */
          if (!action.payload) {
            setNoManageUser(true);
          }
        });
      }
    }

    updateManageUsertate();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!ManageUser) {
      return;
    }
    /**
     * Reset the form on ManageUser state changes
     */
    reset(ManageUser);
  }, [ManageUser, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset ManageUser on component unload
       */
      dispatch(resetManageUser());
      setNoManageUser(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested ManageUser is not exists
   */
  if (noManageUser) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There is no such User!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/apps/userinfo/ManageUser"
          color="inherit"
        >
          Go to User Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while ManageUser data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (ManageUser && routeParams.ManageUserId !== ManageUser.id && routeParams.ManageUserId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <Root
        header={<ManageUserHeader />}
        contentToolbar={
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ root: 'w-full h-64' }}
          >
            <Tab className="h-64" label="Basic Info" />
            <Tab className="h-64" label="ManageUser Images" />
            <Tab className="h-64" label="Pricing" />
            <Tab className="h-64" label="Inventory" />
            <Tab className="h-64" label="Shipping" />
          </Tabs>
        }
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <div className={tabValue !== 0 ? 'hidden' : ''}>
              <BasicInfoTab />
            </div>

            <div className={tabValue !== 1 ? 'hidden' : ''}>
              <ManageUserImagesTab />
            </div>

            <div className={tabValue !== 2 ? 'hidden' : ''}>
              <PricingTab />
            </div>

            <div className={tabValue !== 3 ? 'hidden' : ''}>
              <InventoryTab />
            </div>

            <div className={tabValue !== 4 ? 'hidden' : ''}>
              <ShippingTab />
            </div>
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default withReducer('userinfo', reducer)(ManageUser);
