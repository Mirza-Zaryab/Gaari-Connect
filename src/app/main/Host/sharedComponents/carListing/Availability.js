import React from "react";
import { Typography, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addDayId } from "./../../ListStepper/store/setAvailabilitySlice";

const schema = yup.object().shape({
  Monday: yup.boolean().oneOf([true], "You must turn it on."),
  Tuesday: yup.boolean().oneOf([true], "You must turn it on."),
  Wednesday: yup.boolean().oneOf([true], "You must turn it on."),
  Thursday: yup.boolean().oneOf([true], "You must turn it on."),
  Friday: yup.boolean().oneOf([true], "You must turn it on."),
  Saturday: yup.boolean().oneOf([true], "You must turn it on."),
  Sunday: yup.boolean().oneOf([true], "You must turn it on."),
});

const Availability = () => {
  const dispatch = useDispatch();

  const availabilities = useSelector(
    (state) => state.ListStepperReducer.setAvailability
  );
  console.log(availabilities);
  console.log(" ye dai ye  ", availabilities.days.monday.availability);

  const { handleSubmit, register, reset, control, watch, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  const data = watch();

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#D22A8F",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div>
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Monday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Monday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.monday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        monday: { dayId: "1", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        monday: { dayId: "1", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Tuesday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Tuesday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.tuesday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        tuesday: { dayId: "2", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        tuesday: { dayId: "2", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Wednesday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Wednesday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.wednesday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        wednesday: { dayId: "3", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        wednesday: { dayId: "3", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Thursday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Thursday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.thursday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        thursday: { dayId: "4", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        thursday: { dayId: "4", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Friday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Friday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.friday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        friday: { dayId: "5", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        friday: { dayId: "5", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Saturday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Saturday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.saturday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        saturday: { dayId: "6", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        saturday: { dayId: "6", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Sunday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Sunday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                checked={availabilities.days.sunday.availability}
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        sunday: { dayId: "7", availability: true },
                      })
                    );
                  } else {
                    dispatch(
                      addDayId({
                        ...availabilities.days,
                        sunday: { dayId: "7", availability: false },
                      })
                    );
                  }
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />

      <div>
        {/* <Button
          className="h-44 rounded-lg text-white mt-40"
          style={{ backgroundColor: "#D22A8F" }}
        >
          Save Info
        </Button> */}
      </div>
    </div>
  );
};

export default Availability;
