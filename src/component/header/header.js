import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

// import {useNavigate} from 'react-router-dom'

function Header(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar variant="light" className="Header">
              <Container className="center-Elements">
                <Nav className="Header">
                  <Nav.Link>
                    <Link className="link" to="/homepage">
                      בית
                    </Link>
                  </Nav.Link>
                  {/* <Nav.Link href="#features"><Link className="link" to='/Registrationpage'>הרשמה לאתר</Link></Nav.Link> */}
                  <Nav.Link>
                    {" "}
                    <Link className="link" to="/Login">
                      בחירת קבוצה
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/Trainingorder">
                      סדר אימון
                    </Link>
                  </Nav.Link>
                  {/* // */}
                  <Nav.Link>
                    <Link className="link" to="/Graphd">
                      גרף
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/menu1">
                      תפריט
                    </Link>
                  </Nav.Link>
                  {/*  */}
                  <Nav.Link>
                    {" "}
                    <Link className="link" to="/Questions">
                      שאלות
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/Recommendations">
                      המלצותינו
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/Aboutus">
                      אודותינו
                    </Link>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
