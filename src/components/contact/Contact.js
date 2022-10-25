import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContactInfo from "./ContactInfo";

  const Contact = () => {
  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" align="center">
              Contact
            </Typography>
          </Box>

          <Grid container justifyContent="center" sx={{ py: 5 }} spacing={4}>
            <Grid item xs={11.5} lg={3}>
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
