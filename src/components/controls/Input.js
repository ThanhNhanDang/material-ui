import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      value={value}
      label={label}
      variant="outlined"
      name={name}
      onChange={onChange}
    />
  );
}
