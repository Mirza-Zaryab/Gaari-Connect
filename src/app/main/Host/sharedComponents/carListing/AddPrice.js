import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  addAdditional_Price,
  addPickAndDrop,
  addPrice,
  addPricePerDay,
  addPrice_inc_driver,
  addWith_driver,
} from "./../../ListStepper/store/setPricesSlice";

const schema = yup.object().shape({
  price: yup.string().required("You must enter a value"),
  driverPrice: yup.string().required("You must enter a value"),
  additionalPrice: yup.string().required("You must enter a value"),
});

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#D22A8F",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#D22A8F",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
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
const AddPrice = () => {
  const dispatch = useDispatch();
  const stepperData = useSelector((state) => state.ListStepperReducer);

  const [priceVal, setPriceVal] = useState(0);
  const [driverVal, setDriverVal] = useState(0);
  const [addVal, setAddVal] = useState(0);

  const [priceData, setPriceData] = useState(0);
  const [cutprice, setCutPrice] = useState(0);
  const [withDriverFlag, setWithDriverFlag] = useState(true);

  const withDriverFlagHandle = () => {
    dispatch(addWith_driver(!withDriverFlag));

    dispatch(addPickAndDrop(!withDriverFlag));
    setWithDriverFlag(!withDriverFlag);
  };

  const { handleSubmit, register, reset, control, watch, formState, setValue } =
    useForm({
      mode: "all",
      resolver: yupResolver(schema),
    });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  // const onSubmit = (data) => {
  //   console.log("adnan", data);

  //   const finalPrice =
  //     ((parseInt(data.price) +
  //       parseInt(data.additionalPrice) +
  //       parseInt(data.driverPrice)) /
  //       100) *
  //     90;

  //   setPriceData(parseInt(data.price) + parseInt(data.additionalPrice) + parseInt(data.driverPrice))
  //   setCutPrice(finalPrice)
  //   debugger;

  //   dispatch(addAdditional_Price(data.additionalPrice));
  //   dispatch(addPrice_inc_driver(data.driverPrice));
  //   dispatch(addPricePerDay(data.price));
  //   dispatch(addPrice(finalPrice));
  // };

  const onfinalSubmit = () => {
    const finalFeatureList = [];
    Object.keys(stepperData.guidelines.guidelines).map((key, index) => {
      if (stepperData.features.featuresList[key].availability == true)
        finalFeatureList.push({
          featureId: stepperData.features.featuresList[key].id,
        });
    });

    const finalGuidelines = [];
    Object.keys(stepperData.guidelines.guidelines).map((key, index) => {
      if (stepperData.guidelines.guidelines[key].availability == true)
        finalGuidelines.push({
          guidelineId: stepperData.guidelines.guidelines[key].id,
        });
    });

    const finalDayIds = [];

    Object.keys(stepperData.setAvailability.days).map((key, index) => {
      if (stepperData.setAvailability.days[key].availability == true)
        finalDayIds.push({
          dayId: stepperData.setAvailability.days[key].dayId,
        });
    });

    const finalSubmit = {
      carDetail: {
        modelId: stepperData.carDetail.data.modelId.toString(),
        categoryId: stepperData.carDetail.data.categoryId,
        chassis_number: stepperData.carDetail.data.chassis_number,
        plate_number: stepperData.carDetail.data.plate_number,
        transmissionId: stepperData.carDetail.data.transmissionId,
        eco_friendly_Id: stepperData.carDetail.data.eco_friendly_Id,
        description: stepperData.carDetail.data.description,
        vehicle_type_id: stepperData.carDetail.data.vehicle_type_id,
      },
      location: {
        latitude: stepperData.location.latitude,
        longitude: stepperData.location.longitude,
        address: stepperData.location.address,
      },
      features: {
        mandatoryFeatures: {
          fueltype: stepperData.features.mandatoryFeatures.fueltype,
          kmpl: stepperData.features.mandatoryFeatures.kmpl,
          doors: stepperData.features.mandatoryFeatures.doors,
          seats: stepperData.features.mandatoryFeatures.seats,
        },
        featuresList: finalFeatureList,
      },
      guidelines: finalGuidelines,
      setAvailability: {
        days: finalDayIds,
      },
      vehicleimages: {
        images: stepperData.vehicleimages.images,
      },
      setPrice: {
        price: stepperData.setPrice.pricePerDay,
        price_inc_driver: stepperData.setPrice.price_inc_driver,
        with_driver: stepperData.setPrice.with_driver,
        pickAndDrop: stepperData.setPrice.pickAndDrop,
        additional_Price: stepperData.setPrice.additional_Price,
        created_by: "1",
      },
    };

    console.log(finalSubmit);

    axios
      .post("https://api.gariconnect.com:8080/api/vehicle/create", finalSubmit)
      .then((res) => {
        console.log(res);
      });
  };

  const handleChange = (val) => {
    setPriceVal(val.target.value);
    dispatch(addPricePerDay(val.target.value));
  };

  const handleDriverChange = (val) => {
    setDriverVal(val.target.value);
    dispatch(addPrice_inc_driver(val.target.value));
  };

  const handleAddChange = (val) => {
    setAddVal(val.target.value);
    dispatch(addAdditional_Price(val.target.value));
  };

  useEffect(() => {
    setPriceData(parseInt(priceVal) + parseInt(driverVal) + parseInt(addVal));
    setCutPrice(
      (
        ((parseInt(priceVal) + parseInt(driverVal) + parseInt(addVal)) / 100) *
        90
      ).toFixed(1)
    );
  }, [cutprice, priceData, priceVal, driverVal, addVal]);

  return (
    <div className="grid lg:grid-cols-2  gap-x-68">
      <div className="col-span-1">
        <div>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
              marginTop: "35px",
            }}
          >
            Price per day
          </Typography>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 sm:w-full w-4/5"
                placeholder="Select a car make"
                style={{ marginTop: "6px", height: "44px" }}
                {...field}
                type="number"
                error={!!errors.price}
                required
                helperText={errors?.price?.message}
                value={priceVal}
                onChange={(e) => {
                  handleChange(e);
                  field.onChange(e.target.value);
                }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
          <Typography
            className="text-xs font-normal mt-24 sm:w-full w-4/5"
            style={{ color: "#737B7D" }}
          >
            Suggestion: Minimmum price should be amount x and max is amount x
          </Typography>
          <hr
            className="sm:w-full w-4/5"
            style={{
              marginTop: "25px",
            }}
          />
          <div className="w-full">
            <div className="sm:flex flex-row justify-between mt-32">
              <div>
                <Typography
                  className="text-sm font-medium mt-7"
                  style={{ color: "#101828" }}
                >
                  With driver
                </Typography>
              </div>
              <div>
                <RadioGroup
                  onChange={withDriverFlagHandle}
                  defaultValue="male"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <div className="flex space-x-12">
                    <div className="flex">
                      <FormControlLabel
                        value="male"
                        control={<BpRadio />}
                        label=""
                      />
                      <Typography className="font-medium text-sm pt-6">
                        Yes
                      </Typography>
                    </div>
                    <div className="flex">
                      <FormControlLabel
                        value="female"
                        control={<BpRadio />}
                        label=""
                      />
                      <Typography className="font-medium text-sm pt-6">
                        No
                      </Typography>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {withDriverFlag && (
            <div>
              <Typography
                className="text-sm font-medium mt-36"
                style={{
                  color: "#344054",
                }}
              >
                Add driver price
              </Typography>
              <Controller
                name="driverPrice"
                control={control}
                render={({ field }) => (
                  <TextField
                    className="rounded-lg mb-11 sm:w-full w-4/5"
                    placeholder="Add driver price"
                    style={{ marginTop: "6px", height: "44px" }}
                    {...field}
                    type="number"
                    error={!!errors.driverPrice}
                    required
                    helperText={errors?.driverPrice?.message}
                    value={driverVal}
                    onChange={(e) => {
                      handleDriverChange(e);
                      field.onChange(e.target.value);
                    }}
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
              <div className="w-full">
                <div className="sm:flex flex-row justify-between mt-32">
                  <div>
                    <Typography
                      className="text-sm font-medium mt-7"
                      style={{ color: "#101828" }}
                    >
                      Providing Pickup and drop off
                    </Typography>
                  </div>
                </div>
              </div>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500px",
                  color: "#344054",
                  marginTop: "35px",
                }}
              >
                Add additional price
              </Typography>
              <Controller
                name="additionalPrice"
                control={control}
                render={({ field }) => (
                  <TextField
                    className="rounded-lg mb-11 sm:w-full w-4/5"
                    placeholder="Add price"
                    style={{ marginTop: "6px", height: "44px" }}
                    {...field}
                    type="number"
                    error={!!errors.additionalPrice}
                    required
                    helperText={errors?.additionalPrice?.message}
                    value={addVal}
                    onChange={(e) => {
                      handleAddChange(e);
                      field.onChange(e.target.value);
                    }}
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className="mt-64 col-span-1"
        style={{
          height: "241px",
          maxWidth: "410px",
          backgroundColor: "rgba(233, 235, 239, 0.36)",
        }}
      >
        <div className="ml-28 mt-24">
          <Typography
            className="text-lg font-semibold"
            style={{ color: "#101828" }}
          >
            Price per day
          </Typography>
          <Typography
            style={{ color: "#D22A8F" }}
            className="font-semibold text-6xl"
          >
            {priceData}
            <b className="text-2xl font-semibold" style={{ color: "#667085" }}>
              PKR
            </b>
          </Typography>
          <hr
            className="mt-5"
            style={{ border: "1px solid rgba(152, 162, 179, 0.5)" }}
          />
          <Typography style={{ color: "#667085" }} className="mt-16">
            GariConnect will charge 10% of the total price and you will get
            approx <b style={{ color: "#101828" }}>PKR {cutprice}</b>
          </Typography>
        </div>
      </div>
      <div className="mt-96 flex space-x-10">
        {/* <Button
          className="h-44 rounded-lg text-white"
          style={{ backgroundColor: "#D22A8F" }}
          onClick={handleSubmit(onSubmit)}
        >
          Save Info
        </Button> */}
        {/* <Button
          className="w-72 h-44 rounded-lg text-white"
          style={{ backgroundColor: "#D22A8F" }}
          onClick={handleSubmit(onfinalSubmit)}
        >
          Save
        </Button> */}
      </div>
    </div>
  );
};

export default AddPrice;
