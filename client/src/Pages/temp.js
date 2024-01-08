<Box
  sx={{
    border: "1px solid #ccc",
    p: 2,
    borderRadius: "5px",
    marginBottom: "5px",
  }}
>
  <Typography variant="body2" sx={{ marginBottom: 1, fontWeight: "bold" }}>
    Address
  </Typography>
  <TextField
    label="Address"
    multiline
    rows={4} // Adjust the number of rows as needed
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    margin="normal"
    variant="outlined"
    fullWidth // Takes the full width of the container
  />
  <FormControlLabel
    control={
      <Checkbox
        checked={isOwned} // Use the state directly for checked property
        onChange={(e) => setIsOwned(e.target.checked)} // Update the state directly with the checked value
        name="isOwned"
      />
    }
    label="Owned"
  />
  <FormControlLabel
    control={
      <Checkbox
        checked={isRented} // Use the state directly for checked property
        onChange={(e) => setIsRented(e.target.checked)} // Update the state directly with the checked value
        name="isRented"
      />
    }
    label="Owned"
  />
  <TextField
    type="number"
    label="Residence Customer year"
    value={residenceCustYr}
    name="residenceCustYr"
    onChange={(e) => setResidenceCustYr(e.target.value)}
    margin="normal"
    sx={{ width: "200px", marginRight: "10px" }}
    InputLabelProps={{
      shrink: true,
    }}
  />
</Box>;
