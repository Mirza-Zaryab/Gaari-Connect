import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { Link, useHistory } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Radio from "@mui/material/Radio";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { sendOtp } from "app/auth/store/forgetSlice";
import { otpViaCall } from "app/auth/store/forgetSlice";
import { otpViaWhatsapp } from "app/auth/store/forgetSlice";
import * as yup from 'yup';
import _ from '@lodash';
import { Divider } from "@mui/material";

const schema = yup.object().shape({
  otpMethod: yup.string()
});

const defaultValues = {
  otpMethod: '',
};

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#D22A8F',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#D22A8F',
  },
});
function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function Option() {
  const [radioValue, setRadioValue] = useState('1');

  const history = useHistory();
  const dispatch = useDispatch();
  const otp = useSelector(({ auth }) => auth.user);
  console.log(otp.phoneno)
  const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  useEffect(() => {
    setValue('otpMethod', '', { shouldDirty: true, shouldValidate: true });
  }, [reset, setValue, trigger]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setRadioValue(event.target.value);
  };

  function onSubmit() {
    debugger
    if (radioValue === '1') {
      let phone = {
        phone_no: otp.phoneno
      };
      dispatch(sendOtp(phone));
      history.push('/Verifyaccount')
    }
    else if (radioValue === '2') {
      let phone = {
        userphone: otp.phoneno
      };
      dispatch(otpViaCall(phone));
      history.push('/Verifyaccount')
    }
    else {
      let phone = {
        userphone: otp.phoneno
      };
      dispatch(otpViaWhatsapp(phone));
      history.push('/Verifyaccount')
    }
  }

  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            minWidth: "524px",
            maxHeight: "450px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div className="flex mt-20">
            <IconButton onClick={() => history.push('/Verifyaccount')} size="small" className="sm:mb-10 mb-24">
              <ArrowBackIosNewIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
            </IconButton>
            <div style={{ marginTop: "21px", marginLeft: "1%" }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Try other options
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                  marginTop: "10px",
                }}
              >
                Choose option where we can send your verification code
              </p>
            </div>
          </div>
          <div className="w-full mt-20 ">
            <hr />
          </div>

          <CardContent>
            <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <Controller
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.otpMethod} required>
                      <RadioGroup
                        {...field}
                        value={radioValue}
                        onChange={handleChange}
                      >
                        <div className="w-full">
                          <div className="flex justify-between items-center my-10">
                            <div className="flex items-center space-x-16">
                              <img width="18" src="assets/images/logos/message.svg" alt="logo" />
                              <Typography
                                className="font-medium text-base"
                                style={{ color: "#344054" }}
                              >
                                Send code via SMS
                              </Typography>
                            </div>
                            <div>
                              <FormControlLabel value="1" control={<BpRadio />} label="" />
                            </div>
                          </div>
                          <Divider />
                          <div className="flex justify-between items-center my-10">
                            <div className="flex items-center space-x-16">
                              <img width="20" src="assets/images/logos/codecontact.svg" />
                              <Typography
                                className="font-medium text-base"
                                style={{ color: "#344054" }}
                              >
                                Send code via Call
                              </Typography>
                            </div>
                            <div>
                              <FormControlLabel value="2" control={<BpRadio />} label="" />
                            </div>
                          </div>
                          <Divider />
                          <div className="flex justify-between items-center my-10">
                            <div className="flex items-center space-x-16">
                              <img width="23" src="assets/images/logos/whatsapp.svg" />
                              <Typography
                                className="font-medium text-base"
                                style={{ color: "#344054" }}
                              >
                                Send code via Whatsapp
                              </Typography>
                            </div>
                            <div>
                              <FormControlLabel value="3" control={<BpRadio />} label="" />
                            </div>
                          </div>
                          <Divider />
                        </div>
                      </RadioGroup>
                      <FormHelperText>{errors?.otpMethod?.message}</FormHelperText>
                    </FormControl>
                  )}
                  name="otpMethod"
                  control={control}
                />
              </div>

              <div className="sm:mt-28 mt-16">
                <Button
                  type="submit"
                  // disabled={_.isEmpty(dirtyFields) || !isValid}
                  style={{
                    backgroundColor: "rgba(210, 42, 143, 1)",
                    height: "44px",
                    fontSize: "16px",
                  }}
                  className="w-full text-white rounded-lg"
                >
                  Resend code
                </Button>
              </div>
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
export default Option;
