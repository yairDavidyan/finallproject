import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Bro wserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
// import Graphd from "./graphdaf";
function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.user,
  };
}
function Graphd(props) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    percentTraining: "",
    percentMenu: "",
    userId: props.currentUser?.id,
    groupId: props.currentUser?.groupeId,
  }); //props.currentUser.id
  // if(props.currentUser){

  // }

  function pass() {
    axios.post(`http://localhost:3030/graph/setData`, data).then((res) => {
      console.log(res.data);
      navigate("/Graph", { state: { data: res.data } });
    });
  }

  return (
    <>
      {/* <Explanation></Explanation> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-11.5">
            <div className="form2">
              <br></br>
              <h3 className="h31">:בדיקת עמידה בקריטריונים </h3>
              <Form>
                <Row className="mb-3">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>אחוזי עמידה באימון</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setData({ ...data, percentTraining: e.target.value })
                      }
                      type="number"
                      placeholder="Enter "
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label>אחוזי עמידה בתפריט</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setData({ ...data, percentMenu: e.target.value })
                      }
                      type="number"
                      placeholder="Enter "
                    />
                  </Form.Group>
                </Row>

                {/* onClick={} */}
                {/* */}
                <Button
                  variant="primary"
                  type="button"
                  className="button"
                  onClick={pass}
                >
                  אישור
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps)(Graphd);
