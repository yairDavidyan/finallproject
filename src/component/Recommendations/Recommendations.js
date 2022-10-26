import React from 'react';
import './Recommendations.css'


function Recommendations(props) {
    return (
        <>
            <br></br>
            <br></br>
            <div className='container-fluid'>
                <div className='row' >
                    <div className='col-6' style={{margin:"auto"}}>
                        <h1 className='h1 '>:המלצותינו</h1>
                        <h2 className='h2'> להאמין שאפשר לשנות *</h2>
                        <h2 className='h2'> להקפיד על התפריט המוצע *</h2>
                        <h2 className='h2'>להקפיד על כושר *</h2>
                        <h2 className='h2'>להקפיד על שתית מים *</h2>
                        <h2 className='h2'>להשתדל לאכול מאכלים טבעיים* </h2>
                        <h2 className='h2'>ומזינים</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Recommendations;