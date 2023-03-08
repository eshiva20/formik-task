import * as React from "react";
import "./Reactform.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   backgroundColor:"#40513B",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor:"#609966",
}));



const UserTable = ({ userData, handleDelete }) => {
  return (
    <>
      {/* <div>UserTable</div> */}
      <div className="table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="centre">Name</StyledTableCell>
                <StyledTableCell align="centre">Email</StyledTableCell>
                <StyledTableCell align="centre">Password</StyledTableCell>
                <StyledTableCell align="centre">Gender</StyledTableCell>
                <StyledTableCell align="centre">Age</StyledTableCell>
                <StyledTableCell align="centre">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="centre">{row?.name}</StyledTableCell>
                  <StyledTableCell align="centre">{row?.email}</StyledTableCell>
                  <StyledTableCell align="centre">
                    {row?.password}
                  </StyledTableCell>
                  <StyledTableCell align="centre">
                    {row?.gender}
                  </StyledTableCell>
                  <StyledTableCell align="centre">{row?.age}</StyledTableCell>
                  <StyledTableCell align="centre">
                    <button onClick={() => handleDelete(row.id)}>Delete </button>
                    {/* <button>Edit</button> */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* <Link to="/">Add User</Link> */}
    </>
  );
};

export default UserTable;
