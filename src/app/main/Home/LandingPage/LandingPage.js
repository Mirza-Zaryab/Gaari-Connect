import * as React from "react";
import Header from "../header/Header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import Footer from "../Footer/Footer";
import SearchBar from "../../Host/sharedComponents/SearchBar";
// import CarCarousel from "../carousel/CarCarousel";

function LandingPage() {
  const [value, setValue] = React.useState(2);
  return (
    <div className="App">
      <div>
        <Header style={{ position: "absolute" }} />
      </div>

      <div>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:ml-76 ml-36">
          <div className="sm:col-span-1 mt-200">
            <Typography style={{color:"#000000"}} className="text-72 font-600">
              Easy savari,<br></br>manzil asaan.
            </Typography>
            <Typography
              className="font-500 text-xl tracking-normal"
              style={{ color: "#667085"}}
            >
              We connect people with the vehicles they need and love – 24 hours
              a day, seven days a week – via any connected device at guaranteed
              best rates!
            </Typography>
          </div>
          <div
            className="sm:col-span-2 sm:ml-360"
            style={{
              backgroundImage: "url('/assets/images/backgrounds/bghome.jpg')",
              backgroundRepeat: "repeat-y",
            }}
          >
            <div>
              <img
                className="mt-200"
                width="815"
                src="assets/images/logos/landingcar.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-60">
          <SearchBar />
        </div>
        <div className="sm:flex sm:ml-76 ml-36 mt-200">
          <img
            width="700"
            height="600px"
            src="assets/images/GariConnect/Car Owner.png"
            alt="logo"
          />
          <div className="mt-20 sm:ml-96">
            <h4
              style={{
                fontWeight: "400px",
                fontSize: "12px",
                color: "#D22A8F",
                marginBottom: "10px",
              }}
            >
              Start Booking
            </h4>
            <Typography className="text-3xl font-semibold">
              Get affordable,reliable car<br></br>in minute.
            </Typography>
            <div className="flex" style={{ marginTop: "50px" }}>
              <img width="25" src="assets/images/logos/Icon1.svg" alt="logo" />
              <Typography
                className="text-16px font-medium"
                variant="h5"
                style={{ marginLeft: "20px" }}
              >
                Variety
              </Typography>
            </div>
            <p
              style={{
                marginLeft: "50px",
                color: "#000000",
                opacity: "0.5",
                marginTop: "5px",
              }}
            >
              Take yor pick from wide range of models
            </p>
            <div className="flex" style={{ marginTop: "50px" }}>
              <img width="25" src="assets/images/logos/Icon 2.svg" alt="logo" />
              <Typography
                className="text-16px font-medium"
                variant="h5"
                style={{ marginLeft: "20px" }}
              >
                Verified Cars
              </Typography>
            </div>
            <p
              style={{
                marginLeft: "50px",
                color: "#000000",
                opacity: "0.5",
                marginTop: "5px",
              }}
            >
              Rent from our list of votted owner without hassle
            </p>
            <div className="flex" style={{ marginTop: "50px" }}>
              <img width="25" src="assets/images/logos/Icon 3.svg" alt="logo" />
              <Typography
                className="text-16px font-medium"
                variant="h5"
                style={{ marginLeft: "20px" }}
              >
                24/7 Support
              </Typography>
            </div>
            <p
              style={{
                marginLeft: "50px",
                color: "#000000",
                opacity: "0.5",
                marginTop: "5px",
              }}
            >
              Support teams ready to help you any time of the day
            </p>
            <Button
              variant="contained"
              style={{
                marginTop: "90px",
                width: "113px",
                height: "44px",
                borderRadius: "8px",
                background: "#D22A8F",
              }}
            >
              Book a car
            </Button>
          </div>
        </div>
        <Typography
          className="text-36px font-medium text-center"
          variant="h3"
          style={{ marginTop: "174px" }}
        >
          Browse by make
        </Typography>
        <Typography
          className="text-5 font-medium text-center"
          variant="h6"
          style={{ marginTop: "10px", color: "#000000", opacity: "0.5" }}
        >
          Pick a makel from our variety and make your savari, your chices.
        </Typography>
        <div style={{ marginTop: "200px" }}></div>
        <div className="sm:flex flex-row justify-between">
          <div style={{ marginTop: "100px" }}>
            <h1 style={{ fontSize: "42px", fontWeight: "600" }}>
              Your Safety drive us
            </h1>
            <Typography className="text-lg mt-40 font-normal text-black opacity-50 leading-7">
              They are not brethren; they are not underlings are other<br></br>
              nations, caught with our selves in the net of life and time,
              <br></br>
              fellow prisoners of the splendor and travail of the earth,
              <br></br>
              <br></br>
              <br></br>
              Are not underlings are other nations, caught with our selves
              <br></br> in the net os life and time, felloew prisoner.
            </Typography>
            <div className="sm:flex sm:ml-76 ml-36 mt-72">
              <Button
                variant="contained"
                style={{
                  width: "204px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "#D22A8F",
                }}
              >
                Learn about insurance
              </Button>
              <Typography className="text-xs font-medium leading-6 sm:ml-36 ml-16 mt-10">
                See community guideline <ArrowForwardIcon></ArrowForwardIcon>
              </Typography>
            </div>
          </div>
          <div>
            <img
              className="mr-96"
              height="100px"
              width="600px"
              src="assets/images/GariConnect/FS.png"
              alt="logo"
            />
          </div>
        </div>
        <div
          className="sm:flex mt-96 h-auto"
          style={{
            backgroundColor: "#000000",
            marginTop: "100px",
          }}
        >
          <div className="ml-52 mt-48">
            <img
              height="10px"
              width="500px"
              src="assets/images/GariConnect/enter.png"
              alt="logo"
            />
          </div>
          <div className="ml-76 mt-96">
            <h5
              style={{ fontSize: "12px", fontWeight: "500", color: "#C3CBCD" }}
            >
              Become a host
            </h5>
            <h1
              style={{ fontSize: "36px", fontWeight: "600", color: "#FFFFFF" }}
            >
              Start entrepreneurship, grow<br></br>and earn
            </h1>
            <div className="flex" style={{ marginTop: "20px" }}>
              <img width="25" src="assets/images/logos/11.svg" alt="logo" />
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  marginLeft: "20px",
                }}
              >
                Reliable earning
              </h1>
            </div>
            <p style={{ color: "#FFFFFF", opacity: "0.5", marginLeft: "45px" }}>
              Make money,Keep your tips,and cash out when<br></br>you want
            </p>
            <div className="flex" style={{ marginTop: "20px" }}>
              <img width="25" src="assets/images/logos/22.svg" alt="logo" />
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  marginLeft: "20px",
                }}
              >
                A flexible shedule
              </h1>
            </div>
            <p style={{ color: "#FFFFFF", opacity: "0.5", marginLeft: "45px" }}>
              Be your own boss and driver whenever it work for<br></br>you.
            </p>
            <div className="flex" style={{ marginTop: "20px" }}>
              <img width="25" src="assets/images/logos/33.svg" alt="logo" />
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  marginLeft: "20px",
                }}
              >
                Get paid instantly
              </h1>
            </div>
            <p style={{ color: "#FFFFFF", opacity: "0.5", marginLeft: "45px" }}>
              Cash out your earning whenever you want
            </p>
            <div className="sm:flex">
              <Button
                variant="contained"
                style={{
                  width: "150px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "#D22A8F",
                  marginTop: "10px",
                }}
              >
                Become a host
              </Button>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#FFFFFF",
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
              >
                Start your fleet <ArrowForwardIcon></ArrowForwardIcon>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-96 flex flex-row justify-center">
          <h1 className="text-3xl font-semibold">Happy host experiences</h1>
        </div>
        <div className="mt-10">
          <Typography className="text-lg font-normal opacity-50 text-center">
            We've got option to get where you are gooing.Choose a
          </Typography>
          <Typography className="ml-40 text-lg font-normal opacity-50 text-center">
            car market that suit your mood and budget.
          </Typography>
        </div>
        <div className="sm:flex flex-row justify-center mt-96 sm:space-x-10 space-y-10">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="flex">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  size="large"
                />
                <h2 className="ml-10">4.0</h2>
              </div>
              <Typography
                variant="p"
                component="div"
                style={{ color: "#667085" }}
              >
                They are not brethren; they are not<br></br> underlings other
                nations, caught<br></br>with ourselves in the net of life and
                <br></br>
                time, fellow prisoner of the splendor <br></br>and travail of
                the earth.
              </Typography>
              <div className="flex" style={{ marginTop: "40px" }}>
                <img
                  width="69"
                  height="103px"
                  style={{ borderRadius: "50%" }}
                  src="assets/images/GariConnect/card.png"
                  alt="logo"
                />
                <div style={{ marginTop: "20px", marginLeft: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "500px" }}>
                    Shahzaib Ali
                  </h3>
                  <p
                    style={{
                      fontWeight: "400px",
                      fontSize: "12px",
                      opacity: "0.5",
                    }}
                  >
                    Top Rated Host
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="" sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="flex">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  size="large"
                />
                <h2 className="ml-10">4.0</h2>
              </div>
              <Typography
                variant="p"
                component="div"
                style={{ color: "#667085" }}
              >
                They are not brethren; they are not<br></br> underlings other
                nations, caught<br></br>with ourselves in the net of life and
                <br></br>
                time, fellow prisoner of the splendor <br></br>and travail of
                the earth.
              </Typography>
              <div className="flex" style={{ marginTop: "40px" }}>
                <img
                  width="69"
                  height="103px"
                  style={{ borderRadius: "50%" }}
                  src="assets/images/GariConnect/card.png"
                  alt="logo"
                />
                <div style={{ marginTop: "20px", marginLeft: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "500px" }}>
                    Shahzaib Ali
                  </h3>
                  <p
                    style={{
                      fontWeight: "400px",
                      fontSize: "12px",
                      opacity: "0.5",
                    }}
                  >
                    Top Rated Host
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="" sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="flex">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  size="large"
                />
                <h2 className="ml-10">4.0</h2>
              </div>

              <Typography
                variant="p"
                component="div"
                style={{ color: "#667085" }}
              >
                They are not brethren; they are not<br></br> underlings other
                nations, caught<br></br>with ourselves in the net of life and
                <br></br>
                time, fellow prisoner of the splendor <br></br>and travail of
                the earth.
              </Typography>
              <div className="flex" style={{ marginTop: "40px" }}>
                <img
                  width="69"
                  height="103px"
                  style={{ borderRadius: "50%" }}
                  src="assets/images/GariConnect/card.png"
                  alt="logo"
                />
                <div style={{ marginTop: "20px", marginLeft: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "500px" }}>
                    Shahzaib Ali
                  </h3>
                  <p
                    style={{
                      fontWeight: "400px",
                      fontSize: "12px",
                      opacity: "0.5",
                    }}
                  >
                    Top Rated Host
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="" sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="flex">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  size="large"
                />
                <h2 className="ml-10">4.0</h2>
              </div>
              <Typography
                variant="p"
                component="div"
                style={{ color: "#667085" }}
              >
                They are not brethren; they are not<br></br> underlings other
                nations, caught<br></br>with ourselves in the net of life and
                <br></br>
                time, fellow prisoner of the splendor <br></br>and travail of
                the earth.
              </Typography>
              <div className="flex" style={{ marginTop: "40px" }}>
                <img
                  width="69"
                  height="103px"
                  style={{ borderRadius: "50%" }}
                  src="assets/images/GariConnect/card.png"
                  alt="logo"
                />
                <div style={{ marginTop: "20px", marginLeft: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "500px" }}>
                    Shahzaib Ali
                  </h3>
                  <p
                    style={{
                      fontWeight: "400px",
                      fontSize: "12px",
                      opacity: "0.5",
                    }}
                  >
                    Top Rated Host
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-52">
          <SearchBar />
        </div>
        <div style={{ marginLeft: "50%", marginTop: "100px" }}>
          <IconButton>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <ArrowForwardIcon fontSize="large" className="arrow" />
          </IconButton>
        </div>
        <div className="sm:flex sm:ml-76 ml-36" style={{ marginTop: "50px" }}>
          <div>
            <img src="assets/images/GariConnect/c11.png" alt="logo" />
          </div>
          <div style={{ marginLeft: "90px", marginTop: "50px" }}>
            <h1 style={{ fontSize: "42px", fontWeight: "600" }}>
              Start your business<br></br> with us
            </h1>
            <div style={{ marginTop: "10px" }}>
              <p className="p">
                They are not brethren; they are not underling are other<br></br>{" "}
                nation, caught with ourselves in the net of life and time,
                <br></br>fellow prisoner of the splendor and travail of the
                earth.
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <p className="p">
                Are not underling are other nations, caught with ourselves
                <br></br>in the net of life and time, fellow prisoners.
              </p>
            </div>
            <div style={{ marginTop: "90px" }}>
              <Button
                style={{
                  width: "150px",
                  height: "44px",
                  background: "#D22A8F",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                }}
              >
                Start your fleet
              </Button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "150px", textAlign: "center" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "600" }}>
            Ready to go somewhere?
          </h1>
        </div>
        <div className="font-normal text-lg opacity-50 text-center">
          <p>We've got option to get where you are gooing.Choose a</p>
          <p>car market that suit your mood and budget.</p>
        </div>

        <div className="sm:ml-76 ml-36">
          <h1
            className="mt-96 text-4xl font-semibold"
            style={{
              color: "#000000",
            }}
          >
            Browse hundreds of cars<br></br>in Lahore City
          </h1>
          <Box
            sx={{
              width: "526px",
              height: "44px",
              maxWidth: "100%",
            }}
            className="field"
          >
            <TextField className="mt-24" fullWidth label="Search area" />
          </Box>
          <div className="sm:flex mt-64">
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
          <div className="sm:flex" style={{ marginTop: "30px" }}>
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
          <div className="sm:flex" style={{ marginTop: "30px" }}>
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
          <div className="sm:flex" style={{ marginTop: "30px" }}>
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
          <div className="sm:flex" style={{ marginTop: "30px" }}>
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
          <div className="sm:flex" style={{ marginTop: "30px" }}>
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
          <div className="sm:flex" style={{ marginTop: "30px" }}>
            <div>
              <h4 className="sa">Gulberg</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Samanabad</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Allma Iqbal Town</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Shadman</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">DHA phase 4</h4>
              <p className="sap">254 cars</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h4 className="sa">Paragon City</h4>
              <p className="sap">254 cars</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
