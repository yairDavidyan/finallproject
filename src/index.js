import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Aboutus from "./component/Aboutus/Aboutus";
import Questions from "./component/Questions/Questions";
import Login from "./component/login/Login";
import Registrationpage from "./component/Registrationpage/Registrationpage.js";
import Homepage from "./component/homepage/homepage";
import Recommendations from "./component/Recommendations/Recommendations";
import Confirmationpage from "./component/Confirmationpage/Confirmationpage";
import Quesiong from "./component/Quesiong/Quesiong";
import Trainingexercises from "./component/Trainingexercises/Trainingexercises";
import Trainingorder from "./component/Trainingorder/Trainingorder";
import Graph from "./component/graph/graph";
import Graphd from "./component/graph/graphdaf";
import Menu1 from "./component/menu/menu";
import { Provider } from "react-redux";
import store from "./component/Redux/Store";
// , Explanation
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from './component/login/Login';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Homepage />} />
            <Route path="Homepage" element={<Homepage />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="Questions" element={<Questions />} />
            <Route path="Login" element={<Login />} />
            {/* <Route path='/Registrationpage' element={}/> */}
            <Route path="Recommendations" element={<Recommendations />} />
            {/* // */}
            <Route path="Graph" element={<Graph />} />
            <Route path="Graphd" element={<Graphd />} />
            <Route path="Menu1" element={<Menu1 />} />
            {/* // */}
            <Route path="Registrationpage" element={<Registrationpage />} />
            <Route path="Confirmationpage" element={<Confirmationpage />} />
            <Route path="Quesiong" element={<Quesiong />} />
            <Route path="Trainingexercises" element={<Trainingexercises />} />
            <Route path="Trainingorder" element={<Trainingorder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
