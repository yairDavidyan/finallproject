import React from "react";
import "./Dietmenu.css";
import { Navbar, Nav, Container, Form } from 'react-bootstrap';


    function  Dietmenu(props) {
        // const navigation = useNavigate()
      
        // const id = useRef()
        // const breakfast = useRef()
        // const lunch = useRef()
        // const Snack = useRef()
        // const dinner = useRef()
      
        // function retrievalmenu() {
        //   axios.get('http://localhost:3030/menucontroler/getmenu', {
        //     Menu: {
        //       id: id.current.value,
        //       breakfast: breakfast.current.value,
        //       lunch: lunch.current.value,
        //       Snack: Snack.current.value,
        //       dinner: dinner.current.value,
        //     }
        //   }).then((res) => {
        //     console.log(res);
        //     alert(res.data)
      
        //     // //מעבר לעמוד הוספת בהצלחה
        //     // navigation('/Confirmationpage')
        //   })
        // }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <br></br>
                        <br></br>
                        <h1 className="hed">:קבוצה לאחרי חגים</h1>
                    </div>
                </div>
{/* איך עושים שכל אלמנט הוא מערך אז איך עושים את השם וכל התפריט */}
                <div className="row">
                    <div className='col'>
                        {/* <br></br> */}
                        <div className="Forms" > 
                            <div className="form1">
                           {/* {M.map(el=>(  */}
                              <Form.Select aria-label="Default select example" className="Select" > 
                                    <option>ארוחת בוקר</option>
                                    <option value="1">One</option>  
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">One</option>  
                                 </Form.Select>   
                                   {/* ))}   */}
                            </div> 
                            <h3 className="h3">מהשעה 07:00-10:00</h3> 
                            
                        </div>
   
                        <br></br>
                        <br></br>
                        <div className="Forms">
                            <div className="form1">
                                <Form.Select aria-label="Default select example" className="Select">
                                    <option>ארוחת צהריים</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                             <h3 className="h3">מהשעה 12:30-15:00</h3>
                        </div>

                        <br></br>
                        <br></br>
                        <div className="Forms">
                            <div className="form1">
                                <Form.Select aria-label="Default select example" className="Select">
                                    <option>ארוחת ביניים</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                             <h3 className="h3">מהשעה 16:00-17:00</h3>
                        </div>

                        <br></br>
                        <br></br>
                        <div className="Forms">
                            <div className="form1">
                                <Form.Select aria-label="Default select example" className="Select">
                                    <option> ארוחת ערב</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <h3 className="h3">מהשעה 17:30-19:00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dietmenu;
