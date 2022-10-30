import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./login1.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  Container,
  Breadcrumb,
  ListGroup,
  Card,
} from "react-bootstrap";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useNavigate1,
} from "react-router-dom";

export default function MyVerticallyCenteredModal(props) {
  const [modalShowe, setModalShowe] = useState(false);
  const { description, menu, tasks } = props;
  const [bF, setBF] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setdinner] = useState();
  const [Snack, setSnack] = useState();

  const navigate = useNavigate();

  useEffect(async () => {
    await setBF(menu.breakfast);
    await setLunch(menu.lunch);
    await setSnack(menu.Snack);
    await setdinner(menu.dinner);
  }, [menu]);

  // useEffect(async() =>
  //   await setTasks(Individualtraining.tasks)
  // },[Individualtraining])

  // }, [])
  // const [Individualtraining, setIndividualtraining] = useState()
  // const [modalShowe1, setModalShowe1] = useState(false);
  // const [description123,setDescription123]=useState()
  // const navigate1=useNavigate1()
  // useEffect(() => {
  //     axios.get('http://localhost:3030/Individualtraining/getind').then((res) => {
  //         console.log(res.data);
  //         setmenu(res.data)
  //     })

  // }, [])

  return (
    <div className="model">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="h4">:פרטים על הקבוצה</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <div className="container-fluid">
            <div className="l2">
              <div className="row">
                <div className="col-12">
                  <div className="List3">
                    {/* {menu && menu.length && menu.map((it) =>  */}
                    {/* height: "15vh" */}
                    <Card style={{ width: "18rem" }}>
                      <Card.Header className="c2">תפריט הקבוצה</Card.Header>
                      <ListGroup>
                        <ListGroup.Item>{bF && bF}</ListGroup.Item>
                        <ListGroup.Item>{lunch && lunch}</ListGroup.Item>
                        <ListGroup.Item>{Snack && Snack}</ListGroup.Item>
                        <ListGroup.Item>{dinner && dinner}</ListGroup.Item>
                      </ListGroup>
                    </Card>

                    {/* )} */}
                    {/* {Individualtraining && Individualtraining.length && Individualtraining.map((it) =>  */}

                    <Card
                      style={{
                        width: "18rem",
                        height: "25vh",
                        direction: "ltr",
                      }}
                    >
                      <Card.Header className="c2">אימון הקבוצה</Card.Header>
                      <ListGroup style={{ overflow: "scroll" }}>
                        {tasks &&
                          tasks.length &&
                          tasks.map((item) => (
                            <ListGroup.Item key={item}>{item}</ListGroup.Item>
                          ))}
                        {/* <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item> */}
                      </ListGroup>
                    </Card>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="close">
          <Button onClick={props.onHide} className="close1">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
