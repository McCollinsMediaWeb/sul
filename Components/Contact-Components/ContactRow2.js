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
import { useRouter } from "next/router";
const ContactRow2 = () => {
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
  const theme = createTheme({
    palette: {
      primary: { main: "#EB6131" },
      secondary: { main: "#1D1D1B" },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"],
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract form data here and format it as needed
    const formData = new FormData(event.target);

    // Send the data to the Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz47wFvHXhWjMlhuhVebqCuYjcB3Oi7dc-miGbj42rsb0rcoeBmXcSMMrWRn2YWHh8o/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    // Handle the response if needed
    if (response.ok) {
      // Successful submission
      console.log("Form submitted successfully");

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
    router.push("/thankyou");
  };

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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <TextField
                      label="Name"
                      fullWidth
                      name="Name"
                      size={inputSize}
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Phone Number"
                      fullWidth
                      name="Phone"
                      size={inputSize}
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
                      name="Email"
                      size={inputSize}
                      required
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>

                  <div className="col-md-12">
                    <TextareaAutosize
                      placeholder="Aditional Comments , if you have"
                      minRows={3}
                      fullWidth
                      name="Message"
                      required
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
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
            <button className="btnCntSuccess" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactRow2;
