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
  const validate = () => {
    let temp = {};
    temp.fullname = values.fullname ? "" : "This field is required.";
    temp.email = /$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.mobile =
      values.mobile.length > 10 ? "" : "Minimum 10 numbers required.";
    temp.city = values.city ? "" : "This field is required.";
    temp.departmendId =
      values.departmendId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every(x => x == "");
  };

  const { values, errors, setErrors, handleInputChange } = useForm(
    initialValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()){
      window.alert("...testing");
    } 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item sm={6}>
          <Controls.Input
            name="fullname"
            label="Full Name"
            value={values.fullname}
            onChange={handleInputChange}
            error={errors.fullname}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={values.mobile}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
            error={values.city}
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
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDatec}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPartment"
            label="Permanent Employee"
            value={values.isPartment}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
