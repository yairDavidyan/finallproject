import React from "react";
import './graph.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useLocation } from 'react-router-dom'

function Graph(props) {
  let location = useLocation()
  return (
    <>


      <div className="ProgressBar">
        {/*  */}
        <p><b>:אחוזי עמידה באימון כקבוצה</b></p>
        <ProgressBar striped variant="info" now={location.state.data.doc2.percentTrainingGroup} label={`${location.state.data.doc2.percentTrainingGroup}%`}/>
        <br></br>
        <br></br>
        <p><b>:אחוזי עמידה באימון כיחיד</b></p>
        <ProgressBar striped variant="warning" now={location.state.data.doc1.percentTraining} label={`${location.state.data.doc1.percentTraining}%`}/>
        <br></br>
        <br></br> 
        <p><b>:אחוזי עמידה בתפריט כקבוצה</b></p>
        <ProgressBar striped variant="info" now={location.state.data.doc2.percentMenuGroup} label={`${location.state.data.doc2.percentMenuGroup}%`} />
        {/*  */}
        <br></br>
        <br></br>
        <p><b>:אחוזי עמידה בתפריט כיחיד</b></p>
        <ProgressBar striped variant="warning" now={location.state.data.doc1.percentMenu} label={`${location.state.data.doc1.percentMenu}%`}/>
       
        
      </div>

    </>
  );
}

export default Graph;