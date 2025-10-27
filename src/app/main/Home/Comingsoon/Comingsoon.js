import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { motion } from 'framer-motion';

export default function () {

  let boxVariants = {};
  const isMobile = window.innerWidth < 600;
  if (!isMobile) {
    boxVariants = {
      hidden: { y: -100, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { delay: 1, duration: 1.5 } }
    };
  }
  else {
    boxVariants = {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { delay: 1, duration: 1.5 } }
    };
  }

  return (
    <div className="h-auto">
      <div className="flex flex-row justify-center mt-32">
        <motion.img src="assets/images/logos/ComingsoonLogo.svg" alt="logo"
          initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 1.5 } }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1.5 } }}
        className="h-640"
        style={{ backgroundImage: "url('/assets/images/backgrounds/bgimg.jpg')" }}
      >
        <div className="sm:flex justify-between sm:mt-68 mt-40">
          <div className="mx-20 sm:mx-96">
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 1.5 } }} className="text-center sm:text-left -mx-20 sm:mx-auto">
              <Typography
                className="font-normal text-base mb-20 sm:mb-0"
                style={{ color: "#98A2B3" }}
              >
                Coming Soon
              </Typography>
              <Typography
                className="sm:text-6xl text-4xl font-medium mt-8"
                style={{ color: "#000000" }}
              >
                Easy Savari<br></br>Manzil asaan..
              </Typography>
              <Typography
                className="font-300 text-sm sm:text-base mt-32 sm:mt-12"
                style={{ color: "#667085" }}
              >
                Stay tuned for an exciting and convenient service
              </Typography>
              <Typography className="font-300 text-sm sm:text-base" style={{ color: "#667085" }}>
                coming your way to make your travel seamless.
              </Typography>
            </motion.div>

            <motion.div variants={boxVariants} initial="hidden" animate="visible" className="absolute sm:static bottom-128 sm:bottom-auto w-full sm:w-auto pr-40 sm:pr-0">
              <Typography className="font-medium text-xl sm:mt-44 mb-6 sm:mr-0 mr-8">
                Get notified when we launch!
              </Typography>
              <div className="flex items-center mb-4 h-40 sm:h-52 bg-white"
                style={{ borderRadius: '30px', border: '1px solid #E6E9EA' }}>
                <TextField
                  fullWidth
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  className="pl-16"
                  placeholder="Your email address"
                />
              </div>
              <Typography
                className="ml-10 mb-16 text-xs font-normal"
                style={{ color: "#667085" }}
              >
                Don't worry, we won't spam you.
              </Typography>

              <Button fullWidth variant="contained"
                className="h-40 sm:h-52 rounded-full text-12 sm:text-16 font-normal"
                style={{ backgroundColor: '#D22A8F' }}
              >
                Notify me
              </Button>
            </motion.div>
          </div>

          <div className="mt-60 sm:mt-20 mb-20 sm:mb-auto">
            <motion.img initial={{ x: 1000 }} animate={{ x: 0, transition: { delay: 1, duration: 1.5 } }} className="w-auto sm:h-400 sm:absolute sm:top-80 sm:left-512 md:absolute md:top-136 md:left-lg" style={{}} src="assets/images/GariConnect/pinkcar.png" alt="logo" />
          </div>

          <div
            className="h-48 sm:h-80 w-full flex justify-center"
            style={{ backgroundColor: "#FFFFFF", position: "absolute", bottom: "0" }}
          >
            <Typography
              className="text-xs my-auto font-normal"
              style={{ color: "#98A2B3" }}
            >
              © 2022 GariConnect. All rights reserved.
            </Typography>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
