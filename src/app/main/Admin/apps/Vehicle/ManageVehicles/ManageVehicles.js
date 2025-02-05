import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import reducer from '../store';
import ManageVehiclesHeader from './ManageVehiclesHead';
import ManageVehiclesTable from './ManageVehiclesTable';


const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 200,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function ManageVehicles() {
  
  return <Root header={<ManageVehiclesHeader />} content={<ManageVehiclesTable />} innerScroll />;
}

export default withReducer('vehicleinfo', reducer)(ManageVehicles);
