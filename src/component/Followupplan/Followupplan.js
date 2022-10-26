import  React from "react";
import { Navbar, Nav, Container, Breadcrumb, ListGroup,Card,Form ,Row,Button} from 'react-bootstrap';
import './Followupplan.css';



function Followupplan(props)
{
    return(
        <> 
        <br></br>  
         <div className='container-fluid'>
           <div className='row'>
        <br></br>   
        <div className="col-4"></div>
        <div  className='col-4'>
        <div className='h'>
        <h1>תכנית מעקב קבוצתית</h1>
        <h2>:מלא את פרטיך</h2> 
       </div> 
       </div>   

  <div className="row">
    <div className="col-4"></div>
    <div className="col-4">
      <div className="form1">
        <Form>
  <Row>
    <div className='col-9'>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>:משקל</Form.Label>
      <Form.Control type="text" placeholder="Enter Weight" />
    </Form.Group>
    </div>
    <br></br>  
    <br></br>  
    <br></br>  
    <br></br>  
    <div className='col-9'>
    <Form.Group  controlId="formGridPassword">
      <Form.Label>:סוג קבוצה</Form.Label>
      <Form.Control type="string" placeholder="Enter Group type" />
    </Form.Group>
      </div>
  </Row>

  <br></br>  
 
  <Row >
  <div className='col-9'>
  <Form.Group  controlId="formGridAddress1">
    <Form.Label>:האם עמדת בקריטריונים</Form.Label>
    <Form.Control type="email" placeholder="Enter Did you meet the criteria" />
  </Form.Group>
  </div>
  <br></br>  
  <br></br>  
  <br></br>  
    <br></br>  
    <div className='col-9'>
  <Form.Group  controlId="formGridAddress2">
    <Form.Label>:כמה קלוריות הורדת </Form.Label>
    <Form.Control type="string" placeholder="Enter How many calories did you lose" />
  </Form.Group>
</div>
 </Row>
 <br></br> 
 </Form> 
<div className="row">
<div className="col-4"></div>
  <Button variant="primary" type="submit" className="button1" >
    אישור
  </Button> 
  </div>
  </div>
  </div>
   
</div>

</div>
</div>
        </>
    )
}

export default Followupplan ;