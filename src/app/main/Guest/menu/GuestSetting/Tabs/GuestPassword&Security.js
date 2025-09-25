import {
  Button,
  FormControl,
  TextField,
  Typography,
  Box,
  MenuItem,
  InputLabel,
  Select,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitLogin } from "app/auth/store/loginSlice";
import * as yup from "yup";
import _ from "@lodash";

const schema = yup.object().shape({
  current_password: yup
    .string()
    .required("Enter your current password.")
    .min(4, "Password is too short - should be 4 chars minimum."),

  new_password: yup
    .string()
    .required("Enter your new password.")
    .min(4, "Password is too short - should be 4 chars minimum."),

  confirm_password: yup
    .string()
    .required("Enter your new password.")
    .min(4, "Password is too short - should be 4 chars minimum."),
});

const defaultValues = {
  current_password: "",
  new_password: "",
  confirm_password2: "",
};

const Password = () => {
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);
  const {
    control,
    setValue,
    formState,
    handleSubmit,
    reset,
    trigger,
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    setValue("email", "mailto:admin@fusetheme.com", {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("password", "", { shouldDirty: true, shouldValidate: true });
  }, [reset, setValue, trigger]);

  useEffect(() => {
    login.errors.forEach((error) => {
      setError(error.type, {
        type: "manual",
        message: error.message,
      });
    });
  }, [login.errors, setError]);

  function onSubmit(model) {
    dispatch(submitLogin(model));
  }
  return (
    <div className=" h-md">
      <div className="flex flex-row justify-between items-center border-b">
        <div className="">
          <Typography className="text-lg font-medium text-gray-900 ml-24">
            Password & Security
          </Typography>
        </div>
        <div className="flex flex-row space-x-10 mr-10">
          <Button variant="outlined" className="rounded-4">
            Discard
          </Button>
          <Button
            variant="contained"
            className="rounded-4 text-white"
            style={{ backgroundColor: "#D22A8F" }}
          >
            Save changes
          </Button>
        </div>
      </div>
      <Box className=" ml-28 ">
        <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
          Current Password
        </Typography>
        <Controller
          name="current_password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className=""
              fullWidth
              placeholder="Enter current passowrd"
              type="password"
              error={!!errors.current_password}
              helperText={errors?.current_password?.message}
              variant="outlined"
              InputProps={{
                className: "pr-2 mt-6 rounded-8 h-44 w-1/2",
                type: showPassword ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      size="large"
                    >
                      <Icon className="text-20" color="action">
                        {showPassword ? "visibility" : "visibility_off"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          )}
        />
      </Box>

      <Box className=" ml-28">
        <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
          Create new password
        </Typography>
        <Controller
          name="new_password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className=""
              placeholder="Enter new passowrd"
              fullWidth
              type="password"
              error={!!errors.new_password}
              helperText={errors?.new_password?.message}
              variant="outlined"
              InputProps={{
                className: "pr-2 mt-6 rounded-8 h-44 w-1/2",
                type: showPassword1 ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword1(!showPassword1)}
                      size="large"
                    >
                      <Icon className="text-20" color="action">
                        {showPassword1 ? "visibility" : "visibility_off"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          )}
        />
      </Box>

      <Box className=" ml-28">
        <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
          Re-enter new password
        </Typography>
        <Controller
          name="confirm_password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className=""
              placeholder="Re-enter new passowrd"
              fullWidth
              type="password"
              error={!!errors.confirm_password}
              helperText={errors?.confirm_password?.message}
              variant="outlined"
              InputProps={{
                className: "pr-2 mt-6 rounded-8 h-44 w-1/2",
                type: showPassword2 ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword2(!showPassword2)}
                      size="large"
                    >
                      <Icon className="text-20" color="action">
                        {showPassword2 ? "visibility" : "visibility_off"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          )}
        />
      </Box>
    </div>
  );
};

export default Password;
