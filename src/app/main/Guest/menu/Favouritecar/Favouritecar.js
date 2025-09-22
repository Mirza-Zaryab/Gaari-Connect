import React from "react";
import FavouriteCard from "./FavouriteCard";
import { Typography } from "@mui/material";
import GuestNav from "../../GuestNav";
import Footer from "../../../Home/Footer/Footer";


 
export default function Favourite(){
  return(
<div>
  <GuestNav/>
<Typography
        className="md:ml-96 ml-36 mt-28 text-17 font-600"
        style={{ color: "black" }}
      >
        Favourite Cars
      </Typography>
      <div style={{width:'89%'}} className='mx-auto'>
        <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 mt-24 gap-y-28">
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>

          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
          <div className="flex col-span-1">
            <FavouriteCard />
          </div>
        </div>
      </div>
      <div style={{marginTop:"10%"}}>
        <Footer/>
      </div>
</div>
  );
}