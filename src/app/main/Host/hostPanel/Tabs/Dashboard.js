import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import Drawer from "../../../Guest/Drawer";

const Dashboard = () => {
  const [value, setValue] = React.useState(4);

  return (
    <div className="flex-row grid sm:grid-cols-3 grid-cols-1 gap-10">
      <div className="flex flex-col col-span-3">
        <div className="flex-row grid sm:grid-cols-3 grid-cols-1 gap-10">
          <Card className="rounded-md border col-span-1">
            <CardContent>
              <div className="flex flex-row">
                <div className="flex flex-col space-y-28">
                  <Typography className="text-16 font-medium">
                    Active bookings
                  </Typography>
                  <div className="space-y-14">
                    <Typography className="text-3xl font-semibold">
                      420
                    </Typography>
                    <Typography className="flex flex-row space-x-8">
                      <img
                        src="assets/images/icons/GreenArrow.svg"
                        alt="logo"
                      />
                      <span className="text-sm text-green-700 font-medium">
                        40%
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        vs last month
                      </span>
                    </Typography>
                  </div>
                </div>

                <div className="flex flex-col" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md border col-span-1">
            <CardContent>
              <div className="flex flex-row">
                <div className="flex flex-col space-y-28">
                  <Typography className="text-16 font-medium">
                    Total trips
                  </Typography>
                  <div className="space-y-14">
                    <Typography className="text-3xl font-semibold">
                      2,420
                    </Typography>
                    <Typography className="flex flex-row space-x-8">
                      <img src="assets/images/icons/RedArrow.svg" alt="logo" />
                      <span className="text-sm text-red-700 font-medium">
                        10%
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        vs last month
                      </span>
                    </Typography>
                  </div>
                </div>

                <div className="flex flex-col" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md border col-span-1">
            <CardContent>
              <div className="flex flex-row">
                <div className="flex flex-col space-y-28">
                  <Typography className="text-16 font-medium">
                    Total earnings
                  </Typography>
                  <div className="space-y-14">
                    <Typography className="text-3xl font-semibold">
                      4200 PKR
                    </Typography>
                    <Typography className="flex flex-row space-x-8">
                      <img
                        src="assets/images/icons/GreenArrow.svg"
                        alt="logo"
                      />
                      <span className="text-sm text-green-700 font-medium">
                        40%
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        vs last month
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col mt-20 border rounded-md col-span-3">
          <Card className="rounded-md">
            <div className="sm:flex flex-row justify-between items-center pl-28 pr-10 py-8">
              <Typography className="flex flex-row items-center text-lg font-medium">
                New booking requests
                <span
                  style={{
                    color: "#D22A8F",
                    background: "rgba(210, 42, 143, 0.14)",
                  }}
                  className="ml-8 w-20 rounded-full text-center text-sm font-medium"
                >
                  5
                </span>
              </Typography>
              <FormControl>
                <TextField size="small" placeholder="Search area" />
              </FormControl>
            </div>

            <div className="">
              <TableContainer>
                <Table sx={{ minWidth: 1300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow className="border-t bg-gray-50">
                      <TableCell className="text-12 font-medium ">
                        Guest
                      </TableCell>
                      <TableCell className="text-12 font-medium">
                        Date
                      </TableCell>

                      <TableCell className="text-12 font-medium">
                        Booking ID
                      </TableCell>
                      <TableCell className="text-12 font-medium">Car</TableCell>
                      <TableCell className="text-12 font-medium">
                        Booking dates
                      </TableCell>
                      <TableCell className="text-12 font-medium">
                        Price
                      </TableCell>
                      <TableCell className="text-12 font-medium">
                        With Driver
                      </TableCell>
                      <TableCell className="text-12 font-medium">
                        Pick/Drop
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex flex-row items-center"
                      >
                        <img src="assets/images/profile/Avatar-0.svg" alt="" />
                        <div>
                          <Typography className="text-10 font-medium ml-8">
                            Olivia Rhye
                          </Typography>
                          <Typography
                            className="text-10 font-normal ml-8"
                            style={{ color: "#046AF3" }}
                          >
                            5156151dd
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-10 text-gray-500 font-medium">
                        21 March 2022
                      </TableCell>
                      <TableCell
                        className="text-12 font-normal"
                        style={{ color: "#046AF3" }}
                      >
                        5156151dd
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        Honda Afb 8895- 19
                      </TableCell>
                      <TableCell className="">
                        <div className="flex flex-row">
                          <Typography className="flex flex-col">
                            <span className=" text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                          <img
                            className="mx-12"
                            src="assets/images/icons/Arrow6.svg"
                            alt=""
                          />
                          <Typography className="flex flex-col">
                            <span className="text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        15000 PKR
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-normal">
                        <TaskAltOutlinedIcon
                          className="ml-12"
                          style={{ color: "#039855" }}
                        />
                      </TableCell>
                      <TableCell>
                        <TaskAltOutlinedIcon
                          className="ml-12"
                          style={{ color: "#039855" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Drawer />
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex flex-row items-center"
                      >
                        <img src="assets/images/profile/Avatar-0.svg" alt="" />
                        <div>
                          <Typography className="text-10 font-medium ml-8">
                            Olivia Rhye
                          </Typography>
                          <Typography
                            className="text-10 font-normal ml-8"
                            style={{ color: "#046AF3" }}
                          >
                            5156151dd
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-10 text-gray-500 font-medium">
                        21 March 2022
                      </TableCell>
                      <TableCell
                        className="text-12 font-normal"
                        style={{ color: "#046AF3" }}
                      >
                        5156151dd
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        Honda Afb 8895- 19
                      </TableCell>
                      <TableCell className="">
                        <div className="flex flex-row">
                          <Typography className="flex flex-col">
                            <span className="text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                          <img
                            className="mx-12"
                            src="assets/images/icons/Arrow6.svg"
                            alt=""
                          />
                          <Typography className="flex flex-col">
                            <span className="text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        15000 PKR
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-normal">
                        <DoDisturbOutlinedIcon
                          className="ml-12"
                          style={{ color: "#F04438" }}
                        />
                      </TableCell>
                      <TableCell>
                        <DoDisturbOutlinedIcon
                          className="ml-12"
                          style={{ color: "#F04438" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Drawer />
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex flex-row items-center"
                      >
                        <img src="assets/images/profile/Avatar-0.svg" alt="" />
                        <div>
                          <Typography className="text-10 font-medium ml-8">
                            Olivia Rhye
                          </Typography>
                          <Typography
                            className="text-10 font-normal ml-8"
                            style={{ color: "#046AF3" }}
                          >
                            5156151dd
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-10 text-gray-500 font-medium">
                        21 March 2022
                      </TableCell>
                      <TableCell
                        className="text-12 font-normal"
                        style={{ color: "#046AF3" }}
                      >
                        5156151dd
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        Honda Afb 8895- 19
                      </TableCell>
                      <TableCell className="">
                        <div className="flex flex-row">
                          <Typography className="flex flex-col">
                            <span className="text-10 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                          <img
                            className="mx-12"
                            src="assets/images/icons/Arrow6.svg"
                            alt=""
                          />
                          <Typography className="flex flex-col">
                            <span className="text-10 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        15000 PKR
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-normal">
                        <TaskAltOutlinedIcon
                          className="ml-12"
                          style={{ color: "#039855" }}
                        />
                      </TableCell>
                      <TableCell>
                        <TaskAltOutlinedIcon
                          className="ml-12"
                          style={{ color: "#039855" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Drawer />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex flex-row items-center"
                      >
                        <img src="assets/images/profile/Avatar-0.svg" alt="" />
                        <div>
                          <Typography className="text-10 font-medium ml-8">
                            Olivia Rhye
                          </Typography>
                          <Typography
                            className="text-10 font-normal ml-8"
                            style={{ color: "#046AF3" }}
                          >
                            5156151dd
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-10 text-gray-500 font-medium">
                        21 March 2022
                      </TableCell>
                      <TableCell
                        className="text-12 font-normal"
                        style={{ color: "#046AF3" }}
                      >
                        5156151dd
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        Honda Afb 8895- 19
                      </TableCell>
                      <TableCell className="">
                        <div className="flex flex-row">
                          <Typography className="flex flex-col">
                            <span className=" text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                          <img
                            className="mx-12"
                            src="assets/images/icons/Arrow6.svg"
                            alt=""
                          />
                          <Typography className="flex flex-col">
                            <span className="text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        15000 PKR
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-normal">
                        <TaskAltOutlinedIcon
                          className="ml-12"
                          style={{ color: "#039855" }}
                        />
                      </TableCell>
                      <TableCell>
                        <TaskAltOutlinedIcon
                          className="ml-12"
                          style={{ color: "#039855" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Drawer />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex flex-row items-center"
                      >
                        <img src="assets/images/profile/Avatar-0.svg" alt="" />
                        <div>
                          <Typography className="text-10 font-medium ml-8">
                            Olivia Rhye
                          </Typography>
                          <Typography
                            className="text-10 font-normal ml-8"
                            style={{ color: "#046AF3" }}
                          >
                            5156151dd
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-10 text-gray-500 font-medium">
                        21 March 2022
                      </TableCell>
                      <TableCell
                        className="text-12 font-normal"
                        style={{ color: "#046AF3" }}
                      >
                        5156151dd
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        Honda Afb 8895- 19
                      </TableCell>
                      <TableCell className="">
                        <div className="flex flex-row">
                          <Typography className="flex flex-col">
                            <span className=" text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                          <img
                            className="mx-12"
                            src="assets/images/icons/Arrow6.svg"
                            alt=""
                          />
                          <Typography className="flex flex-col">
                            <span className="text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        15000 PKR
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-normal">
                        <DoDisturbOutlinedIcon
                          className="ml-12"
                          style={{ color: "#F04438" }}
                        />
                      </TableCell>
                      <TableCell>
                        <DoDisturbOutlinedIcon
                          className="ml-12"
                          style={{ color: "#F04438" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Drawer />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex flex-row items-center"
                      >
                        <img src="assets/images/profile/Avatar-0.svg" alt="" />
                        <div>
                          <Typography className="text-10 font-medium ml-8">
                            Olivia Rhye
                          </Typography>
                          <Typography
                            className="text-10 font-normal ml-8"
                            style={{ color: "#046AF3" }}
                          >
                            5156151dd
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-10 text-gray-500 font-medium">
                        21 March 2022
                      </TableCell>
                      <TableCell
                        className="text-12 font-normal"
                        style={{ color: "#046AF3" }}
                      >
                        5156151dd
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        Honda Afb 8895- 19
                      </TableCell>
                      <TableCell className="">
                        <div className="flex flex-row">
                          <Typography className="flex flex-col">
                            <span className=" text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                          <img
                            className="mx-12"
                            src="assets/images/icons/Arrow6.svg"
                            alt=""
                          />
                          <Typography className="flex flex-col">
                            <span className="text-11 font-medium text-gray-900">
                              21 March 2022 <br />
                              <span className="text-11 text-gray-500 font-medium">
                                7:00 PM
                              </span>
                            </span>
                            {/* <span className="text-12 text-gray-500 font-normal">7 Pm</span> */}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-medium">
                        15000 PKR
                      </TableCell>
                      <TableCell className="text-12 text-gray-500 font-normal">
                        <DoDisturbOutlinedIcon
                          className="ml-12"
                          style={{ color: "#F04438" }}
                        />
                      </TableCell>
                      <TableCell>
                        <DoDisturbOutlinedIcon
                          className="ml-12"
                          style={{ color: "#F04438" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Drawer />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
