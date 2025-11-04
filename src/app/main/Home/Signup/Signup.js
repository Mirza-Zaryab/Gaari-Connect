import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Icon, FormHelperText, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { useHistory } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { submitRegister } from "app/auth/store/registerSlice";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import _ from "@lodash";
import FacebookLogin from "react-facebook-login";
import jwtDecode from 'jwt-decode';

const schema = yup.object().shape({
  firstname: yup.string().required("You must enter your First Name."),
  lastname: yup.string().required("You must enter a Last Name"),
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  phoneno: yup
    .string()
    .required('You must enter a Phone Number')
    .min(10, 'The Phone Number must be at least 10 digits')
    .max(10, 'The Phone Number should be max 10 digits'),
  address: yup
    .string()
    .required('You must enter an address'),
  cityId: yup
    .string()
    .required('You must select a city'),
  gender: yup
    .string()
    .required('You must select a value'),
  photo: yup.mixed()
    .nullable()
    .required('Required Field')
});

const defaultValues = {
  firstname: "",
  lastname: "",
  phoneno: "",
  email: "",
  address: "",
  cityId: "",
  gender: "",
  photo: "",
};

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const responseFacebook = (response) => {
    console.log(response);
  };

  const facebookComponentClicked = (e) => {
    console.log(e);
  };

  function handleCallbackResponse(response) {
    console.log(response);

    const userObj = jwtDecode(response.credential);

    console.log(userObj)

    if (userObj !== null) {
      history.push('/Home/Landingpage')
    }

    // const userInfo = {
    //   firstname: "numsdan",
    //   lastname: "tareiq",
    //   phoneno: "+923184353073",
    //   email: "dgfni@gamil.com",
    //   address: "195-a,mfdgiry",
    //   cityId: "3",
    //   gender: "male",
    //   photo: "./app/files/user/profile/1655186895385-profile.png",
    // };

    // const userInfo = {
    //   firtname: decodeToken.given_name,
    //   lastname: decodeToken.family_name,
    //   // token: decodeToken,
    //   email: decodeToken.email,
    //   phoneno: "+923883507841",
    //   address: "3",
    //   cityId: "3",
    //   gender: "male",
    //   photo: decodeToken.picture,
    //   // isGoogleUser: 1,
    //   // isFacebook: 0,
    // };
    // dispatch(signinwithgoogle(userInfo));

    // console.log(userInfo);
  }

  useEffect(() => {
    /* global google   */
    // debugger;
    google.accounts.id.initialize({
      client_id:
        "48820445384-p5k79rpbr9j905urkpm0bhdu6trjj25u.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      // size: "large",
      width: "230px",
      // border: "1px solid #D0D5DD",
      fontSize: "36px",
      height: "344px",
      // borderRadius: "8px",
    });

    google.accounts.id.prompt();
  }, []);

  // const dispatch = useDispatch();
  const authRegister = useSelector(({ auth }) => auth.register);

  const [baseImage, setBaseImage] = useState("assets/images/profile/placeholderProfile.png");

  const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/\D|^0+/g, '') };

  const { control, formState, handleSubmit, reset, watch, setError, setValue, trigger, register } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  // useEffect(() => {
  //   authRegister.errors.forEach((error) => {
  //     setError(error.type, {
  //       type: 'manual',
  //       message: error.message,
  //     });
  //   });
  // }, [authRegister.errors, setError]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function onSubmit(model) {
    model.photo = baseImage;
    model.phoneno = "+92" + model.phoneno
    dispatch(submitRegister(model))
      .then((result) => {
        if (result) {
          setError(
            "errorName",
            {
              type: "manual",
              message: result.payload[0].message
            }
          )
        }
        else {
          history.push('/Verifyaccount');
        }
      })
  }

  return (
    <div>
      <Signupheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              marginTop: "150px",
              width: "524px",
              height: "auto",
              borderRadius: "4px",
            }}
          >
            <div style={{ marginTop: "21px", textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Welcome
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                To make account Please enter your details.
              </p>
            </div>
            <div className="mt-20">
              <hr style={{ width: "100%" }} />
            </div>
            <CardContent>
              <div
                style={{ marginLeft: "140px", width: "230px" }}
                id="signInDiv"
                // className="hidden"
                onClick={handleCallbackResponse}
              ></div>
              {/* <div style={{ marginTop: "26px" }}>
                <Button
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    border: "1px solid #D0D5DD",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Google.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Google
                </Button>
              </div> */}
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "140px",
                  // height: "89px",
                }}
              >
                <FacebookLogin
                  appId="555674115924311"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={facebookComponentClicked}
                  callback={responseFacebook}
                  textButton="Sign in with Facebook"
                // icon={
                //   <div style={{ marginTop: "6px" }}>
                //     <Button
                //       style={{
                //         border: "1px solid #D0D5DD",
                //         fontSize: "16px",
                //         height: "44px",
                //         borderRadius: "8px",
                //       }}
                //       className="w-full"
                //     >
                //       {" "}
                //       <img
                //         width="25px"
                //         style={{ marginRight: "5px" }}
                //         src="assets/images/GariConnect/Vector.png"
                //         alt="logo"
                //       ></img>{" "}
                //     </Button>
                //   </div>
                // }
                />
              </div>

              {/* <div style={{ marginTop: "6px" }}>
                <Button
                  style={{
                    border: "1px solid #D0D5DD",
                    fontSize: "16px",
                    height: "44px",
                    borderRadius: "8px",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Vector.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Facebook
                </Button>
              </div> */}
              <div
                className="flex flex-row justify-center"
                style={{ marginTop: "8px" }}
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

              <form
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex space-x-10">
                  <div className="w-full">
                    <Typography
                      style={{
                        marginTop: "14px",
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                      }}
                    >
                      First name
                    </Typography>
                    <Controller
                      name="firstname"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          placeholder="First name"
                          fullWidth
                          {...field}
                          type="text"
                          required
                          error={!!errors.firstname}
                          helperText={errors?.firstname?.message}
                          InputProps={{
                            className: "rounded-lg mt-8",
                          }}
                          variant="outlined"
                        />
                      )}
                    />
                  </div>

                  <div className="w-full">
                    <Typography
                      style={{
                        marginTop: "14px",
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                      }}
                    >
                      Last name
                    </Typography>
                    <Controller
                      name="lastname"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          placeholder="Last name"
                          fullWidth
                          {...field}
                          type="text"
                          required
                          error={!!errors.lastname}
                          helperText={errors?.lastname?.message}
                          InputProps={{
                            className: "rounded-lg mt-8",
                          }}
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                </div>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Enter email address
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      placeholder="abc@gmail.com"
                      fullWidth
                      {...field}
                      type="text"
                      required
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      InputProps={{
                        className: "rounded-lg mt-8",
                      }}
                      variant="outlined"
                    />
                  )}
                />

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Phone number
                </Typography>
                <Controller
                  name="phoneno"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      placeholder="3524584205"
                      inputProps={{
                        maxLength: 13,
                        maxLength: 10
                      }}
                      fullWidth
                      {...field}
                      type="text"
                      required
                      error={!!errors.phoneno}
                      helperText={errors?.phoneno?.message}
                      onInput={(e) => onlyNumbers(e)}
                      InputProps={{
                        className: "rounded-lg mt-8",
                        startAdornment:
                          <InputAdornment position="start">
                            <Typography className="text-black border-r-1 pr-8 border-black">+92</Typography>
                          </InputAdornment>,
                        className: 'rounded-lg mt-8'
                      }}
                      variant="outlined"
                    />
                  )}
                />

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Street Address
                </Typography>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      placeholder="House# 26, St. 14, DHA"
                      fullWidth
                      {...field}
                      type="text"
                      required
                      error={!!errors.address}
                      helperText={errors?.address?.message}
                      InputProps={{
                        className: "rounded-lg mt-8",
                      }}
                      variant="outlined"
                    />
                  )}
                />

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  City
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="cityId"
                    control={control}
                    rules={{ required: "City" }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        className="mt-8 mb-16"
                        sx={{ borderRadius: "8px", height: "44" }}
                        IconComponent={() => (
                          <KeyboardArrowDownIcon
                            className="mr-10"
                            style={{ color: "rgba(16, 24, 40, 1)" }}
                          />
                        )}
                        error={!!errors.cityId}
                        required
                        helpertext={errors?.cityId?.message}
                        value={value}
                        onChange={onChange}
                        labelId="select-city"
                      >
                        {/* <MenuItem value="1">Islamabad</MenuItem>
                        <MenuItem value="2">Karachi</MenuItem> */}
                        <MenuItem value="3">Lahore</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Gender
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: "Gender" }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        className="mt-8 mb-16"
                        sx={{ borderRadius: "8px", height: "44" }}
                        IconComponent={() => (
                          <KeyboardArrowDownIcon
                            className="mr-10"
                            style={{ color: "rgba(16, 24, 40, 1)" }}
                          />
                        )}
                        error={!!errors.gender}
                        required
                        helpertext={errors?.gender?.message}
                        value={value}
                        onChange={onChange}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>

                <Typography
                  className="font-medium text-sm mt-24"
                  style={{ color: "#344054" }}
                >
                  Upload profile photo
                </Typography>
                <div>
                  <input
                    htmlFor="photo"
                    className="hidden"
                    {...register("photo")}
                    type="file"
                    id="photo"
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />

                  <div className="flex items-center mt-12">
                    <img style={{ borderRadius: '50%', height: '60px', width: '60px' }} src={baseImage} />
                    <label
                      htmlFor="photo"
                      className="ml-12 font-medium text-sm cursor-pointer"
                      style={{ color: "#D22A8F" }}
                    >
                      Browse
                    </label>
                  </div>
                </div>
                {errors.photo && <p>{errors.photo.message}</p>}

                <FormHelperText className="text-red">
                  {errors?.errorName?.message}
                </FormHelperText>
                <div style={{ marginTop: "20px" }}>
                  <Button
                    type="submit"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    style={{
                      height: "44px",
                      background: "#D22A8F",
                      fontSize: "16px",
                    }}
                    className="w-full rounded-lg text-white"
                  >
                    Sign up
                  </Button>
                </div>
              </form>
              <div className="sm:mt-20 mt-24">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "24px",
                  }}
                >
                  Already have an account?
                  <a
                    onClick={() => history.push("/Signin")}
                    className="cursor-pointer"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#D22A8F",
                      textAlign: "center",
                      marginTop: "24px",
                      textDecoration: "none",
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-60">
        <Typography
          className="absolute bottom-0 text-16 font-normal pb-10"
          style={{ color: "#98A2B3" }}
        >
          © 2022 GariConnect. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Signup;
