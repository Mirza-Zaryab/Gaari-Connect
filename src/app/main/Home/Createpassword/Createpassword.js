import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "@mui/material/Typography";
import { TextField, Icon, IconButton, InputAdornment } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Signupheader from "../Signupheader/Signupheader"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createPassword } from 'app/auth/store/resetPasswordSlice';
import * as yup from 'yup';
import _ from '@lodash';

yup.addMethod(yup.string, "strongPassword", strongPasswordMethod);

function strongPasswordMethod() {
  return this.test("strongPasswordTest", _, function (value) {
    const { path, createError } = this;
    switch (Boolean(value)) {
      case !/^(?=.*[a-z])/.test(value):
        return createError({ path, message: "Password must include lowercase letter" });
      case !/^(?=.*[A-Z])/.test(value):
        return createError({ path, message: "Password must include uppercase letter" });
      case !/^(?=.*[0-9])/.test(value):
        return createError({ path, message: "Password must include digit" });
      case !/^(?=.*[!@#\$%\^&\*])/.test(value):
        return createError({ path, message: "Password must include special character" });
      default:
        return true;
    }
  });
};

const schema = yup.object().shape({
  password: yup.string().required().matches(/(\d)(\d)/, 'Must contain two numbers')
    .min(10, 'Password is too short - should be 10 chars minimum.').strongPassword(),
  password_confirmation: yup
    .string()
    .required('Please enter your password.')
    .min(10, 'Password is too short - should be 10 chars minimum.')
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const defaultValues = {
  password: '',
  password_confirmation: '',
  userId: '',
};

function Createpassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userid = useSelector(({ auth }) => auth.user);
  const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const uid = userid.userId.toString();

  useEffect(() => {
    // setValue('password', '', { shouldDirty: true, shouldValidate: true });
    // setValue('password_confirmation', '', { shouldDirty: true, shouldValidate: true });
    // setValue('userId', '', { shouldDirty: true, shouldValidate: true });
  }, [reset, setValue, trigger]);

  function onSubmit(model) {
    model.userId = uid;
    dispatch(createPassword(model))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled')
          history.push('/SignIn');
      });
  }

  function checkPassword() {
    var pass = document.getElementById('pass1');
    var num = document.getElementById('num');
    var upper = document.getElementById('upper');
    var lower = document.getElementById('lower');
    var len = document.getElementById('len');

    var icon1 = document.getElementById('icon1');
    var icon2 = document.getElementById('icon2');
    var icon3 = document.getElementById('icon3');
    var icon4 = document.getElementById('icon4');

    if (pass.value.match(/^(?=.*[0-9])/)) {
      (num.style.color = 'black') && (icon1.style.color = 'green')
    } else {
      (num.style.color = 'gray') && (icon1.style.color = 'red')
    }

    if (pass.value.match(/^(?=.*[A-Z])/)) {
      (upper.style.color = 'black') && (icon2.style.color = 'green')
    } else {
      (upper.style.color = 'gray') && (icon2.style.color = 'red')
    }

    if (pass.value.match(/^(?=.*[a-z])/)) {
      (lower.style.color = 'black') && (icon3.style.color = 'green')
    } else {
      (lower.style.color = 'gray') && (icon3.style.color = 'red')
    }

    if (pass.value.length < 10) {
      (len.style.color = 'gray') && (icon4.style.color = 'red')
    } else {
      (len.style.color = 'black') && (icon4.style.color = 'green')
    }

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
              height: "518px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <h1
                style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
              >
                Set password
              </h1>
              <p
                style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
              >
                Set a strong password for your account
              </p>
            </div>
            <div className="mt-20">
              <hr style={{ width: "100%" }} />
            </div>
            <CardContent>
              <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",

                    }}
                  >
                    Enter password
                  </Typography>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        id="pass1"
                        onKeyUp={checkPassword}
                        {...field}
                        type="password"
                        error={!!errors.password}
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
                        required
                      />
                    )}
                  />
                </div>

                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    Re-enter password
                  </Typography>
                  <Controller
                    name="password_confirmation"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        type="password"
                        error={!!errors.password_confirmation}
                        helperText={errors?.password_confirmation?.message}
                        variant="outlined"
                        InputProps={{
                          className: 'pr-2 mt-6 h-48 rounded-lg',
                          type: showConfirmPassword ? 'text' : 'password',
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} size="large">
                                <Icon className="text-20" color="action">
                                  {showConfirmPassword ? 'visibility' : 'visibility_off'}
                                </Icon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        required
                      />
                    )}
                  />
                </div>

                <div className="mt-16">
                  <Controller
                    name="userId"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        InputProps={{
                          className: "mb-16 rounded-lg mb-11 mt-6 h-[44px]"
                        }}
                        hidden
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </div>

                <div className="flex" style={{ marginTop: "16px" }}>
                  <DoneIcon id="icon2" className="text-18" />
                  <p id="upper" style={{ fontSize: "12px", fontWeight: "400px", color: "#667085", marginLeft: "10px" }}>
                    An uppercase character
                  </p>
                </div>
                <div className="flex" style={{ marginTop: "12px" }}>
                  <DoneIcon id="icon3" className="text-18" />
                  <p id="lower" style={{ fontSize: "12px", fontWeight: "400px", color: "#667085", marginLeft: "10px", }}>
                    An lowercase character
                  </p>
                </div>
                <div id="icon1" className="flex" style={{ marginTop: "12px" }}>
                  <DoneIcon id="icon1" className="text-18" />
                  <p id="num" style={{ fontSize: "12px", fontWeight: "400px", color: "#667085", marginLeft: "10px" }}>
                    A number (0-9) and/or symbol (Such as !,#, or % )
                  </p>
                </div>
                <div className="flex" style={{ marginTop: "12px" }}>
                  <DoneIcon id="icon4" className="text-18" />
                  <p id="len" style={{ fontSize: "12px", fontWeight: "400px", color: "#667085", marginLeft: "10px", }}>
                    Ten or more character total
                  </p>
                </div>

                <div className="mt-20">
                  <Button
                    type="submit"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    className="w-full text-white"
                    style={{
                      height: "44px",
                      background: "#D22A8F",
                      borderRadius: "8px",
                      fontSize: "16px",
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
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

export default Createpassword;
