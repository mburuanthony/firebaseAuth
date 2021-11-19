import { useState, useImperativeHandle, forwardRef } from "react";
import { TextField } from "@mui/material";

const Input = forwardRef((props, ref) => {
  const { inputType, placeholder, onChangefunc } = props;
  const [inputVal, setinputVal] = useState();

  useImperativeHandle(ref, () => ({
    setInputValue() {
      setinputVal(ref.current.value);
    },
  }));

  return (
    <TextField
      variant="standard"
      margin="dense"
      type={inputType}
      label={placeholder}
      value={inputVal}
      onChange={onChangefunc}
      fullWidth
    />
  );
});

export default Input;
