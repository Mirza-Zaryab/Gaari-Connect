import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  addAddress,
  addLatitude,
  addLongitude,
} from "../../ListStepper/store/locationSlice";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import GoogleMap from "google-map-react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

function Marker({ text }) {
  return (
    <Tooltip title={text} placement="top">
      <Icon className="text-red">place</Icon>
    </Tooltip>
  );
}

const schema = yup.object().shape({
  // city: yup.array().min(1, 'You must select a area'),
  // area: yup.string().required('You must select a area'),
  // address: yup.string().required('You must select an address'),
  // zip: yup.string().required('You must enter an zip code'),
});

const CarLocation = () => {
  console.log("location chala");

  const dispatch = useDispatch();

  const [addressPlace, setAddressPlace] = useState(null);
  const [latVal, setLatVal] = useState(31.5139698);
  const [lngVal, setLngVal] = useState(74.3433629);
  const [zoomVal, setZoomVal] = useState(14);
  // debugger;
  const location = useSelector((state) => state.ListStepperReducer.location);
  console.log(location.address);

  if (addressPlace !== null) {
    // debugger;
    geocodeByAddress(addressPlace.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setLatVal(lat);
        defaultProps.center.lat = lat;
        setLngVal(lng);
        defaultProps.center.lng = lng;
      });

    const detailAddress = addressPlace.label.toString();

    dispatch(addAddress(addressPlace.label.toString()));
    dispatch(addLatitude(latVal.toString()));
    dispatch(addLongitude(lngVal.toString()));
  }

  const { handleSubmit, setValue, register, reset, control, watch, formState } =
    useForm({
      mode: "all",
      resolver: yupResolver(schema),
    });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  const defaultProps = {
    center: {
      lat: latVal,
      lng: lngVal,
    },
  };

  useEffect(() => {
    console.log("useEffect chala");
    setValue("area", location.address);
  }, []);

  function onSubmit() {
    if (addressPlace !== null) {
      debugger;
      geocodeByAddress(addressPlace.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setLatVal(lat);
          defaultProps.center.lat = lat;
          setLngVal(lng);
          defaultProps.center.lng = lng;
        });

      dispatch(addAddress(addressPlace.label.toString()));
      dispatch(addLatitude(latVal.toString()));
      dispatch(addLongitude(lngVal.toString()));
    }
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-16">
        <div className="mt-12">
          <div style={{ height: "45vh", width: "100%" }}>
            <GoogleMap
              bootstrapURLKeys={{
                key: "AIzaSyAQtQ-9XrfpmGt9rMTXB2RLhB_C2ZbZi7c",
              }}
              center={defaultProps.center}
              zoom={zoomVal}
              yesIWantToUseGoogleMapApiInternals
            >
              <Marker text="Place" lat={latVal} lng={lngVal} />
            </GoogleMap>
          </div>
        </div>

        <div>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyAQtQ-9XrfpmGt9rMTXB2RLhB_C2ZbZi7c"
            selectProps={{
              addressPlace,
              onChange: setAddressPlace,
            }}
          />

          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            City
          </Typography>
          <Controller
            name="city"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <Autocomplete
                multiple
                popupIcon={<KeyboardArrowDownIcon />}
                className="mt-6"
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                value={value}
                onChange={(event, newValue) => {
                  onChange(newValue);
                }}
                sx={{ height: 44 }}
                renderInput={(params) => (
                  <TextField
                    error={!!errors.city}
                    helperText={errors?.city?.message}
                    onBlur={onBlur}
                    inputRef={ref}
                    className="w-full"
                    {...params}
                    size="medium"
                    placeholder="Lahore"
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
            )}
          />

          <Typography
            style={{
              marginTop: "14px",
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            Area
          </Typography>
          <Controller
            name="area"
            control={control}
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="Canal view"
                style={{ marginTop: "6px", height: "44px" }}
                {...field}
                type="text"
                error={!!errors.area}
                required
                helperText={errors?.area?.message}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />

          <Typography
            style={{
              marginTop: "14px",
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            Street address
          </Typography>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="25 A,Street 26, Canal view"
                style={{ marginTop: "6px", height: "44px" }}
                {...field}
                type="text"
                error={!!errors.address}
                required
                helperText={errors?.address?.message}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />

          <Typography
            style={{
              marginTop: "14px",
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            Zip code
          </Typography>
          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 w-full"
                placeholder="5400"
                style={{ marginTop: "6px", height: "44px" }}
                type="numbers"
                error={!!errors.zip}
                {...field}
                required
                helperText={errors?.zip?.message}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
        </div>
      </div>
      {/* <Button
        className="mt-40 h-44 rounded-lg text-white"
        style={{ backgroundColor: "#D22A8F" }}
        onClick={handleSubmit(onSubmit)}
      >
        Save Info
      </Button> */}
    </div>
  );
};

export default CarLocation;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
];
