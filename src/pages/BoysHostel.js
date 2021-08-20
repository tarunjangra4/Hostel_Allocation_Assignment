import React from "react";
import './BoysHostel.css'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Btn(props){ 
    const {id} = props;
    return (
        <Button variant="contained">
            B{id}
        </Button>
    )
}

function BoysHostel(){

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', height:'60vh'}}>
            <h1>Choose a hostel</h1>
            <div className="container" style={{display:'grid',gridTemplateColumns:'auto auto auto',width:'500px',heigth:'500px'}}>
                <Link to={'/boyshostel/B1'} id={1} component={Btn}></Link>
                <Link to={'/boyshostel/B2'} id={2} component={Btn}></Link>
                <Link to={'/boyshostel/B3'} id={3} component={Btn}></Link>
                <Link to={'/boyshostel/B4'} id={4} component={Btn}></Link>
                <Link to={'/boyshostel/B5'} id={5} component={Btn}></Link>
                <Link to={'/boyshostel/B6'} id={6} component={Btn}></Link>
                
                {/* <div>B1</div>
                <div>B1</div>
                <div>B1</div>
                <div>B1</div>
                <div>B1</div> */}
            </div>
        </div>
    )
}

export default BoysHostel;