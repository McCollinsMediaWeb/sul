import React from "react";
import { DatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";

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
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [inputSize, SetInputSize] = useState("medium");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
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

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract form data here and format it as needed
    const formData = new FormData(event.target);

    // Send the data to the Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxFtERQUcAVHy4dJ87MeDfFiseDsOHJ_Ma5Wg0ruGSTP8M-WLPOp0LzKTNaaU5KpPnMqw/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    // Handle the response if needed
    if (response.ok) {
      // Successful submission
      console.log("Form submitted successfully");
      event.target.reset();
      openModal();
      // Reset the form or perform other actions
    } else {
      // Handle errors
      console.error("Form submission failed");
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/thankyou-reservation");
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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      label="Name"
                      fullWidth
                      size={inputSize}
                      name="Name"
                      required
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
                      name="Phone"
                      required
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
                      name="Email"
                      required
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
                          required
                        >
                          Number of Guest
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
                          required
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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Thank you for submission!</p>
            <button className="btnResSuccess" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ReservTable1;
