import React, { useState, useRef } from "react";
import { Navbar, Nav, Container, Breadcrumb, ListGroup, Card, Form, Row, Button } from 'react-bootstrap';
import './Registrationpage.css';
import { BrowserRouter, Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { updateUser } from '../Redux/Actions/action'
import { connect } from "react-redux";

// function Explanation(props) {
//   return (
//     <>
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='col-11.5'>
//             <br></br>
//             <div className="h">
//               <h3>:הרשמה לאתר</h3>
//               <h4>צריך לירשום לכל קבוצה כמה דברים עליה צריך לישאול את המורה</h4>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }



function Registrationpage(props) {
  const navigation = useNavigate()
  const { currentUser, dispatch } = props

  const location = useLocation()
  let groupe = location.state


  const name = useRef()
  const id = useRef()
  const age = useRef()
  const email = useRef()
  const pon = useRef()
  const date=useRef()


  function saveNewUser() {
    debugger
    
    let user = {
      name: name.current.value,
      id: id.current.value,
      age: age.current.value,
      email: email.current.value,
      pon: pon.current.value,
      date:date.current.value,
      groupeId: groupe.groupeId,
    }
    console.log(user,groupe)
    axios.post(`http://localhost:3030/user/newUser`, user).then((res) => {
      console.log(res);
      alert(res.data)

      if (res.data == 'נוספת בהצלחה') {
        //מעבר לעמוד הוספת בהצלחה
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(updateUser(JSON.parse(localStorage.getItem('user'))))


        navigation('/Confirmationpage')
        // if(groupeId.id==Trainingorder.id)
        // {
        //   // res.Trainingorder.id(style=color:"red")
        // }
      }

    })
  }





  return (
    <>
      {/* <Explanation></Explanation> */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11.5'>


            <div className="form2">
              <br></br>
              <h3 className="h31">:הרשמה לאתר</h3>
              <Form>

                <Row className="mb-3">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>:שם מלא</Form.Label>
                    <Form.Control ref={name} type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label>:ת.ז</Form.Label>
                    <Form.Control ref={id} type="string" placeholder="Enter T.Z" />
                  </Form.Group>
                </Row>


                <Row className="mb-3">
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>:אימייל</Form.Label>
                    <Form.Control ref={email} type="email" placeholder="Enter Email" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>:מספר פלאפון</Form.Label>
                    <Form.Control ref={pon} type="string" placeholder="Enter Phone" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>:גיל</Form.Label>
                    <Form.Control ref={age} type="number" placeholder="Enter Age" />
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label>:תאריך</Form.Label>
                    <Form.Control disabled ref={date} type="Date" placeholder="Enter date" value={new Date().toISOString().substring(0,10)}/>
                  </Form.Group>
                </Row>

                <Button onClick={saveNewUser} variant="primary" type="button" className="button" >
                  אישור
                </Button>

              </Form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
// , Explanation
export default connect()(Registrationpage);


