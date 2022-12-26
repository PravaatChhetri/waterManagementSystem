import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./App.css";
// import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  elevation:4,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       

        <Grid item xs={12} md={4}>
          <Item>
            <div className="HomeContainer">
              <b>Tank Water Level (Meters)</b>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <div className="HomeContainer">
            <b>Flow Rate Display(m<sup>3</sup>/hour)</b>

            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <div className="HomeContainer">
              <b>Valve Position</b>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <div className="HomeContainer">
              <b>Water Quality</b>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <div className="HomeContainer">
              <b>Alarms and Events</b>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
