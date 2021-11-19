import { Button } from "@mui/material";

function ButtonComponent(props) {
  const { displayText, displayIcon, isDisabled, onClickFunc } = props;

  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        width: "60%",
        margin: "20px auto",
        borderRadius: "30px",
        textTransform: "capitalize",
      }}
      endIcon={displayIcon}
      disabled={isDisabled}
      onClick={onClickFunc}
    >
      {displayText}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  isDisabled: false,
};

export default ButtonComponent;
