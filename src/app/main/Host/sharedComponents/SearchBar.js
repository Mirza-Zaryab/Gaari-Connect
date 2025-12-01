import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import Box from "@mui/material/Box";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import moment from "moment";

const SearchBar = () => {
  const [value, setValue] = React.useState(["20,April", "21,May"]);
  // newValue={setValue}

  return (
    <>
      <div>
        <ul
          className="flex flex-col lg:flex-row list-none h-full md:mt-auto mt-20"
          style={{ marginLeft: "10%" }}
        >
          <div className=" border rounded-full w-auto md:w-10/12">
            <div className="grid  sm:grid-cols-2 grid-cols-1 gap-4 h-full sm:w-full w-11/12">
              <div className="flex items-center ml-16">
                <FmdGoodOutlinedIcon style={{ color: "#98A2B3" }} />
                <Typography className="mx-6" style={{ color: "#98A2B3" }}>
                  Location
                </Typography>
                <Stack spacing={2}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    sx={{ width: 500 }}
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                          type: "search",
                        }}
                      />
                    )}
                  />
                </Stack>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  selected={new Date()}
                  maxDate={moment().toDate()}
                  startText=""
                  endText=""
                  value={value}
                  inputFormat=""
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <div className="w-2xl ml-10">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <Divider
                            orientation="vertical"
                            className="h-36 md:visible invisible"
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            variant="middle"
                          />
                          <TextField
                            {...startProps}
                            variant="standard"
                            className="w-auto mb-8  "
                            InputProps={{
                              disableUnderline: true,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <KeyboardArrowDownIcon />
                                </InputAdornment>
                              ),
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalendarTodayOutlinedIcon
                                    className="ml-5"
                                    style={{ color: "#98A2B3" }}
                                  />
                                  <Typography
                                    className="ml-5"
                                    style={{ color: "#98A2B3" }}
                                  >
                                    From
                                  </Typography>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      </div>

                      <div className="w-2xl">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <Divider
                            orientation="vertical"
                            className="h-36"
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            variant="middle"
                          />
                          <TextField
                            {...endProps}
                            variant="standard"
                            className="w-auto mb-8"
                            InputProps={{
                              disableUnderline: true,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <KeyboardArrowDownIcon />
                                </InputAdornment>
                              ),
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalendarTodayOutlinedIcon
                                    className="ml-8"
                                    style={{ color: "#98A2B3" }}
                                  />
                                  <Typography
                                    className="ml-5"
                                    style={{ color: "#98A2B3" }}
                                  >
                                    Until
                                  </Typography>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <IconButton
                            style={{
                              height: "50px",
                              width: "50px",
                              color: "rgba(255, 255, 255, 1)",
                              backgroundColor: "#D22A8F",
                            }}
                            component={Link}
                            to="/cars-listing"
                          >
                            <SearchSharpIcon />
                          </IconButton>
                        </Box>
                      </div>
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SearchBar;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
