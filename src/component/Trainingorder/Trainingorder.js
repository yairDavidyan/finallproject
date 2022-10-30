import React, { useEffect, useState } from "react";
import "./Trainingorder.css";
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
} from "react-router-dom";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";

function Trainingorder(props) {
  // const [Trainingorder, setTrainingorder] = useState()//סדר אימון
  const [Grouptraining, setGrouptraining] = useState();
  const [combine, setCombine] = useState();
  const [user, setUser] = useState();
  let navigate = useNavigate();

  useEffect(async () => {
    //שליפת כל הסדר אימון
    //סוג אימון
    //אימון קבוצתי
    let trainingorder = await axios.get(
      "http://localhost:3030/Trainingorder/getTraining"
    );
    trainingorder = trainingorder.data;

    let typeoftraining = await axios.get(
      "http://localhost:3030/Typeoftraining/getTrainingo"
    );
    typeoftraining = typeoftraining.data;

    let groupes = await axios.get(
      "http://localhost:3030/groupes/getAllgroupes"
    );
    groupes = groupes.data;

    let grouptraining = await axios.get(
      "http://localhost:3030/Grouptraining/getGrouptraining"
    );
    // let grouptraining = await axios.get(`http://localhost:3030/Grouptraining/getGrouptraining/${groupes}`)

    grouptraining = grouptraining.data;
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    let arr = [];
    let arr1 = [];
    await trainingorder.forEach((order) => {
      typeoftraining.forEach((type) => {
        if (order.nameimon == type.id) {
          arr.push({
            id: order.codegroupes,
            codeGroupe: groupes.filter((p) => p.id == order.codegroupes)[0]
              .name,
            typeTraning: type.sogimon,
            day: type.nameday,
            start: 0,
            finish: 0,
          });
        }
      });
    });
    arr.forEach((a) => {
      grouptraining.forEach((gt) => {
        if (a.id == gt.groupeCode) {
          a.start = gt.start;
          a.finish = gt.finish;
        }
      });
    });
    console.log(arr);

    setCombine(arr);
  }, []);

  function bbbb(e) {
    console.log(e.codeGroupe);
    navigate("/Trainingexercises", { state: { codeGroupe: e.codeGroupe } });
  }

  let days = [
    { day: "יום ראשון" },
    { day: "יום שני" },
    { day: "יום שלישי" },
    { day: "יום רביעי" },
    { day: "יום חמישי" },
  ];

  return (
    <>
      <div className="container-fuid">
        <div className="row">
          <div className="l">
            <br></br>
            <br></br>
            <div className="col-12">
              <div className="List">
                {/* className="card" */}
                {days.map((item) => (
                  <Card
                    key={item}
                    style={{
                      width: "18rem",
                      height: "35vh",
                      overflow: "scroll",
                      direction: "ltr",
                    }}
                  >
                    <Card.Header className="c">{item.day}</Card.Header>
                    <ListGroup className="b">
                      {/* // מעבר על כל סדר אימון ולשלוף רק את מי שהוא כמו היום נוכחי    */}
                      {combine &&
                        combine.length &&
                        combine.map((obj) =>
                          obj.day == item.day ? (
                            obj.typeTraning == "אימון יחידני" ? (
                              <ListGroup.Item
                                className={
                                  user
                                    ? obj.codeGroupe == user.groupeId
                                      ? "groupColor"
                                      : ""
                                    : ""
                                }
                              >
                                <button onClick={() => bbbb(obj)} className="c">
                                  {obj.typeTraning}
                                </button>
                                <b>
                                  {":"}
                                  {obj.codeGroupe}
                                </b>
                              </ListGroup.Item>
                            ) : obj.typeTraning == "אימון קבוצתי" ? (
                              <ListGroup.Item
                                className={
                                  user
                                    ? obj.codeGroupe == user.groupeId
                                      ? "groupColor"
                                      : ""
                                    : ""
                                }
                              >
                                <b>{obj.codeGroupe}</b>
                                {":"}
                                {obj.typeTraning}
                                {":"}
                                {obj.start}
                                {"-"}
                                {obj.finish}
                              </ListGroup.Item>
                            ) : (
                              <ListGroup.Item
                                className={
                                  user
                                    ? obj.codeGroupe == user.groupeId
                                      ? "groupColor"
                                      : ""
                                    : ""
                                }
                              >
                                <b>{obj.codeGroupe}</b>
                                {":"}
                                {obj.typeTraning}
                              </ListGroup.Item>
                            )
                          ) : (
                            ""
                          )
                        )}
                      {/* <ListGroup.Item><b>קבוצת אחרי לידה :</b>הליכה</ListGroup.Item>
                <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצה גיל הזהב </b></ListGroup.Item>
                <ListGroup.Item><b>קבוצת דיאטה לגיל העמידה:</b> אימון יחידני</ListGroup.Item>
                <ListGroup.Item><b>קבוצת שמירה על אורך חיים בריא :</b> אימון יחידני</ListGroup.Item>
                <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטת חגים </b></ListGroup.Item> */}
                    </ListGroup>
                  </Card>
                ))}
                {/* <Card style={{ width: '18rem' }}>
                                    <Card.Header className="c">יום שני</Card.Header>
                                    <ListGroup className='b'>
                                        <ListGroup.Item><b>קבוצת כסאח :</b>  אימון קבוצתי בין השעות:19:00-20:30</ListGroup.Item>
                                        <ListGroup.Item><b>קבוצת אחרי לידה :</b>אימון קבוצתי בין השעות:17:00-18:00</ListGroup.Item>
                                        <ListGroup.Item><b>קבוצה גיל הזהב :</b> ריצה </ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטה לגיל העמידה </b></ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת שמירה על אורך חיים בריא </b></ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטת חגים </b></ListGroup.Item>
                                    </ListGroup>
                                </Card>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="c"> יום  ראשון</Card.Header>
                                    <ListGroup className='b'>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת כסאח </b></ListGroup.Item>
                                        <ListGroup.Item><b> קבוצת אחרי לידה:</b> ריצה</ListGroup.Item>
                                        <ListGroup.Item><b>קבוצה גיל הזהב :</b> הליכה</ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטה לגיל העמידה </b></ListGroup.Item>
                                        <ListGroup.Item><b>קבוצת שמירה על אורך חיים בריא :</b> אימון יחידני</ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטת חגים </b></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </div>
                        </div>
                        <br></br>
                        <div className='col-12'>
                            <div className='Group1'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="c">יום חמישי </Card.Header>
                                    <ListGroup className='b'>
                                        <ListGroup.Item><b>קבוצת כסאח :</b> ריצה</ListGroup.Item>
                                        <ListGroup.Item><b>קבוצת אחרי לידה  :</b>ריצה</ListGroup.Item>
                                        <ListGroup.Item><b>קבוצה גיל הזהב :</b>  אימון קבוצתי בין השעות:20:00-20:45</ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטה לגיל העמידה </b></ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת שמירה על אורך חיים בריא </b></ListGroup.Item>
                                        <ListGroup.Item><b><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link>:קבוצת דיאטת חגים </b></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="c"> יום רביעי   </Card.Header>
                                    <ListGroup className='b'>
                                        <ListGroup.Item><b>קבוצת כסאח :</b>אימון קבוצתי בין השעות:17:00-18:30</ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת אחרי לידה </b></ListGroup.Item>
                                        <ListGroup.Item><b> קבוצה גיל הזהב :</b>הליכה </ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטה לגיל העמידה </b></ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת שמירה על אורך חיים בריא </b></ListGroup.Item>
                                        <ListGroup.Item><Link className="link" to='/Trainingexercises'><button className="c">אימון יחידני</button></Link><b>:קבוצת דיאטת חגים </b></ListGroup.Item>
                                    </ListGroup>
                                </Card> */}
              </div>
            </div>
          </div>
        </div>
        {/* אמור להיות מלא מהדאטה ביס */}
      </div>
    </>
  );
}
export default Trainingorder;
