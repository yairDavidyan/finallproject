import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Card, Col, Form, Row, Stack } from "react-bootstrap";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import "./App.css";
import Fruits from "./assets/Imges/Fruits.png";

// , Explanation
// import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AppBarLocal from "./component/AppBarLocal";
import { updateUser } from "./component/Redux/Actions/action";
import { Link, Outlet } from "react-router-dom";
import Header from "./component/header/header";
import LoginHome from "./component/LoginHome";

const linksNavBar = [];

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.user,
  };
}

function App(props) {
  //const [currentUser, setcurrentUser] = useState()
  const { currentUser, dispatch } = props;
  const [register, setRegister] = useState(false);
  const [linksNavBar, setLinksNavBar] = useState([]);
  useEffect(() => {
    console.log("test");
    axios.get("http://localhost:3030/user/getUser").then((res) => {
      console.log(res.data);
      // setmenu1(res.data);
    });
    dispatch(updateUser(JSON.parse(localStorage.getItem("user"))));
  }, []);
  return (
    <Stack>
      <AppBarLocal linksNavBar={linksNavBar} />
      {/* <Header linksNavBar={linksNavBar} /> */}
      {register ? (
        <Outlet />
      ) : (
        <LoginHome setRegister={setRegister} setLinksNavBar={setLinksNavBar} />
      )}
    </Stack>
    // <div className="App">
    //   <Header />
    //   {!currentUser ? (
    //     <Row
    //       style={{ paddingTop: "2%", paddingLeft: "45%", paddingRight: "45%" }}
    //     >
    //       <Form.Group>
    //         <Form.Label>:ת.ז לכניסה</Form.Label>
    //         <Form.Control type="string" placeholder="Enter T.Z" />
    //       </Form.Group>
    //       <Button variant="primary" type="button" className="button">
    //         אישור{" "}
    //       </Button>
    //     </Row>
    //   ) : (
    //     <></>
    //   )}
    //   {currentUser ? (
    //     <>
    //       <Card border="dark" style={{ width: "15rem" }}>
    //         <Card.Body>
    //           <p style={{ display: "flex" }}>
    //             {currentUser.name}
    //             <b style={{ color: "palegreen" }}>{":שם מישתמש"}</b>
    //           </p>
    //           <p style={{ display: "flex" }}>
    //             {currentUser.email}
    //             <b style={{ color: "palegreen" }}>{":מייל"}</b>
    //           </p>
    //           <p style={{ display: "flex" }}>
    //             {Math.floor(
    //               (new Date().getTime() -
    //                 new Date(currentUser.date).getTime()) /
    //                 (1000 * 3600 * 24)
    //             ) + 1}
    //             <b style={{ color: "palegreen" }}>{":מיספר ימים שהותך באתר"}</b>
    //           </p>
    //         </Card.Body>
    //       </Card>
    //       <img src={Fruits} className="imgLogo" />
    //     </>
    //   ) : (
    //     <></>
    //   )}

    //   {/* onClick={pass} */}

    //   {/* <div className='img1'>
    //      <img src={imeges1} className="imeges1" />
    //     </div> */}

    // </div>
  );
}
//progress
export default connect(mapStateToProps)(App);
