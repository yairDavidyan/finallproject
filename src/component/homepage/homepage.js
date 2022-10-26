import React from 'react';
import './homepage.css';
import { Breadcrumb } from 'react-bootstrap';
import imeges1 from '../../assets/Imges/imeges1.jpg';

function Homepage(props) {
    return (
      <>
      <div className='contaier-fluid1'>
      <div className='row'>
          <div className='col-6'>
    <div className='img1'>
         <img src={imeges1} className="imeges1" />
        </div>
        </div>
       </div>

        <div className='row'>
          <div className='col-6'>
<br></br><br></br>
   <div className="dav">
    
      <h1 className='h13'><b>!ברוכים הבאים</b></h1>
      <h2>הבריאות זה אחד הדברים הכי חשובים בחיינו </h2>
      <h2>ומשום כך צריך להקפיד על אורך חיים בריא וטוב </h2>
      <h2>כדי לשמור על בריאות הגוף והנפש שלנו באתרינו </h2>
      <h2>תוכלו לגלות מה כדי לכם לעשות כדי לשמור על </h2>
      <h2>בריאותכם על הצד הטוב ביותר</h2>
      
      
</div>
       {/* <div className='Breadcrumb'>
        <Breadcrumb >
           <Breadcrumb.Item href="#" >SiteRegisteration</Breadcrumb.Item>
        </Breadcrumb>
        </div> */}
      </div>
      </div>
       </div>
      </>
  )
}

export default Homepage;