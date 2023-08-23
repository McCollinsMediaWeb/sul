import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DatePicker, TimePicker, MobileTimePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {main:"#EB6131"},
      secondary: {main:"#1D1D1B"},
    },
    typography: {
        fontFamily: [
            'Poppins','sans-serif'
        ]
    }
  })
const ReservTable = () => {
  
  const color = "#fff";
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="ReserveTable bg1">
        <ThemeProvider theme={theme}>
      <div className="container">
        <div className="RserveHeader text-center bg2">
          <div className="RserveHeader1">Reserve Your Table</div>
          <div className="RserveHeader2">
            Book a table in advance to enjoy your time with friends & Family
          </div>
        </div>
        <div className="ReserveFormBox">
          <div className="row">
            <div className="col-md-4">
              <div className="form-control-1">
                <TextField label="Name" fullWidth size="small" borderColor="#ffffff" sx={{
                    svg: { color },
                    input: { color },
                    label: { color },
                    borderColor: { color },
                  }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-control-1">
              <TextField fullWidth size="small" label="Email" sx={{
                    svg: { color },
                    input: { color },
                    label: { color },
                    borderColor: { color },
                  }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-control-1">
              <TextField fullWidth size="small" label="Phone Number" sx={{
                    svg: { color },
                    input: { color },
                    label: { color },
                    borderColor: { color },
                  }} />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-control-1">
              <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label"  sx={{
                    svg: { color },
                    input: { color },
                    label: { color },
                    borderColor: { color },
                  }} >Select Pax</InputLabel>
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
            <div className="col-md-3">
              <div className="form-control-1">
                <DatePicker fullWidth slotProps={{ textField: { size: 'small' } }}
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
            <div className="col-md-3">
              <div className="form-control-1">
                <MobileTimePicker fullWidth label="Time" slotProps={{ textField: { size: 'small' } }} sx={{
                    svg: { color },
                    input: { color },
                    label: { color },
                    borderColor: { color },
                  }} />
              </div>
            </div>
            <div className="col-md-3">
                <button className="ButtonTp1">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </div>
  );
};
export default ReservTable;
