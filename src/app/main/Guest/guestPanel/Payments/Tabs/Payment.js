import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Rating from "@mui/material/Rating";
import RecieptPaymentDetails from "./RecieptPaymentDetails";

const Payment = () => {
  const [value, setValue] = React.useState(4);
  const [showdetailsstatus, setstatus] = useState(false);


    const showdetails = () => {
        setstatus(true);



    }
    const childToParent = (childdata) => {
        setstatus(childdata);
    }
  return (
    <>
     {showdetailsstatus &&
                <RecieptPaymentDetails childToParent={childToParent} />


            }
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <TableContainer>
            <Table sx={{ minWidth: 1600 }} aria-label="simple table">
              <TableHead>
                <TableRow className="border-t bg-gray-50">
                  <TableCell className="text-12 font-medium">Guest</TableCell>
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
                  <TableCell className="text-12 font-medium ">
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
                  <TableCell className="text-12 font-medium">
                    <div className="flex flex-row items-center ml-9">
                      Guest Rating
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
                      Host Rating
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
                  <TableCell className="text-12 font-medium ">Status</TableCell>
                  <TableCell className="text-12 font-medium">
                    <div className="flex flex-row items-center px-5">
                      Service Fee
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
                  <TableCell></TableCell>
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
                  <TableCell className="text-12 text-gray-500 font-normal">
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
                  <TableCell>
                    <div className="flex flex-row">
                      <Typography className="flex flex-col">
                        <span className="text-sm font-normal text-gray-900">
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
                        <span className="text-sm font-normal text-gray-900">
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
                    <Rating
                    max={4}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Rating
                    max={4}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-12  font-normal">
                    <Button
                      variant="contained"
                      className="rounded-16"
                      style={{
                        backgroundColor: "rgba(240, 68, 56, 0.15)",
                        color: "#F04438",
                      }}
                    >
                      Pending
                    </Button>
                  </TableCell>
                  <TableCell className="text-12 text-gray-500 font-normal">
                    15000 PKR
                  </TableCell>

                  <TableCell className=" font-normal">
                    <Typography
                    onClick={showdetails}
                      className="text-12 cursor-pointer"
                      style={{ color: "#D22A8F" }}
                    >
                      View reciept
                    </Typography>
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

                  <TableCell className="text-12 text-gray-500 font-normal">
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
                  <TableCell>
                    <div className="flex flex-row">
                      <Typography className="flex flex-col">
                        <span className="text-sm font-normal text-gray-900">
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
                        <span className="text-sm font-normal text-gray-900">
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
                    <Rating
                    max={4}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Rating
                    max={4}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-12  font-normal">
                    <Button
                      variant="contained"
                      className="rounded-16"
                      style={{
                        backgroundColor: "rgba(4, 106, 243, 0.08)",
                        color: "#046AF3",
                      }}
                    >
                      Released
                    </Button>
                  </TableCell>
                  <TableCell className="text-12 text-gray-500 font-normal">
                    15000 PKR
                  </TableCell>

                  <TableCell className=" font-normal">
                    <Typography
                    onClick={showdetails}
                      className="text-12 cursor-pointer"
                      style={{ color: "#D22A8F" }}
                    >
                      View reciept
                    </Typography>
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

                  <TableCell className="text-12 text-gray-500 font-normal">
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
                  <TableCell>
                    <div className="flex flex-row">
                      <Typography className="flex flex-col">
                        <span className="text-sm font-normal text-gray-900">
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
                        <span className="text-sm font-normal text-gray-900">
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
                    <Rating
                    max={4}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Rating
                    max={4}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-12  font-normal">
                    <Button
                      variant="contained"
                      className="rounded-16"
                      style={{
                        backgroundColor: "rgba(240, 68, 56, 0.15)",
                        color: "#F04438",
                      }}
                    >
                      Pending
                    </Button>
                  </TableCell>
                  <TableCell className="text-12 text-gray-500 font-normal">
                    15000 PKR
                  </TableCell>
                  <TableCell className=" font-normal ">
                    <Typography
                    onClick={showdetails}
                      className="text-12 cursor-pointer"
                      style={{ color: "#D22A8F" }}
                    >
                      View reciept
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Payment;
