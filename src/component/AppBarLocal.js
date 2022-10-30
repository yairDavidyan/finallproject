import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

function AppBarLocal(props) {
  return (
    <AppBar
      position="static"
      style={{ direction: "rtl", backgroundColor: "#A0CE5E" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            דף הבית
          </Typography>
          <Divider orientation="vertical" color="white" />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {props.linksNavBar.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "white",
                  display: "block",
                  fontFamily: "monospace",
                }}
              >
                <Link className="link" to={page.link}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarLocal;
