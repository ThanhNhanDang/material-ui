import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Form, useForm } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../service/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmendId: "",
  hireDate: new Date(),
  isPartment: false,
};

export default function EmployeeForm() {
  const { values, handleInputChange } = useForm(initialValues);

  useEffect(() => {});

  return (
    <Form>
      <Grid container>
        <Grid item sm={6}>
          <Controls.Input
            name="fullname"
            label="Full Name"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item sm={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmendId"
            value={values.departmendId}
            label="Department"
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.Checkbox
            name="isPartment"
            label="Permanent Employee"
            value={values.isPartment}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
