import { Card, Typography, Divider, Menu, MenuItem, Switch, DialogTitle, DialogContent, DialogActions, Dialog, Button } from '@mui/material'
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Rating from '@mui/material/Rating';
import { styled } from "@mui/material/styles";
import EditCarlisting from './editCarlisting/EditCarlisting';

const MyCars = () => {
    const [value, setValue] = React.useState(4);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open1, setOpen1] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#D22A8F',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));

    return (
        <div>
            {!show ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="col-span-1">
                        <Card sx={{ maxWidth: 300, height: 380 }} className="text-center shadow-none border rounded">
                            <CardMedia
                                sx={{ maxWidth: '300px', height: '200px' }}
                                className="px-6 pt-6"
                                component="img"
                                image="/assets/images/GariConnect/cardimage.png"
                                alt="logo"
                            />
                            <CardContent>
                                <div className="flex flex-row justify-between items-center mb-10">
                                    <div className="rounded-sm flex flex-row space-x-6">
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            max={4}
                                            sx={{ fontSize: 18 }}
                                        />
                                        <Typography className="text-sm font-normal">4.0</Typography>
                                        <Typography className="text-sm font-normal" variant="" color="text.secondary">
                                            25 trips
                                        </Typography>
                                    </div>
                                    <div className="flex">
                                        <MoreHorizIcon onClick={handleClick} className="cursor-pointer" />
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <MenuItem onClick={() => {
                                                setShow(!show);
                                            }}>
                                                <Typography className="text-14" color="text.secondary">Edit</Typography>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography className="text-14" color="text.secondary">View as a guest</Typography>
                                            </MenuItem>
                                            <MenuItem className="flex justify-between items-center">
                                                <Typography className="text-14 mr-96" color="text.secondary">
                                                    Status
                                                    <span className="text-10 ml-4 rounded-full py-4 px-8" style={{ color: '#046AF3', backgroundColor: 'rgba(4, 106, 243, 0.08)' }}>Active</span>
                                                </Typography>
                                                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem onClick={handleClickOpen}>
                                                <Typography className="text-14" sx={{ color: '#F04438' }}>Remove</Typography>
                                            </MenuItem>
                                        </Menu>
                                        <Dialog open={open1} onClose={handleClose1} className="" sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}>
                                            <DialogTitle className="flex-col mx-auto -mb-8">
                                                <img className="mx-auto mb-20" style={{ width: '48px', height: '48px' }} src="assets/images/icons/Featuredicon.svg" alt="logo" />
                                                <Typography className="text-18 font-medium">
                                                    Remove listing
                                                </Typography>
                                            </DialogTitle>
                                            <DialogContent>
                                                <Typography className="text-sm font-normal text-center" color="text.secondary">Are you sure you want to remove this listing?</Typography>
                                            </DialogContent>
                                            <DialogActions>
                                                <div className="px-28 mb-20 w-full grid sm:grid-cols-2 grid-cols-1 gap-14">
                                                    <Button onClick={handleClose1} variant="outlined" size="large" className="mx-auto rounded-md col-span-1" sx={{ width: 170 }}>
                                                        Yes remove
                                                    </Button>
                                                    <Button onClick={handleClose1} size="large" className="mx-auto rounded-md text-white col-span-1" style={{ backgroundColor: '#D22A8F' }} sx={{ width: 170 }}>
                                                        No
                                                    </Button>
                                                </div>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <Typography className="text-base font-semibold" gutterBottom variant="">
                                            Honda Afb 8895- 19
                                        </Typography>
                                        <Typography className="text-sm font-normal mr-auto" variant="" color="text.secondary">
                                            Gulberg 3
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <Divider className="my-12" />
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <Typography className="text-sm font-normal" gutterBottom variant="" color="text.secondary">
                                            Rate per day
                                        </Typography>
                                        <Typography className="mr-auto">
                                            <span className="text-base font-semibold">1200</span> <span className="text-sm font-normal text-gray-500">PKR</span>
                                        </Typography>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <Typography className="text-sm font-normal" gutterBottom color="text.secondary">Total earnings</Typography>
                                        <Typography variant="">
                                            <span className="text-base font-semibold">25644</span> <span className="text-sm font-normal text-gray-500">PKR</span>
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-span-1 relative">
                        <Card sx={{ maxWidth: 300, height: 380 }} className="opacity-50 text-center shadow-none border rounded">
                            <CardMedia
                                sx={{ maxWidth: '300px', height: '200px' }}
                                className="px-6 pt-6"
                                component="img"
                                image="/assets/images/GariConnect/cardimage.png"
                                alt="logo"
                            />
                            <CardContent>
                                <div className="flex flex-row justify-between items-center mb-10">
                                    <div className="rounded-sm flex flex-row space-x-6">
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            max={4}
                                            sx={{ fontSize: 18 }}
                                        />
                                        <Typography className="text-sm font-normal">4.0</Typography>
                                        <Typography className="text-sm font-normal" variant="" color="text.secondary">
                                            25 trips
                                        </Typography>
                                    </div>
                                    <div className="flex">
                                        <MoreHorizIcon onClick={handleClick} className="cursor-pointer" />
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <MenuItem onClick={() => {
                                                setShow(!show);
                                            }}>
                                                <Typography className="text-14" color="text.secondary">Edit</Typography>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography className="text-14" color="text.secondary">View as a guest</Typography>
                                            </MenuItem>
                                            <MenuItem className="flex justify-between items-center">
                                                <Typography className="text-14 mr-96" color="text.secondary">
                                                    Status
                                                    <span className="text-10 ml-4 rounded-full py-4 px-8" style={{ color: '#046AF3', backgroundColor: 'rgba(4, 106, 243, 0.08)' }}>Active</span>
                                                </Typography>
                                                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem onClick={handleClickOpen}>
                                                <Typography className="text-14" sx={{ color: '#F04438' }}>Remove</Typography>
                                            </MenuItem>
                                        </Menu>
                                        <Dialog open={open1} onClose={handleClose1} className="" sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}>
                                            <DialogTitle className="flex-col mx-auto -mb-8">
                                                <img className="mx-auto mb-20" style={{ width: '48px', height: '48px' }} src="assets/images/icons/Featuredicon.svg" alt="logo" />
                                                <Typography className="text-18 font-medium">
                                                    Remove listing
                                                </Typography>
                                            </DialogTitle>
                                            <DialogContent>
                                                <Typography className="text-sm font-normal text-center" color="text.secondary">Are you sure you want to remove this listing?</Typography>
                                            </DialogContent>
                                            <DialogActions>
                                                <div className="px-28 mb-20 w-full grid sm:grid-cols-2 grid-cols-1 gap-14">
                                                    <Button onClick={handleClose1} variant="outlined" size="large" className="mx-auto rounded-md col-span-1" sx={{ width: 170 }}>
                                                        Yes remove
                                                    </Button>
                                                    <Button onClick={handleClose1} size="large" className="mx-auto rounded-md text-white col-span-1" style={{ backgroundColor: '#D22A8F' }} sx={{ width: 170 }}>
                                                        No
                                                    </Button>
                                                </div>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <Typography className="text-base font-semibold" gutterBottom variant="">
                                            Honda Afb 8895- 19
                                        </Typography>
                                        <Typography className="text-sm font-normal mr-auto" variant="" color="text.secondary">
                                            Gulberg 3
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <Divider className="my-12" />
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <Typography className="text-sm font-normal" gutterBottom variant="" color="text.secondary">
                                            Rate per day
                                        </Typography>
                                        <Typography className="mr-auto">
                                            <span className="text-base font-semibold">1200</span> <span className="text-sm font-normal text-gray-500">PKR</span>
                                        </Typography>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <Typography className="text-sm font-normal" gutterBottom color="text.secondary">Total earnings</Typography>
                                        <Typography variant="">
                                            <span className="text-base font-semibold">25644</span> <span className="text-sm font-normal text-gray-500">PKR</span>
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="opacity-100 absolute top-1/2 left-1/3  transform -translate-x-1/3 -translate-y-1/2">
                            <Button variant="contained" className="h-44 rounded-full text-black" style={{ backgroundColor: 'white' }}>Approval pending</Button>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <Card className="flex flex-row justify-center items-center shadow-none border rounded"
                            style={{ maxWidth: '300px', height: '350px' }}>
                            <CardContent>
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-center items-center cursor-pointer mb-20 w-84 h-84 bg-pink-50 rounded-full">
                                        <AddIcon className="" size="medium" sx={{ color: '#D22A8F' }} />
                                    </div>
                                    <Typography className="text-sm text-gray-700 font-normal">List new car</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                : <div><EditCarlisting /></div>
            }
        </div >
    )
}

