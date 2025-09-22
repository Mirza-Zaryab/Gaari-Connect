import React from "react";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import Drawer from "../../../Drawer";



const Completed = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4">
        <TableContainer>
          <Table sx={{ minWidth: 1300 }} aria-label="simple table">
            <TableHead>
              <TableRow className="border-t bg-gray-50">
                <TableCell className="text-12 font-medium ">Host</TableCell>
                <TableCell className="text-12 font-medium">
                  <div className="flex flex-row items-center ml-9">
                    Date
                    <div className=" flex flex-col items-center px-5">
                      <img
                        src="/assets/images/icons/polygonup.svg"
                        className="p-2 w-12"
                        alt="Up"
                      />
                      <img
                        src="/assets/images/icons/polygondown.svg"
                        className="p-2 w-12"
                        alt="Down"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-12 font-medium">
                  Booking ID
                </TableCell>
                <TableCell className="text-12 font-medium">Car</TableCell>
                <TableCell className="text-12 font-medium">
                  <div className="flex flex-row items-center ml-9">
                    Booking dates
                    <div className=" flex flex-col items-center px-5">
                      <img
                        src="/assets/images/icons/polygonup.svg"
                        className="p-2 w-12"
                        alt="Up"
                      />
                      <img
                        src="/assets/images/icons/polygondown.svg"
                        className="p-2 w-12"
                        alt="Down"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-12 font-medium">
                  <div className="flex flex-row items-center ml-9">
                    Price
                    <div className=" flex flex-col items-center px-5">
                      <img
                        src="/assets/images/icons/polygonup.svg"
                        className="p-2 w-12"
                        alt="Up"
                      />
                      <img
                        src="/assets/images/icons/polygondown.svg"
                        className="p-2 w-12"
                        alt="Down"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>With Driver</TableCell>
                <TableCell>Pick/Drop</TableCell>
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
                <TableCell className="text-10 text-gray-500 font-normal">
                  21 March 2022
                </TableCell>
                <TableCell
                  className="text-12 font-normal"
                  style={{ color: "#046AF3" }}
                >
                  5156151dd
                </TableCell>
                <TableCell className="text-12 text-gray-500 font-normal">
                  Honda Afb 8895- 19
                </TableCell>
                <TableCell className="">
                  <div className="flex flex-row">
                    <Typography className="flex flex-col">
                      <span className="text-10 font-normal text-gray-900">
                        21 March 2022
                      </span>
                      <span className="text-12 text-gray-500 font-normal">
                        7 Pm
                      </span>
                    </Typography>
                    <img
                      className="mx-12"
                      src="assets/images/icons/Arrow6.svg"
                      alt=""
                    />
                    <Typography className="flex flex-col">
                      <span className="text-10 font-normal text-gray-900">
                        21 March 2022
                      </span>
                      <span className="text-12 text-gray-500 font-normal">
                        7 Pm
                      </span>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell className="text-12 text-gray-500 font-normal">
                  15000 PKR
                </TableCell>
                <TableCell>
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
                <TableCell className="text-10 text-gray-500 font-normal">
                  21 March 2022
                </TableCell>
                <TableCell
                  className="text-12 font-normal"
                  style={{ color: "#046AF3" }}
                >
                  5156151dd
                </TableCell>
                <TableCell className="text-12 text-gray-500 font-normal">
                  Honda Afb 8895- 19
                </TableCell>
                <TableCell className="">
                  <div className="flex flex-row">
                    <Typography className="flex flex-col">
                      <span className="text-10 font-normal text-gray-900">
                        21 March 2022
                      </span>
                      <span className="text-12 text-gray-500 font-normal">
                        7 Pm
                      </span>
                    </Typography>
                    <img
                      className="mx-12"
                      src="assets/images/icons/Arrow6.svg"
                      alt=""
                    />
                    <Typography className="flex flex-col">
                      <span className="text-10 font-normal text-gray-900">
                        21 March 2022
                      </span>
                      <span className="text-12 text-gray-500 font-normal">
                        7 Pm
                      </span>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell className="text-12 text-gray-500 font-normal">
                  15000 PKR
                </TableCell>
                <TableCell>
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
                <TableCell className="text-10 text-gray-500 font-normal">
                  21 March 2022
                </TableCell>
                <TableCell
                  className="text-12 font-normal"
                  style={{ color: "#046AF3" }}
                >
                  5156151dd
                </TableCell>
                <TableCell className="text-12 text-gray-500 font-normal">
                  Honda Afb 8895- 19
                </TableCell>
                <TableCell className="">
                  <div className="flex flex-row">
                    <Typography className="flex flex-col">
                      <span className="text-10 font-normal text-gray-900">
                        21 March 2022
                      </span>
                      <span className="text-12 text-gray-500 font-normal">
                        7 Pm
                      </span>
                    </Typography>
                    <img
                      className="mx-12"
                      src="assets/images/icons/Arrow6.svg"
                      alt=""
                    />
                    <Typography className="flex flex-col">
                      <span className="text-10 font-normal text-gray-900">
                        21 March 2022
                      </span>
                      <span className="text-12 text-gray-500 font-normal">
                        7 Pm
                      </span>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell className="text-12 text-gray-500 font-normal">
                  15000 PKR
                </TableCell>
                <TableCell>
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

export default Completed;
