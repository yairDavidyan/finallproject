import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Fruits from "../assets/Imges/Fruits.png";

const linksNavBar = [
  {
    name: "בחירת קבוצה",
    link: "/Login",
  },
  {
    name: "סדר אימון",
    link: "/Trainingorder",
  },
  {
    name: "גרף",
    link: "/Graphd",
  },
  {
    name: "תפריט",
    link: "/menu1",
  },
  {
    name: "שאלות",
    link: "/Questions",
  },
  {
    name: "המלצותינו",
    link: "/Recommendations",
  },
];

function LoginHome(props) {
  const [id, setId] = useState("");
  const cookies = new Cookies();

  function checkUser() {
    axios.get("http://localhost:3030/user/getUser").then((res) => {
      console.log(res.data);
      const user = res.data.find((user) => user.id === id);
      cookies.set("user", user.id);
      if (user) {
        props.setUserName(user.name);
        props.setUserId(user.id);
        props.setRegister(true);
        props.setLinksNavBar([...linksNavBar]);
      }
    });
  }
  return (
    <Box style={{ paddingRight: "20%", paddingLeft: "20%", marginTop: "8%" }}>
      <Grid
        container
        direction="row-reverse"
        sx={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C5DDC87F",
          marginRight: "10%",
          borderRadius: 6,
        }}
      >
        <Grid item style={{ flex: 1 }}>
          <Stack
            style={{
              flex: 1,
              flexDirection: "row",
              direction: "rtl",
              paddingLeft: "10%",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{ color: "black", fontSize: 20, paddingLeft: 7 }}
              variant="h6"
            >
              הכנס ת.ז
            </Typography>
            <Stack>
              <TextField
                size="small"
                type="text"
                placeholder="ת.ז"
                onChange={(e) => setId(e.target.value)}
                // onChange={(event) => {
                //   setDataForm({
                //     ...dataForm,
                //     [field.name]: field.isNumber
                //       ? Number(event.target.value)
                //       : event.target.value,
                //   });
                //   setErrors({ ...errors, [field.name]: undefined });
                // }}
                InputProps={{ inputProps: { min: 0 } }}
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
              <Button
                sx={{
                  borderRadius: 20,
                  marginTop: 2,
                  marginBottom: 4,
                  backgroundColor: "#A0CE5E",
                }}
                onClick={() => checkUser()}
                variant="contained"
                type="submit"
              >
                היכנס
              </Button>
              <Typography
                style={{
                  color: "black",
                  fontSize: 20,
                  paddingLeft: 7,
                  alignSelf: "center",
                }}
                variant="h6"
              >
                או בחר קבוצה
              </Typography>
              <Button
                sx={{ borderRadius: 20, backgroundColor: "#A0CE5E" }}
                variant="contained"
                type="submit"
                onClick={() => props.setRegister(true)}
              >
                <Link to="/Login"> בחירת קבוצה</Link>
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <Box
            component="img"
            sx={{
              height: 350,
              width: 400,
            }}
            alt="logo"
            src={Fruits}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginHome;
