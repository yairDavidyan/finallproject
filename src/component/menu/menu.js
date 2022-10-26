import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Breadcrumb, ListGroup, Card, Button } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './menu.css';
import MyVerticallyCenteredModal from './menu'


function Menu1(props) {

    const [groups, setgroups] = useState()
    const [modalShow, setModalShow] = useState(false);
    const [description1, setDescription1] = useState()
    const [menu1, setmenu1] = useState()
    const [tasks1,settasks1]=useState()
    // const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3030/groupes/getAllgroupes').then((res) => {
            console.log(res.data);
            setgroups(res.data)
        })
    }, [])  
    async function description(item) {
        await setDescription1(item.description)
     
        //לשלוף את המניו לפי הקוד, 
        axios.get(`http://localhost:3030/menu/getmenubyid/${item.menu}`).then((res) => {
            console.log(res.data);
            setmenu1(res.data)
        })
           //
        //     axios.get(`http://localhost:3030/Individualtraining/getIndBynamegroup/${item.Individualtraining}`).then((res) => {
        //         console.log(res.data);
        //         settasks1(res.data.tasks)
        //         setModalShow(true) 
        // })
    }


    // function dddd(e) {
    //     debugger
    //     console.log(e.name);
    //     navigate('/Registrationpage', { state: { groupeId: e.name } });

    // }


    return (
        <>
            <div className='container-fluid1'>
                <div className='l1'>
                    <br></br>
                    <br></br>
                    {/* <div className='row'>
                        <div className='col-10'> */}
                    <div className='row'>
                        <div className='col-10'>
                            <div className='List1'>
                                {menu1 && menu1.length && menu1.map((item) =>
                                    <Card style={{ width: '18rem' }} >
                                        <Card.Header className="ch1"></Card.Header>
                                        <Card.Header className="ch1"></Card.Header>
                                        <ListGroup >
                                            <ListGroup.Item>{item.Breakfast}:</ListGroup.Item>
                                            <ListGroup.Item >{item.Lunch}</ListGroup.Item>
                                            <ListGroup.Item>{item.Snack}</ListGroup.Item>
                                            <ListGroup.Item>{item.Dinner}</ListGroup.Item>
                                            {/* <ListGroup.Item >
                                                <button onClick={() => dddd(item)} className="ch1">הרשמה</button> - <button className="ch1" onClick={() => description(item)}>לפרטים</button>
                                            </ListGroup.Item> */}
                                        </ListGroup>

                                    </Card>
                                )}  </div>
                        </div>
                        {/* </div></div> */}

                    </div>
                </div>
            </div>

            <MyVerticallyCenteredModal className='m5'
                show={modalShow}
                onHide={() => setModalShow(false)}
                description={description1}
                menu={menu1}
                tasks={tasks1}
            />
        </>
    )
}

export default Menu1;
