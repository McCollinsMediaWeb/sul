import React from "react";
import { DatePicker, TimePicker, MobileTimePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
const CateringForm = (props) => {
  console.log();
  const color = "#fff";
  const [age, setAge] = React.useState("");
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [inputSize, SetInputSize] = useState("medium");
  useEffect(() => {
    if (isDesktop) {
      SetInputSize("medium");
      return;
    }
    if (!isDesktop) {
      SetInputSize("small");
      return;
    }
  }, [isDesktop]);

  const theme = createTheme({
    palette: {
      primary: { main: "#EB6131" },
      secondary: { main: "#1D1D1B" },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"],
    },
  });
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="pd-common ContactRow2 CatSeForm">
      <div className="container">
        <div className="text-center">
          <div className="Ct11">Book your Catering Service for {props.Title}</div>
          <div className="Ct22">
            Please complete the following details and we will respond to your
            enquiry within 24 hours. <br />
            For urgent requests, please contact via WhatsApp for immediate
            assistance.
          </div>
          <div className="contactFormR1">
            <ThemeProvider theme={theme}>
              <form>
                <div className="FillT1">Fill Out Your Details</div>
                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      label="Name *"
                      fullWidth
                      size={inputSize}
                      name="Name"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Phone Number *"
                      fullWidth
                      size={inputSize}
                      name="Phone"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Email *"
                      fullWidth
                      size={inputSize}
                      name="Email"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Address *"
                      fullWidth
                      size={inputSize}
                      name="Address"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <TextField
                      label="Company Name"
                      fullWidth
                      size={inputSize}
                      name="CompanyName"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                </div>
                <div className="FillT1">Event Details</div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-control-1">
                      <DatePicker
                        fullWidth
                        slotProps={{
                          textField: { size: inputSize, name: "ResDate" },
                        }}
                        label="Date"
                        className="cstDateDiv"
                        sx={{
                          svg: { color },
                          input: { color },
                          label: { color },
                          borderColor: { color },
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-control-1">
                      <MobileTimePicker
                        fullWidth
                        label="Time"
                        slotProps={{
                          textField: { size: inputSize, name: "Time" },
                        }}
                        className="cstTimeDiv"
                        sx={{
                          svg: { color },
                          input: { color },
                          label: { color },
                          borderColor: { color },
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="No Of Peoples"
                      fullWidth
                      size={inputSize}
                      name="NumberOfPeople"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-control-1">
                      <FormControl fullWidth size={inputSize}>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{
                            svg: { color },
                            input: { color },
                            label: { color },
                            borderColor: { color },
                          }}
                        >
                          Staff Required *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Number of Guest"
                          name="Pax"
                          onChange={handleChange}
                          sx={{
                            svg: { color },
                            input: { color },
                            label: { color },
                            borderColor: { color },
                          }}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={"10+"}>10+</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button class="T7" type="submit">
                    Submit Form
                  </button>
                </div>
              </form>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringForm;
