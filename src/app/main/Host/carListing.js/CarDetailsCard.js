import { Card, Typography, Divider } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CarDetailsCard = ({ carslistingdata }) => {
  const [value, setValue] = React.useState(4);

  const imageUrl = carslistingdata.image;

  return (
    <div className="flex flex-wrap -m-3">
      <div className="w-full  flex flex-col p-3">
        <Card
          sx={{ maxWidth: 307, height: 395 }}
          className="text-center rounded"
        >
          <CardActionArea component={Link} to="/carddetail">
            <CardMedia
              className="px-6 pt-6"
              component="img"
              style={{ height: 180 }}
              image={imageUrl}
              // '/assets/images/GariConnect/cardimage.png'
              alt="logo"
            />
          </CardActionArea>
          <CardContent>
            <div className="flex flex-row items-center -mt-31 mb-2">
              <div className="bg-white py-2  rounded-sm flex flex-row space-x-6 mt-12">
                <Rating
                  name="simple-controlled"
                  value={carslistingdata.rating}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  max={4}
                  size="small"
                />
                <Typography className="font-normal">4.0</Typography>
                <Typography className="font-normal" color="text.secondary">
                  {carslistingdata.total_trips} Trips
                </Typography>
              </div>
              {/* <div className='ml-76 mt-14'>
                                <IconButton>
                                    <AddCircleOutlineOutlinedIcon/>
                                </IconButton>
                                </div> */}
              <div className="ml-auto mt-14">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={{
                    color: "#667085",
                    "&.Mui-checked": {
                      color: "#D22A8F",
                    },
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Typography
                className="text-base font-semibold max-w-128 truncate"
                gutterBottom
                variant=""
              >
                {carslistingdata.vehiclename}
              </Typography>
              <Typography
                className="text-sm font-normal mr-auto mb-12 max-w-200 truncate"
                variant=""
                color="text.secondary"
              >
                {carslistingdata.location}
              </Typography>
            </div>
            <div className="flex flex-col">
              {/* <MoreHorizIcon className="ml-auto" /> */}
              {/* <Typography className="text-sm font-normal mt-auto" variant="" color="text.secondary">
                                    25 trips
                                </Typography> */}
            </div>

            <Divider className="" />
            <div className="flex">
              {carslistingdata.iswithdriver && (
                <div>
                  {/* <Typography className="text-sm font-normal" gutterBottom variant="" color="text.secondary">
                                    Rate per day
                                </Typography> */}
                  <Typography
                    className="mr-auto rounded-16 p-8 mt-20"
                    style={{ backgroundColor: "#30C07D14", color: "#30C07D" }}
                  >
                    <span>With Driver</span>
                    {/* <span className="text-sm font-normal text-gray-500 underline">PKR 3500 est.total</span> */}
                  </Typography>
                </div>
              )}
              <div className="ml-auto">
                {/* <Typography className="text-sm font-normal" color="text.secondary">Total earnings</Typography> */}
                <Typography className="pt-10 pl-56">
                  <span className="text-base font-semibold">
                    {carslistingdata.vehicleprice}
                  </span>{" "}
                  <span className="text-sm font-normal text-gray-500">PKR</span>
                </Typography>
                {/* {(carslistingdata.iswithdriver)&& */}
                <Typography className="mt-10">
                  <span className="text-sm font-normal text-gray-500 underline">
                    PKR {carslistingdata.totalprice} est.total
                  </span>
                </Typography>
                {/* } */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
                <Card className="flex flex-row justify-center items-center border-dashed border-2 rounded"
                    style={{ borderColor: '#D22A8F', maxWidth: '306px', height: '332px' }}>
                    <CardContent>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-center items-center cursor-pointer mb-20 w-84 h-84 bg-pink-50 rounded-full">
                                <AddIcon className="" size="medium" sx={{ color: '#D22A8F' }} />
                            </div>
                            <Typography className="text-sm text-gray-700 font-normal">List new car</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div> */}
    </div>
  );
};

export default CarDetailsCard;
