import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Breadcrumb,
  ListGroup,
  Card,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import "./Quesiong.css";

function Quesiong(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <br></br>
          <div className="borrer">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="col-12">
              <h1 className="hb1">
                <a>
                  <b>שאלתך התקבלה בהצלחה </b>
                </a>
              </h1>
              <h1 className="hb1">
                <a>
                  <b>נשתדל לענות לך בהקדם</b>
                </a>
              </h1>
              <h1 className="hb1">
                <a>
                  <b>!תודה רבה</b>
                </a>
              </h1>
              <br></br>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
export default Quesiong;
