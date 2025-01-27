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
import { resetManageStaff, newManageStaff, getManageStaff } from '../store/ManageStaffSlice';
import reducer from '../store';
import ManageStaffHeader from './ManageStaffHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import InventoryTab from './tabs/InventoryTab';
import PricingTab from './tabs/PricingTab';
import ManageStaffImagesTab from './tabs/ManageStaffImagesTab';
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
    .required('You must enter a ManageStaff name')
    .min(5, 'The ManageStaff name must be at least 5 characters'),
});

function ManageStaff(props) {
  const dispatch = useDispatch();
  const ManageStaff = useSelector(({ staffinfo }) => staffinfo.ManageStaff);

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noManageStaff, setNoManageStaff] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateManageStafftate() {
      const { ManageStaffId } = routeParams;

      if (ManageStaffId === 'new') {
        /**
         * Create New ManageStaff data
         */
        dispatch(newManageStaff());
      } else {
        /**
         * Get ManageStaff data
         */
        dispatch(getManageStaff(routeParams)).then((action) => {
          /**
           * If the requested ManageStaff is not exist show message
           */
          if (!action.payload) {
            setNoManageStaff(true);
          }
        });
      }
    }

    updateManageStafftate();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!ManageStaff) {
      return;
    }
    /**
     * Reset the form on ManageStaff state changes
     */
    reset(ManageStaff);
  }, [ManageStaff, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset ManageStaff on component unload
       */
      dispatch(resetManageStaff());
      setNoManageStaff(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested ManageStaff is not exists
   */
  if (noManageStaff) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There is no such Staff!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/apps/staffinfo/ManageStaff"
          color="inherit"
        >
          Go to Staff Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while ManageStaff data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (ManageStaff && routeParams.ManageStaffId !== ManageStaff.id && routeParams.ManageStaffId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <Root
        header={<ManageStaffHeader />}
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
            <Tab className="h-64" label="ManageStaff Images" />
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
              <ManageStaffImagesTab />
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

export default withReducer('staffinfo', reducer)(ManageStaff);
