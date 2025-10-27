import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

export default function Signin() {
  const [checked, setChecked] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState({
    password: "",
  });
  const passwordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const passwordClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const passwordMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        style={{
          backgroundColor: "rgba(210, 42, 143, 1)",
          fontSize: "16px",
        }}
        className="h-11 text-white rounded-lg w-full"
      >
        Book now
      </Button>
      <Dialog
        style={{ borderRadius: "12px", height: "auto" }}
        fullWidth={true}
        open={open}
        onClose={handleClose}
      >
        <div>
          <Card
            style={{
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div
              className="flex flex-col justify-center text-center"
              style={{ marginTop: "21px" }}
            >
              <h1 className="text-2xl font-semibold text-grey-900">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back! please enter your details.
              </p>
            </div>
            <div className="mt-20">
              <hr style={{ width: "100%" }} />
            </div>
            <CardContent>
              <div className="mt-28 mb-2.5">
                <Button
                  style={{
                    border: "1px solid #D0D5DD",
                    height: "44px",
                    fontSize: "16px",
                  }}
                  className="w-full h-11 text-black rounded-lg "
                >
                  <img
                    width="24px"
                    style={{ marginRight: "12px" }}
                    src="assets/images/GariConnect/Google.png"
                    alt="logo"
                  />{" "}
                  Sign in with Google
                </Button>
              </div>
              <div className="">
                <Button
                  style={{
                    border: "1px solid #D0D5DD",
                    height: "44px",
                    marginTop: "9px",
                    fontSize: "16px",
                  }}
                  className="w-full h-11 text-black rounded-lg"
                >
                  {" "}
                  <img
                    width="24px"
                    style={{ marginRight: "12px" }}
                    src="assets/images/GariConnect/Vector.png"
                    alt="logo"
                  />{" "}
                  Sign in with Facebook
                </Button>
              </div>
              <div
                className="flex flex-row justify-center"
                style={{ marginTop: "28px" }}
              >
                <hr
                  style={{
                    width: "45%",
                    marginTop: "8px",
                    marginRight: "12px",
                  }}
                />
                <p
                  style={{
                    color: "#98A2B3",
                  }}
                >
                  or
                </p>
                <hr
                  style={{
                    width: "45%",
                    marginTop: "8px",
                    marginLeft: "12px",
                  }}
                />
              </div>
              <div className="mx-8 mt-16 mb-7">
                <Typography className="text-sm font-medium text-grey-700">
                  Phone number
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    className="rounded-lg mb-11 "
                    placeholder="+92 | 3524584205"
                    style={{ marginTop: "6px", height: "44px" }}
                  />
                </FormControl>
                <Typography className="text-sm font-medium text-grey-700 mt-20 ml-1.5">
                  Password
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    style={{ marginTop: "6px", height: "44px" }}
                    className="rounded-lg"
                    placeholder="********"
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={passwordChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={passwordClickShowPassword}
                          onMouseDown={passwordMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div
                  className="flex flex-row justify-between items-center"
                  style={{ marginTop: "12px" }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox style={{ color: "#D22A8F" }} defaultChecked />
                    }
                    label="Remember for 30 days"
                  />
                  <Typography
                    component={Link}
                    to="/forgetpassword"
                    className="text-sm text-right mt-2.5 font-medium text-fuchsia-600"
                    style={{
                      color: "#D22A8F",
                      textDecoration: "none",
                    }}
                  >
                    Forgot Password
                  </Typography>
                </div>
                <div style={{ marginTop: "19px" }}>
                  <Button
                    component={Link}
                    to="/Confirmandpay"
                    style={{
                      backgroundColor: "rgba(210, 42, 143, 1)",
                      height: "44px",
                      fontSize: "16px",
                    }}
                    className="w-full h-11 text-white rounded-lg"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
              <div className="sm:mt-20 mt-24">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "24px",
                  }}
                >
                  Didn't have an acount?
                  <a
                    href="/Signup"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#D22A8F",
                      textAlign: "center",
                      marginTop: "24px",
                      textDecoration: "none",
                    }}
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Dialog>
    </div>
  );
}
