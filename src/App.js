import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Breadcrumb, ListGroup, Card, Form, Row, Button, Link as link } from 'react-bootstrap';
import './App.css';
import Fruits from './assets/Imges/Fruits.png';
import imeges1 from './assets/Imges/imeges1.jpg';
import Login from './component/login/Login';
import Header from './component/header/header';
import Homepage from './component/homepage/homepage';
import { Registrationpage } from './component/Registrationpage/Registrationpage.js';
import Confirmationpage from './component/Confirmationpage/Confirmationpage';
import Dietmenu from './component/Dietmenu/Dietmenu';
import Trainingorder from './component/Trainingorder/Trainingorder';
import Followupplan from './component/Followupplan/Followupplan';
import Trainingexercises from './component/Trainingexercises/Trainingexercises';
import Recommendations from './component/Recommendations/Recommendations';
import Aboutus from './component/Aboutus/Aboutus';
import Questions from './component/Questions/Questions';
import Quesiong from './component/Quesiong/Quesiong';
import Graph from './component/graph/graph';
import Graphd from './component/graph/graphdaf';
import Menu1 from './component/menu/menu';

import { Outlet } from 'react-router-dom';
// , Explanation
// import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateUser } from './component/Redux/Actions/action'
function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.user
  }
}

function App(props) {
  //const [currentUser, setcurrentUser] = useState()
  const { currentUser, dispatch } = props
  useEffect(() => {
    dispatch(updateUser(JSON.parse(localStorage.getItem('user'))))
  }, [])
  return (
    <div className="App">

<div>
 {!currentUser ?
   <div className="fo">
  
    <Row>
           <Form.Group >
           <Form.Label>:ת.ז לכניסה</Form.Label><Form.Control type="string" placeholder="Enter T.Z" />
           </Form.Group>
          </Row>
          <br></br>
          
          <Button variant="primary" type="button" className="button" >
            אישור </Button>                
    </div> 
   : ''}  
</div>
{/* onClick={pass} */}

      <div className='wrapImg'>
        {currentUser ? <div className="cur">
          <Card border="dark" style={{ width: '15rem' }}>
            <Card.Body >
              <div >
                <p style={{ display: 'flex' }}>{currentUser.name}<b style={{ color: "palegreen" }}>{":שם מישתמש"}</b></p>
                <p style={{ display: 'flex' }}>{currentUser.email}<b style={{ color: "palegreen" }}>{":מייל"}</b></p>
                <p style={{ display: 'flex' }}>{Math.floor((new Date().getTime() - new Date(currentUser.date).getTime()) / (1000 * 3600 * 24)) + 1}<b style={{ color: "palegreen" }}>{":מיספר ימים שהותך באתר"}</b></p>
              </div>
            </Card.Body>
          </Card>
        </div>
          : ''}
        <img src={Fruits} className="imgLogo" />

      </div>

      <Header />
      {/* <div className='img1'>
         <img src={imeges1} className="imeges1" />
        </div> */}
      <Outlet />


    </div>
  );
}
//progress
export default connect(mapStateToProps)(App);
