import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./menu.css";

function Menu1(props) {
  const [groups, setgroups] = useState([]);
  const [menu1, setmenu1] = useState([]);
  const [localMenu, setLocalMenu] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/groupes/getAllgroupes")
      .then((res) => {
        setgroups(res.data);
      })
      .then(() => {
        axios.get(`http://localhost:3030/menu/getAllmenu/`).then((res) => {
          setmenu1(res.data);
        });
      });
  }, []);

  useEffect(() => {
    if (groups.length > 0 && menu1.length > 0) {
      let menuArray = [];
      groups?.forEach((group) => {
        menu1?.forEach((menu) => {
          if (menu.id === group.id) {
            let temp = {};
            temp = { ...menu, title: group.name };
            menuArray.push(temp);
          }
        });
      });
      setLocalMenu([...menuArray]);
    }
  }, [groups, menu1]);
  return (
    <>
      <div className="container-fluid1">
        <div className="l1">
          <br></br>
          <br></br>

          <div className="row">
            <div className="col-10">
              <div className="List1">
                {localMenu &&
                  localMenu.length > 0 &&
                  localMenu.map((menu) => {
                    return (
                      <Card style={{ width: "18rem" }}>
                        <Card.Header className="c2">{menu.title}</Card.Header>
                        <ListGroup>
                          <ListGroup.Item>{menu.breakfast}:</ListGroup.Item>
                          <ListGroup.Item>{menu.lunch}</ListGroup.Item>
                          <ListGroup.Item>{menu.Snack}</ListGroup.Item>
                          <ListGroup.Item>{menu.dinner}</ListGroup.Item>
                        </ListGroup>
                      </Card>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MyVerticallyCenteredModal className='m5'
                show={modalShow}
                onHide={() => setModalShow(false)}
                description={description1}
                menu={menu1}
                tasks={tasks1}
            /> */}
    </>
  );
}

export default Menu1;
