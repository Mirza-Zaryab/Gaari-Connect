import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormHelperText } from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Icon, IconButton, InputAdornment } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitLogin } from 'app/auth/store/loginSlice';
import * as yup from 'yup';
import _ from '@lodash';

const schema = yup.object().shape({
  phoneno: yup
    .string()
    .required('You must enter a Phone Number')
    .min(10, 'The Phone Number must be at least 10 digits')
    .max(10, 'The Phone Number should be max 10 digits'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(10, 'Password is too short - should be 10 chars minimum.'),
});

const defaultValues = {
  phoneno: '',
  password: '',
};

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const login = useSelector(({ auth }) => auth.login);
  const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/\D|^0+/g, '') };

  const { isValid, dirtyFields, errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   setValue('phoneno', '3024728713', { shouldDirty: true, shouldValidate: true });
  //   setValue('password', 'Password@123', { shouldDirty: true, shouldValidate: true });
  // }, [reset, setValue, trigger]);

  // useEffect(() => {
  //   [
  //     {
  //       type: "manual",
  //       name: "phoneno",
  //       message: "Double Check This"
  //     },
  //     {
  //       type: "manual",
  //       name: "password",
  //       message: "Triple Check This"
  //     }
  //   ].forEach(({ name, type, message }) =>
  //     setError(name, { type, message })
  //   );

  // login.errors.forEach((error) => {
  //   setError(error.type, {
  //     type: 'manual',
  //     message: error.message,
  //   });
  // });
  // }, [setError]);

  function onSubmit(model) {
    model.phoneno = "+92" + model.phoneno
    dispatch(submitLogin(model))
      .then((result) => {
        if (result) {
          setError(
            "errorName",
            {
              type: "manual",
              message: result.payload[0].message
            }
          )
        } else {
          history.push('/Home/LandingPage');
        }
      });
  }

  return (
    <div className="h-xl">
      <Signupheader />
      <div
        className="flex flex-col justify-center items-center"
        style={{ marginTop: "36px" }}
      >
        <Card
          className="xs:w-1/3 sm:w-2/3 md:w-1/3 w-full"
          style={{
            border: "1px solid rgba(195, 203, 205, 0.42)",
            marginTop: "150px",
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
                className="w-full h-11 text-black rounded-lg"
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
              <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
                <Typography className="text-sm font-medium text-grey-700">
                  Phone number
                </Typography>
                <Controller
                  name="phoneno"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      InputProps={{
                        className: "mt-6 h-48 rounded-lg",
                        startAdornment:
                          <InputAdornment position="start">
                            <Typography className="text-black border-r-1 pr-8 border-black">+92</Typography>
                          </InputAdornment>
                      }}
                      inputProps={{
                        maxLength: 10
                      }}
                      onInput={(e) => onlyNumbers(e)}
                      placeholder="3524584205"
                      error={!!errors.phoneno}
                      required
                      helperText={errors?.phoneno?.message}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Typography className="text-sm font-medium text-grey-700 mt-20 ml-1.5">
                  Password
                </Typography>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      className="mb-16"
                      type="password"
                      error={!!errors.password}
                      required
                      helperText={errors?.password?.message}
                      variant="outlined"
                      InputProps={{
                        className: 'pr-2 mt-6 h-48 rounded-lg',
                        type: showPassword ? 'text' : 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)} size="large">
                              <Icon className="text-20" color="action">
                                {showPassword ? 'visibility' : 'visibility_off'}
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                <FormHelperText className="text-red">
                  {errors?.errorName?.message}
                </FormHelperText>

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
                    style={{ color: "#D22A8F", textDecoration: "none" }}
                  >
                    Forgot Password
                  </Typography>
                </div>
                <div style={{ marginTop: "19px" }}>
                  <Button
                    type="submit"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
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
              </form>
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
                Didn't have an acount?<a onClick={() => history.push("/Signup")} style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#D22A8F",
                  textAlign: "center",
                  marginTop: "24px",
                  textDecoration: "none",
                }}
                  className="cursor-pointer"
                >
                  Sign up
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row justify-center">
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
export default SignIn;
