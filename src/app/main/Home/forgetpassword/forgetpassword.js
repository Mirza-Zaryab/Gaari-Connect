import React from "react";
import { useEffect } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Signupheader from "../Signupheader/Signupheader";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { sendOtp } from '../../../auth/store/forgetSlice';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';
import { InputAdornment } from "@mui/material";

const schema = yup.object().shape({
  phone_no: yup
    .string()
    .required('You must enter a Phone Number')
    .min(10, 'The Phone Number must be at least 10 digits')
    .max(10, 'The Phone Number should be max 10 digits'),
});

const defaultValues = {
  phone_no: '',
};

function forgetpassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/\D|^0+/g, '') };

  const { isValid, dirtyFields, errors } = formState;

  // useEffect(() => {
  //   setValue('phone_no', '', { shouldDirty: true, shouldValidate: true });
  // }, [reset, setValue, trigger]);

  function onSubmit(model) {
    model.phone_no = "+92" + model.phone_no
    dispatch(sendOtp(model))
      .then((result) => {
        if (result.error) {
          setError(
            "phone_no",
            {
              type: "manual",
              message: "Please Enter correct phone number"
            })
        } else {
          history.push('/Verify');
        }
      });
  }

  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "290  px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div className="flex mt-20">
            <IconButton
              component={Link}
              to="/Signin"
              size="small"
              className="mb-40"
            >
              <ArrowBackIosNewIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
            </IconButton>
            <div className="text-center sm:ml-40 mr-28">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Forgot password
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                Enter your phone number to reset your password
              </p>
            </div>
          </div>
          <div className="w-full mt-20">
            <hr />
          </div>
          <CardContent>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
                marginTop: "21px",
              }}
            >
              Phone number
            </Typography>
            <form
              className="flex flex-col justify-center w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="phone_no"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    InputProps={{
                      startAdornment:
                        <InputAdornment position="start">
                          <Typography className="text-black border-r-1 pr-8 border-black">+92</Typography>
                        </InputAdornment>,
                      className: "rounded-lg mt-6 h-[44px]"
                    }}
                    inputProps={{ maxLength: 10 }}
                    placeholder="3524584205"
                    onInput={(e) => onlyNumbers(e)}
                    error={!!errors.phone_no}
                    required
                    helperText={errors?.phone_no?.message}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />

              <Button
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                style={{
                  backgroundColor: "rgba(210, 42, 143, 1)",
                  height: "44px",
                  fontSize: "16px",
                }}
                className="mt-16 w-full mt-[12px] text-white rounded-lg"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row justify-center ">
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
export default forgetpassword;
