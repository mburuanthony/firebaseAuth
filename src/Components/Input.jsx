import { TextField } from "@mui/material";

const Input = (props) => {
  const { inputType, placeholder, inputVal, onChangefunc, inputError } = props;

  return (
    <TextField
      variant="standard"
      margin="dense"
      type={inputType}
      label={placeholder}
      value={inputVal}
      onChange={onChangefunc}
      error={inputError}
      fullWidth
    />
  );
};

Input.defaultProps = {
  error: false,
};

export default Input;
