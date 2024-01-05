import React, { useState } from "react";
import SalesExecNavbar from "../Components/SalesExecNavbar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

const steps = [
  "Client Personal Information",
  "Client Family Details",
  "Client Bank Details",
  "Client Household Expenses Details",
  "Client Guarantor Details",
  "Identity Details",
];

const AddCustomerPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [formData, setFormData] = useState({
    CenterName: "",
    CutomerID: "",
    CustomerName: "",
    SpouseName: "",
    FatherName: "",
    MotherName: "",
    DateOfBirth: "",
    Age: "",
    isTatchedHouse: "",
    isRoofTiles: "",
    isMetalsheetsRoof: "",
    isCementSheetsRoof: "",
    isCementConcreteCeil: "",
    isHindu: "",
    isMuslim: "",
    isChristian: "",
    isOthers: "",
    isMarried: "",
    isSingle: "",
    isWidow: "",
    isDivorced: "",
    isSeparate: "",
    Address: "",
    isOwned: "",
    isRented: "",
    ResidenceCustYr: "",
    MobileNo1: "",
    MobileNo2: "",
    GuarantorName: "",
    GrSpouseName: "",
    GrFatherName: "",
    GrMotherName: "",
    GrRelation: "",
    GrDateOfBirth: "",
    GrAge: "",
    GrMobileNo1: "",
    GrMobileNo2: "",
    GrAddress: "",
    GrIsOwned: "",
    GrIsRented: "",
    ClAccountDetails: "",
    ClIFSC: "",
    ClBranchName: "",
    ClBankName: "",
    ClLoan: "",
    ClEducation: "",
    ClRent: "",
    ClMedical: "",
    ClOthers: "",
    ClTotal: "",
    ClTotalIncome: "",
    ClTotalExpenses: "",
    ClBalance: "",
    ClSmartCard: "",
    ClAadharCard: "",
    ClVoterId: "",
    ClPanCard: "",
    ClOthers1: "",
    ClOthers2: "",
    GrSmartCard: "",
    GrAadharCard: "",
    GrVoterId: "",
    GrPanCard: "",
    GrOthers1: "",
    GrOthers2: "",
  });

  const [members, setMembers] = useState([
    {
      MemberName: "",
      Relation: "",
      Age: "",
      Occupation: "",
      Education: "",
      Income: "",
    },
  ]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    setMembers([
      ...members,
      {
        MemberName: "",
        Relation: "",
        Age: "",
        Occupation: "",
        Education: "",
        Income: "",
      },
    ]);
  };

  const deleteMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // Client Personal Information component
  const ClientPersonalInfo = ({ formData, setFormData, activeStep }) => (
    <Box
      p={5}
      id="client-personal-info"
      style={{ display: activeStep === 0 ? "block" : "none" }}
    >
      {/* Personal info */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Personal Information
        </Typography>
        <TextField
          label="Center Name"
          value={formData.CenterName}
          onChange={(e) =>
            setFormData({ ...formData, CenterName: e.target.value })
          }
          margin="normal"
          variant="outlined" // Change the variant as needed (outlined, standard, filled)
          sx={{ width: "250px" }} // Adjust the width as needed
        />
        <br />
        <TextField
          label="Customer Name"
          value={formData.CustomerName}
          onChange={(e) =>
            setFormData({ ...formData, CustomerName: e.target.value })
          }
          margin="normal"
          sx={{ width: "350px", marginRight: "10px" }}
        />
        <TextField
          label="Spouse Name"
          value={formData.SpouseName}
          onChange={(e) =>
            setFormData({ ...formData, SpouseName: e.target.value })
          }
          margin="normal"
          sx={{ width: "350px" }}
        />
        <br />
        <TextField
          label="Father Name"
          value={formData.FatherName}
          onChange={(e) =>
            setFormData({ ...formData, FatherName: e.target.value })
          }
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          label="Mother Name"
          value={formData.MotherName}
          onChange={(e) =>
            setFormData({ ...formData, MotherName: e.target.value })
          }
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          type="date"
          label="Date of Birth"
          value={formData.DateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, DateOfBirth: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
        <TextField
          type="number"
          label="Age"
          value={formData.Age}
          onChange={(e) => setFormData({ ...formData, Age: e.target.value })}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
      </Box>
      <br />
      {/* House Status */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          House Status
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isTatchedHouse}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isTatchedHouse: e.target.checked,
                })
              }
              name="isTatchedHouse"
            />
          }
          label="Tatched House"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isRoofTiles}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isRoofTiles: e.target.checked,
                })
              }
              name="isRoofTiles"
            />
          }
          label="Roof Tiles"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isMetalsheetsRoof}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isMetalsheetsRoof: e.target.checked,
                })
              }
              name="isMetalsheetsRoof"
            />
          }
          label="Metal Sheets Roof"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isCementSheetsRoof}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isCementSheetsRoof: e.target.checked,
                })
              }
              name="isCementSheetsRoof"
            />
          }
          label="Cement Sheet Roof"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isCementConcreteCeil}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isCementConcreteCeil: e.target.checked,
                })
              }
              name="isCementConcreteCeil"
            />
          }
          label="Cement concrete Ceiling"
        />
      </Box>
      {/* Religion */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Religion
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isHindu}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isHindu: e.target.checked,
                })
              }
              name="isHindu"
            />
          }
          label="Hindu"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isMuslim}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isMuslim: e.target.checked,
                })
              }
              name="isMuslim"
            />
          }
          label="Muslim"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isChristian}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isChristian: e.target.checked,
                })
              }
              name="isChristian"
            />
          }
          label="Christian"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isOthers}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isOthers: e.target.checked,
                })
              }
              name="isOthers"
            />
          }
          label="Others"
        />
      </Box>
      {/* Martial Status */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Martial Status
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isMarried}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isMarried: e.target.checked,
                })
              }
              name="isMarried"
            />
          }
          label="Married"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isSingle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isSingle: e.target.checked,
                })
              }
              name="isSingle"
            />
          }
          label="Single"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isDivorced}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isDivorced: e.target.checked,
                })
              }
              name="isDivorced"
            />
          }
          label="Divorced"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isSeparate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isSeparate: e.target.checked,
                })
              }
              name="isSeparate"
            />
          }
          label="Separate"
        />
      </Box>
      {/* address */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Address
        </Typography>
        <TextField
          label="Address"
          multiline
          rows={4} // Adjust the number of rows as needed
          value={formData.Address}
          onChange={(e) =>
            setFormData({
              ...formData,
              Address: e.target.value,
            })
          }
          margin="normal"
          variant="outlined"
          fullWidth // Takes the full width of the container
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isOwned}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isOwned: e.target.checked,
                })
              }
              name="isOwned"
            />
          }
          label="Owned"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isRented}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isRented: e.target.checked,
                })
              }
              name="isRented"
            />
          }
          label="Rented"
        />

        <TextField
          type="number"
          label="Residence Customer year"
          value={formData.ResidenceCustYr}
          onChange={(e) =>
            setFormData({ ...formData, ResidenceCustYr: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          size=""
        />
      </Box>

      {/* Mobile Number  */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Contact
        </Typography>
        <TextField
          type="number"
          label="Mobile Number"
          value={formData.MobileNo1}
          onChange={(e) =>
            setFormData({ ...formData, MobileNo1: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          size=""
        />
        <TextField
          type="number"
          label="Alternate Mobile Number"
          value={formData.MobileNo2}
          onChange={(e) =>
            setFormData({ ...formData, MobileNo2: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          size=""
        />
      </Box>
      {/* Add more TextField or other input components for each field */}
      {/* Display completion message or complete step button */}
    </Box>
  );
  const ClientFamilyInfo = ({ formData, setFormData, activeStep }) => (
    <Box
      p={5}
      id="client-personal-info"
      style={{ display: activeStep === 1 ? "block" : "none" }}
    >
      {members.map((member, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Member Information {index + 1}
          </Typography>
          <TextField
            label="Member Name"
            value={member.MemberName}
            onChange={(e) =>
              handleMemberChange(index, "MemberName", e.target.value)
            }
            margin="normal"
            variant="outlined"
            sx={{ width: "250px" }}
          />
          {/* Repeat similar TextFields for Relation, Age, Occupation, Education, Income */}
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteMember(index)}
          >
            Delete Member
          </Button>
        </Box>
      ))}
    </Box>
  );

  const ClientGuarantorDetails = ({ formData, setFormData, activeStep }) => (
    <Box
      p={5}
      id="client-guarantor-details"
      style={{ display: activeStep === 4 ? "block" : "none" }}
    >
      {/* Guarantor Personal Info */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Personal Information
        </Typography>
        <TextField
          label="Relation with Client"
          value={formData.GrRelation}
          onChange={(e) =>
            setFormData({ ...formData, GrRelation: e.target.value })
          }
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <br />

        {/* Guarantor Personal info */}
        <TextField
          label="Customer Name"
          value={formData.GuarantorName}
          onChange={(e) =>
            setFormData({ ...formData, GuarantorName: e.target.value })
          }
          margin="normal"
          sx={{ width: "350px", marginRight: "10px" }}
        />
        <TextField
          label="Spouse Name"
          value={formData.GrSpouseName}
          onChange={(e) =>
            setFormData({ ...formData, GrSpouseName: e.target.value })
          }
          margin="normal"
          sx={{ width: "350px" }}
        />
        <br />
        <TextField
          label="Father Name"
          value={formData.GrFatherName}
          onChange={(e) =>
            setFormData({ ...formData, GrFatherName: e.target.value })
          }
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          label="Mother Name"
          value={formData.GrMotherName}
          onChange={(e) =>
            setFormData({ ...formData, GrMotherName: e.target.value })
          }
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />

        <TextField
          type="date"
          label="Date of Birth"
          value={formData.GrDateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, GrDateOfBirth: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
        <TextField
          type="number"
          label="Age"
          value={formData.GrAge}
          onChange={(e) => setFormData({ ...formData, GrAge: e.target.value })}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
      </Box>
      {/* address */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Address
        </Typography>
        <TextField
          label="Address"
          multiline
          rows={4} // Adjust the number of rows as needed
          value={formData.Address}
          onChange={(e) =>
            setFormData({
              ...formData,
              Address: e.target.value,
            })
          }
          margin="normal"
          variant="outlined"
          fullWidth // Takes the full width of the container
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isOwned}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isOwned: e.target.checked,
                })
              }
              name="isOwned"
            />
          }
          label="Owned"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isRented}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isRented: e.target.checked,
                })
              }
              name="isRented"
            />
          }
          label="Rented"
        />
      </Box>

      {/* Mobile Number  */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Contact
        </Typography>
        <TextField
          type="number"
          label="Mobile Number"
          value={formData.MobileNo1}
          onChange={(e) =>
            setFormData({ ...formData, MobileNo1: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          sx={{ marginRight: 2 }}
        />
        <TextField
          type="number"
          label="Alternate Mobile Number"
          value={formData.MobileNo2}
          onChange={(e) =>
            setFormData({ ...formData, MobileNo2: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          size=""
        />
      </Box>
    </Box>
  );
  const ClientBankDetails = ({ formData, setFormData, activeStep }) => (
    <Box
      p={5}
      id="client-bank-details"
      style={{ display: activeStep === 2 ? "block" : "none" }}
    >
      {/* Account Details */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Account Details
        </Typography>
        <TextField
          label="Account Details"
          value={formData.ClAccountDetails}
          onChange={(e) =>
            setFormData({ ...formData, ClAccountDetails: e.target.value })
          }
          margin="normal"
          variant="outlined" // Change the variant as needed (outlined, standard, filled)
          sx={{ width: "250px" }} // Adjust the width as needed
        />
      </Box>

      {/* IFSC Details  */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          IFSC
        </Typography>
        <TextField
          label="IFSC Details"
          value={formData.ClIFSC}
          onChange={(e) => setFormData({ ...formData, ClIFSC: e.target.value })}
          margin="normal"
          variant="outlined" // Change the variant as needed (outlined, standard, filled)
          sx={{ width: "250px" }} // Adjust the width as needed
        />
      </Box>

      {/* Branch Name */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Bank's Branch Name
        </Typography>
        <TextField
          label="Branch Name"
          value={formData.ClBranchName}
          onChange={(e) =>
            setFormData({ ...formData, ClBranchName: e.target.value })
          }
          margin="normal"
          variant="outlined" // Change the variant as needed (outlined, standard, filled)
          sx={{ width: "250px" }} // Adjust the width as needed
        />
      </Box>

      {/* Bank Name */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Bank's Name
        </Typography>
        <TextField
          label="Bank Name"
          value={formData.ClBankName}
          onChange={(e) =>
            setFormData({ ...formData, ClBankName: e.target.value })
          }
          margin="normal"
          variant="outlined" // Change the variant as needed (outlined, standard, filled)
          sx={{ width: "250px" }} // Adjust the width as needed
        />
      </Box>
    </Box>
  );

  const ClientOtherDetails = ({ formData, setFormData, activeStep }) => (
    <Box
      p={5}
      id="client-bank-details"
      style={{ display: activeStep === 3 ? "block" : "none" }}
    >
      <Grid container spacing={2}>
        {/* Left column */}
        <Grid item xs={6}>
          <Box
            sx={{
              //   border: "1px solid #ccc",
              p: 2,
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          >
            {/* Loan Details */}
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, fontWeight: "bold" }}
              >
                Loan Amount
              </Typography>
              <TextField
                type="number"
                label="Loan Amount"
                value={formData.ClLoan}
                onChange={(e) =>
                  setFormData({ ...formData, ClLoan: e.target.value })
                }
                margin="normal"
                variant="outlined" // Change the variant as needed (outlined, standard, filled)
                sx={{ width: "250px" }} // Adjust the width as needed
              />
            </Box>

            {/* Education Amount  */}
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, fontWeight: "bold" }}
              >
                Education Amount
              </Typography>
              <TextField
                type="number"
                label="Educaion Amount"
                value={formData.ClEducation}
                onChange={(e) =>
                  setFormData({ ...formData, ClEducation: e.target.value })
                }
                margin="normal"
                variant="outlined" // Change the variant as needed (outlined, standard, filled)
                sx={{ width: "250px" }} // Adjust the width as needed
              />
            </Box>

            {/* Rent Amount */}
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, fontWeight: "bold" }}
              >
                Rent Amount
              </Typography>
              <TextField
                type="number"
                label="Rent Amount"
                value={formData.ClRent}
                onChange={(e) =>
                  setFormData({ ...formData, ClRent: e.target.value })
                }
                margin="normal"
                variant="outlined" // Change the variant as needed (outlined, standard, filled)
                sx={{ width: "250px" }} // Adjust the width as needed
              />
            </Box>
          </Box>
        </Grid>

        {/* Right column */}
        <Grid item xs={6}>
          {/* Education, Rent, Medical, Others */}
          {/* ... Other code ... */}
          <Box
            sx={{
              //   border: "1px solid #ccc",
              p: 2,
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          >
            {/* Medical Expenses */}
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, fontWeight: "bold" }}
              >
                Medical Expenses
              </Typography>
              <TextField
                type="number"
                label="Medical Expenses"
                value={formData.ClBankName}
                onChange={(e) =>
                  setFormData({ ...formData, ClBankName: e.target.value })
                }
                margin="normal"
                variant="outlined" // Change the variant as needed (outlined, standard, filled)
                sx={{ width: "250px" }} // Adjust the width as needed
              />
            </Box>

            {/* Other Expenses */}
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, fontWeight: "bold" }}
              >
                Other Expenses
              </Typography>
              <TextField
                type="number"
                label="Other Expenses"
                value={formData.ClOthers}
                onChange={(e) =>
                  setFormData({ ...formData, ClOthers: e.target.value })
                }
                margin="normal"
                variant="outlined" // Change the variant as needed (outlined, standard, filled)
                sx={{ width: "250px" }} // Adjust the width as needed
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  const IdentityDetails = ({ formData, setFormData, activeStep }) => (
    <Box
      p={5}
      id="client-id-details"
      sx={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
      style={{ display: activeStep === 5 ? "block" : "none" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              borderRight: "1px solid #ccc",
              paddingRight: "10px",
              marginRight: "10px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Client Details
            </Typography>
            <TextField
              label="Smart Card No"
              value={formData.ClSmartCard}
              onChange={(e) =>
                setFormData({ ...formData, ClSmartCard: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Aadhar Card No"
              value={formData.ClAadharCard}
              onChange={(e) =>
                setFormData({ ...formData, ClAadharCard: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Voter ID No"
              value={formData.ClVoterId}
              onChange={(e) =>
                setFormData({ ...formData, ClVoterId: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="PAN Card No"
              value={formData.ClPanCard}
              onChange={(e) =>
                setFormData({ ...formData, ClPanCard: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 1"
              value={formData.ClOthers1}
              onChange={(e) =>
                setFormData({ ...formData, ClOthers1: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 2"
              value={formData.ClOthers2}
              onChange={(e) =>
                setFormData({ ...formData, ClOthers2: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />

            {/* ... */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              borderLeft: "1px solid #ccc",
              paddingLeft: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Guarantor Details
            </Typography>
            <TextField
              label="Smart Card No"
              value={formData.GrSmartCard}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  GrSmartCard: e.target.value,
                })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Aadhar Card No"
              value={formData.GrAadharCard}
              onChange={(e) =>
                setFormData({ ...formData, GrAadharCard: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Voter ID No"
              value={formData.GrVoterId}
              onChange={(e) =>
                setFormData({ ...formData, GrVoterId: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="PAN Card No"
              value={formData.GrPanCard}
              onChange={(e) =>
                setFormData({ ...formData, GrPanCard: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 1"
              value={formData.GrOthers1}
              onChange={(e) =>
                setFormData({ ...formData, GrOthers1: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 2"
              value={formData.GrOthers1}
              onChange={(e) =>
                setFormData({ ...formData, GrOthers1: e.target.value })
              }
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />

            {/* ... */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: "grey",
        height: "100%",
        marginTop: "70px",
        padding: "20px",
      }}
    >
      <SalesExecNavbar />
      <Box height="20%" bgcolor="white" p={"20px"}>
        {/* Stepper */}
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <Box
        height="80%"
        bgcolor="white"
        sx={{ display: "flex-col", marginTop: "10px" }}
      >
        <form>
          <ClientPersonalInfo
            formData={formData}
            setFormData={setFormData}
            activeStep={activeStep}
          />
          <ClientGuarantorDetails
            formData={formData}
            setFormData={setFormData}
            activeStep={activeStep}
          />
          <ClientBankDetails
            formData={formData}
            setFormData={setFormData}
            activeStep={activeStep}
          />
          <ClientOtherDetails
            formData={formData}
            setFormData={setFormData}
            activeStep={activeStep}
          />
          <IdentityDetails
            formData={formData}
            setFormData={setFormData}
            activeStep={activeStep}
          />
          <ClientFamilyInfo
            formData={formData}
            setFormData={setFormData}
            activeStep={activeStep}
          />
          {/* ... (other sections/components for each step if any) */}
        </form>

        {/* stepper next level */}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
          {activeStep !== steps.length &&
            (completed[activeStep] ? (
              <Typography variant="caption" sx={{ display: "inline-block" }}>
                {/* Step {activeStep + 1} already completed */}
              </Typography>
            ) : (
              <Button onClick={handleComplete}>
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Complete Step"}
              </Button>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AddCustomerPage;