export default MyCars



// import { Card, Typography, Divider } from '@mui/material'
// import React from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Rating from '@mui/material/Rating';
// import ImageUploading from "react-images-uploading";

// const MyCars = () => {
//     const [value, setValue] = React.useState(4);

//     const [images, setImages] = React.useState([]);
//     const maxNumber = 69;
//     const onChange = (imageList, addUpdateIndex) => {
//         // data for submit
//         console.log(imageList, addUpdateIndex);
//         setImages(imageList);
//     };

//     return (
//         <ImageUploading
//             multiple
//             value={images}
//             onChange={onChange}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//         >
//             {({
//                 imageList,
//                 onImageUpload,
//                 onImageRemoveAll,
//                 onImageUpdate,
//                 onImageRemove,
//                 isDragging,
//                 dragProps
//             }) => (
//                 <div className="flex flex-wrap -m-3">
//                     <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
//                         {imageList.map((image, index) => (
//                             <Card key={index} sx={{ maxWidth: 306, height: 332 }} className="text-center rounded">
//                                 <CardMedia
//                                     className="px-6 pt-6"
//                                     component="img"
//                                     height="293"
//                                     width="172"
//                                     image={image.data_url}
//                                     alt="logo"
//                                 />
//                                 <CardContent>
//                                     <div className="flex flex-row justify-end items-center -mt-44 mb-24">
//                                         <div className="bg-white py-2 px-4 rounded-sm flex flex-row space-x-6">
//                                             <Rating
//                                                 name="simple-controlled"
//                                                 value={value}
//                                                 onChange={(event, newValue) => {
//                                                     setValue(newValue);
//                                                 }}
//                                                 max={4}
//                                                 size="small"
//                                             />
//                                             <Typography className="font-normal">4.0</Typography>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-row justify-between">
//                                         <div className="flex flex-col">
//                                             <Typography className="text-base font-semibold" gutterBottom variant="">
//                                                 Honda Afb 8895- 19
//                                             </Typography>
//                                             <Typography className="text-sm font-normal mr-auto" variant="" color="text.secondary">
//                                                 Gulberg 3
//                                             </Typography>
//                                         </div>
//                                         <div className="flex flex-col">
//                                             <MoreHorizIcon className="ml-auto" />
//                                             <Typography className="text-sm font-normal mt-auto" variant="" color="text.secondary">
//                                                 25 trips
//                                             </Typography>
//                                         </div>
//                                     </div>
//                                     <Divider className="my-12" />
//                                     <div className="flex flex-row justify-between">
//                                         <div className="flex flex-col">
//                                             <Typography className="text-sm font-normal" gutterBottom variant="" color="text.secondary">
//                                                 Rate per day
//                                             </Typography>
//                                             <Typography className="mr-auto">
//                                                 <span className="text-base font-semibold">1200</span> <span className="text-sm font-normal text-gray-500">PKR</span>
//                                             </Typography>
//                                         </div>
//                                         <div className="flex flex-col">
//                                             <Typography className="text-sm font-normal" color="text.secondary">Total earnings</Typography>
//                                             <Typography variant="">
//                                                 <span className="text-base font-semibold">25644</span> <span className="text-sm font-normal text-gray-500">PKR</span>
//                                             </Typography>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>


