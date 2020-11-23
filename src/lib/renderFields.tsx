import * as React from "react";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { TextField, Select, CheckboxWithLabel } from "formik-material-ui";
import { Field } from "formik";
import { DatePicker } from "formik-material-ui-pickers";

export interface Field {
  name: string;
  label: string;
  component: "text" | "select" | "datepicker" | "checkbox";
  meta?: any;
  props?: any;
}

const randomKey = (): number => {
  return Math.floor(Math.random() * 99999999) + 50;
};

export const renderFields = (fields: Field[]) => {
  return fields.map((value, idx) => {
    const { name, label, component, meta, props } = value;
    switch (component) {
      case "text":
        return (
          <Field
            key={`field-${name}-${idx}`}
            name={name}
            type={name}
            label={label}
            component={TextField}
            fullWidth
            variant="filled"
            style={{
              marginBottom: "10px",
              marginLeft: "20px"
            }}
            {...props}
          />
        );
      case "select":
        return (
          <FormControl
            key={`field-${name}-${idx}`}
            style={{
              margin: "10px 20px",
              minWidth: "200px"
            }}
            fullWidth
          >
            <InputLabel>{label}</InputLabel>
            <Field name={name} component={Select}>
              {meta.map((item) => {
                return (
                  <MenuItem
                    key={`select-item-${name}-${randomKey()}`}
                    value={item.value}
                  >
                    {item.label}
                  </MenuItem>
                );
              })}
            </Field>
          </FormControl>
        );
      case "datepicker":
        return (
          <Field
            key={`field-${name}-${idx}`}
            name={name}
            label={label}
            variant="dialog"
            clearable
            format="yyyy-MM-dd"
            component={DatePicker}
            DialogProps={{
              BackdropProps: {
                style: {
                  zIndex: -1
                }
              }
            }}
            style={{
              margin: "10px 20px",
              marginBottom: "20px",
              width: "100%"
            }}
          />
        );
      case "checkbox":
        return (
          <Field
            key={`search-form-field-${name}-${idx}`}
            type="checkbox"
            component={CheckboxWithLabel}
            name={name}
            Label={{ label }}
            style={{
              margin: "20px"
            }}
          />
        );
    }
  });
};
