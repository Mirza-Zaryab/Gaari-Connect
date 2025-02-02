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
import { resetManageVehicle, newManageVehicle, getManageVehicle } from '../store/ManageVehicleSlice';
import reducer from '../store';
import ManageVehicleHeader from './ManageVehicleHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import InventoryTab from './tabs/InventoryTab';
import PricingTab from './tabs/PricingTab';
import ManageVehicleImagesTab from './tabs/ManageVehicleImagesTab';
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
    .required('You must enter a ManageVehicle name')
    .min(5, 'The ManageVehicle name must be at least 5 characters'),
});

function ManageVehicle(props) {
  const dispatch = useDispatch();
  const ManageVehicle = useSelector(({ vehicleinfo }) => vehicleinfo.ManageVehicle);

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noManageVehicle, setNoManageVehicle] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateManageVehicletate() {
      const { ManageVehicleId } = routeParams;

      if (ManageVehicleId === 'new') {
        /**
         * Create New ManageVehicle data
         */
        dispatch(newManageVehicle());
      } else {
        /**
         * Get ManageVehicle data
         */
        dispatch(getManageVehicle(routeParams)).then((action) => {
          /**
           * If the requested ManageVehicle is not exist show message
           */
          if (!action.payload) {
            setNoManageVehicle(true);
          }
        });
      }
    }

    updateManageVehicletate();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!ManageVehicle) {
      return;
    }
    /**
     * Reset the form on ManageVehicle state changes
     */
    reset(ManageVehicle);
  }, [ManageVehicle, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset ManageVehicle on component unload
       */
      dispatch(resetManageVehicle());
      setNoManageVehicle(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested ManageVehicle is not exists
   */
  if (noManageVehicle) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There is no such Vehicle!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/apps/vehicleinfo/ManageVehicle"
          color="inherit"
        >
          Go to Vehicle Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while ManageVehicle data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (ManageVehicle && routeParams.ManageVehicleId !== ManageVehicle.id && routeParams.ManageVehicleId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <Root
        header={<ManageVehicleHeader />}
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
            <Tab className="h-64" label="ManageVehicle Images" />
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
              <ManageVehicleImagesTab />
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

export default withReducer('vehicleinfo', reducer)(ManageVehicle);