//                     <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
//                         <Card className="flex flex-row justify-center items-center border-dashed border-2 rounded"
//                             style={{ borderColor: '#D22A8F', maxWidth: '306px', height: '332px' }}>
//                             <CardContent>
//                                 <div className="flex flex-col">
//                                     <div className="flex flex-row justify-center items-center cursor-pointer mb-20 w-84 h-84 bg-pink-50 rounded-full">
//                                         <AddIcon
//                                             onClick={onImageUpload}
//                                             className="" size="medium" sx={{ color: '#D22A8F' }} />
//                                     </div>
//                                     <Typography className="text-sm text-gray-700 font-normal">List new car</Typography>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     {/* <div>
//                 <ImageUploading
//                     multiple
//                     value={images}
//                     onChange={onChange}
//                     maxNumber={maxNumber}
//                     dataURLKey="data_url"
//                 >
//                     {({
//                         imageList,
//                         onImageUpload,
//                         onImageRemoveAll,
//                         onImageUpdate,
//                         onImageRemove,
//                         isDragging,
//                         dragProps
//                     }) => (
//                         // write your building UI
//                         <div className="upload__image-wrapper">
//                             <button
//                                 style={isDragging ? { color: "red" } : null}
//                                 onClick={onImageUpload}
//                                 {...dragProps}
//                             >
//                                 Click or Drop here
//                             </button>
//                             &nbsp;
//                             <button onClick={onImageRemoveAll}>Remove all images</button>
//                             {imageList.map((image, index) => (
//                                 <div key={index} className="image-item">
//                                     <img src={image.data_url} alt="" width="100" />
//                                     <div className="image-item__btn-wrapper">
//                                         <button onClick={() => onImageUpdate(index)}>Update</button>
//                                         <button onClick={() => onImageRemove(index)}>Remove</button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </ImageUploading>
//             </div> */}
//                 </div>
//             )}
//         </ImageUploading>
//     )
// }

// export default MyCars