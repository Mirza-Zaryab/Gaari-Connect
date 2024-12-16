import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import reducer from '../store';
import ManageStaffsHeader from './ManageStaffsHead';
import ManageStaffsTable from './ManageStaffsTable';


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

function ManageStaffs() {
  
  return <Root header={<ManageStaffsHeader />} content={<ManageStaffsTable />} innerScroll />;
}

export default withReducer('staffinfo', reducer)(ManageStaffs);
