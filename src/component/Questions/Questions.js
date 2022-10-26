import React from 'react';
import { Navbar, Nav, Container, Breadcrumb, ListGroup,Card,Form ,Row,Button} from 'react-bootstrap';
import './Questions.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';

function Questions(props){
    return(
        <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
          <br></br>
          <br></br>
         
        <div className='dh'>
      
        <h1>:אם יש לכם שאלה לגבי תזונה אנחנו פה בשבילכם</h1>
        </div>
         <div className='row1'>
          <Row>
           <Form.Group  controlId="formGridAddress2">
           <Form.Label>:מייל</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           </Form.Group>
          </Row>
          </div>
        <div className='form'>
   <Form>
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Label></Form.Label>
     <Form.Control as="textarea" rows={3}  placeholder="הזן את שאלתך"  />
   </Form.Group>
   </Form>
   </div> 

<div className='col'>
<Button  variant="primary" type="submit" className="button"to='/Quesiong' ><Link to='/Quesiong'>
                  אישור
                </Link></Button>
    </div>
    </div>
   </div>
        </div>
        </>
    )
}
export default Questions;