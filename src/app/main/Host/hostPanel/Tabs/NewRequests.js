import React from "react";
import { Button, Typography, Rating } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import Drawer from "../../../Guest/Drawer";

const NewRequests = () => {
  const [value, setValue] = React.useState(4);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4">
        <TableContainer>
          <Table sx={{ minWidth: 1300 }} aria-label="simple table">
            <TableHead>
              <TableRow className="border-t bg-gray-50">
                <TableCell className="text-12 font-medium ">Guest</TableCell>
                <TableCell className="text-12 font-medium">Date</TableCell>

                <TableCell className="text-12 font-medium">
                  Booking ID
                </TableCell>
                <TableCell className="text-12 font-medium">Car</TableCell>
                <TableCell className="text-12 font-medium">
                  Booking dates
                </TableCell>
                <TableCell className="text-12 font-medium">Price</TableCell>
                <TableCell className="text-12 font-medium">
                  With Driver
                </TableCell>
                <TableCell className="text-12 font-medium">Pick/Drop</TableCell>
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
    </div>
  );
};

export default NewRequests;
