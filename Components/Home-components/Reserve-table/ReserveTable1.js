import React from "react";
import { DatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: { main: "#EB6131" },
    secondary: { main: "#1D1D1B" },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"],
  },
});

const ReservTable1 = () => {
  const color = "#fff";
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="pd-common ContactRow2">
      <div className="container">
        <div className="text-center">
          <div className="Ct11">Reserve Your Table</div>
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
                    size="medium"
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
                    size="medium"
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
                    size="medium"
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
                    <FormControl fullWidth size="medium">
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
                </div>
                <div className="col-md-6">
                  <div className="form-control-1">
                    <DatePicker
                      fullWidth
                      slotProps={{ textField: { size: "medium" } }}
                      label="Date"
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
                      slotProps={{ textField: { size: "medium" } }}
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
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
export default ReservTable1;
