import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import EmployeeForm from "./EmployeeForm";
import { makeStyles, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import useTable from "../../components/useTable";
import * as employeeService from "../../service/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());

  const { TblContainer } = useTable();

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<GroupAddTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
          <TableBody>
            {records.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </Paper>
    </>
  );
}
