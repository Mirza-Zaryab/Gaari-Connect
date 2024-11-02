import React, { useState } from "react";
import { Typography, TextField, FormControl, FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import { verifyOtpData } from '../../../../app/auth/store/verifyOtpSlice';
import { sendOtp } from '../../../auth/store/forgetSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';
import OTPInput from "otp-input-react";
import Countdown from "react-countdown";

const schema = yup.object().shape({
  otp_code: yup
    .string()
    .required('You must enter Code'),
});

const defaultValues = {
  otp_code: '',
  phone_no: ''
};

function OTP() {

  const history = useHistory();
  const dispatch = useDispatch();
  const otp = useSelector(({ auth }) => auth.forget);

  const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const otpTime = otp.data.customer.data.otp_expiry;

  useEffect(() => {
    setValue('otp_code', '');
    setValue('phone_no', otp.data.customer.data.phone_no);
  }, [reset, setValue, trigger]);

  function onSubmit(model) {
    dispatch(verifyOtpData(model))
      .then((result) => {
        if (result.error) {
          setError(
            "otp_code",
            {
              type: "manual",
              message: "OTP is Invalid"
            })
        } else {
          history.push('/Setpassword');
        }
      });
  }

  function onResend() {
    let phone = {
      phone_no: otp.data.customer.data.phone_no
    };
    dispatch(sendOtp(phone))
      .then(() => {
        console.log("Resend:", otp.data.customer.data.phone_no);
      })
  }

  const Completionist = () => {
    return (
      <Button onClick={onResend} className="text-14 font-medium" style={{ color: '#D22A8F' }}>Resend Code</Button>
    )
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };

  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            minWidth: "524px",
            minHeight: "361px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div style={{ marginTop: "21px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
            >
              Verify
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                color: "#667085",
                marginTop: "10px",
              }}
            >
              Please enter 4 digit code send on your phone 034******59
            </p>
          </div>
          <div className="w-full my-20 ">
            <hr />
          </div>
          <CardContent>
            <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-40">
                <FormControl className="mx-auto" variant="outlined" >
                  <Controller
                    name="otp_code"
                    control={control}
                    rules={{ required: 'otp_code' }}
                    render={({ field: { onChange, value } }) => (
                      <OTPInput
                        value={value}
                        onChange={onChange}
                        error={!!errors.otp_code}
                        required
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        className="mx-auto"
                        inputStyles={{
                          marginRight: 10,
                          marginLeft: 10,
                          border: "1px solid #D0D5DD",
                          borderRadius: "8px",
                          width: "66px",
                          height: "66px",
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "32px",
                        }}
                        disabled={false}

                      />
                    )}
                  />
                  <FormHelperText className="text-red">{errors?.otp_code?.message}</FormHelperText>
                </FormControl>

                <Controller
                  name="phone_no"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      InputProps={{
                        className: "rounded-lg mb-11 mt-6 h-[44px]"
                      }}
                      type="text"
                      hidden
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
                  className="w-8/12 mx-auto text-white rounded-lg"
                >
                  Submit
                </Button>
              </div>
            </form>

            {/* <div className="flex items-center justify-center sm:mt-20 mt-24">
              <div className="flex items-center">
                <p
                  className="mx-10"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Didn't receive code?
                </p>
                <div className="w-auto">
                  <Countdown renderer={renderer} date={new Date(otpTime).getTime()} />
                </div>
              </div>
            </div> */}

            <div className="flex items-center justify-center sm:mt-20 mt-24">
              <div className="flex items-center">
                <p
                  className="mx-10"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Didn't receive code?
                </p>
                <div className="w-auto">
                  <Countdown renderer={renderer} date={new Date(otpTime).getTime()} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:mt-14">
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#344054",
                  textDecoration: "none",
                }}
              >
                Or try
              </Typography>

              <Typography
                className="cursor-pointer"
                onClick={() => history.push('/OtpOption')}
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#D22A8F",
                  textAlign: "center",
                  paddingLeft: "4px"
                }}
              >
                another options
              </Typography>
            </div>
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
    </div >
  );
}
export default OTP;
