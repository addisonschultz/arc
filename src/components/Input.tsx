import * as React from "react";

const Input = ({
  placeholder,
  defaultValue,
}: {
  placeholder: string;
  defaultValue: string;
}) => {
  return (
    <div className="form-group">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={defaultValue}
      />
    </div>
  );
};

export default Input;
