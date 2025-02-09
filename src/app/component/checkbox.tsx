import React, { ChangeEventHandler, useState } from "react";
import { CheckboxProps } from "../utils/types";


const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, checked,name }) => {
   

  return (
    <div>
      <label>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={{ marginRight: "8px" }}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
