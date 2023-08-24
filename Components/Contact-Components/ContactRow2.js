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
const ContactRow2 = () => {
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
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = createTheme({
    palette: {
      primary: { main: "#EB6131" },
      secondary: { main: "#1D1D1B" },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"],
    },
  });
  return (
    <div className="pd-common ContactRow2">
      <div className="container">
        <div className="text-center">
          <div className="Ct11">Make an Enquiry</div>
          <div className="Ct22">
            Please complete the following details and we will respond to your
            enquiry within 24 hours. <br />
            For urgent requests, please contact via WhatsApp for immediate
            assistance.
          </div>
          <div className="contactFormR1">
            <ThemeProvider theme={theme}>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    label="Name"
                    fullWidth
                    size={inputSize}
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
                    label="Phone Number"
                    fullWidth
                    size={inputSize}
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
                    label="Email"
                    fullWidth
                    size={inputSize}
                    sx={{
                      svg: { color },
                      input: { color },
                      label: { color },
                      borderColor: { color },
                    }}
                  />
                </div>
                <div className="col-md-6">
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
                      Select Pax
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Select Pax"
                      onChange={handleChange}
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-12">
                <TextareaAutosize placeholder="Aditional Comments , if you have" minRows={3} fullWidth sx={{
                      svg: { color },
                      input: { color },
                      label: { color },
                      borderColor: { color },
                    }}/>
                </div>
                
              </div>
              <div className="text-center">
                    <button class="T7">Submit Form</button>
                </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRow2;
