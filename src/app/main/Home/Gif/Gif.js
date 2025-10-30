import React, { useEffect } from "react";
import Comingsoon from "../Comingsoon/Comingsoon";

export default function Gif() {

  useEffect(() => {
    const timer = setTimeout(() => {
       redirect('/Comingsoon')
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <img src="assets/images/GariConnect/Logo.gif" />
    </div>
  );
}
