import React,{ Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import BoysHostel from './BoysHostel';
import GirlsHostel from './GirlsHostel';
import {withRouter} from 'react-router-dom';

function Homepage(){

    // clickGirl = () =>{
    //     this.props.history.push('/girlsHostel');
    // }

    // clickBoy = ()=>{
    //     this.props.history.push('/boysHostel');
    // }
    return(
        // <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>
            <Link to='/girlsHostel'><img width='200px' style={{marginRight:'100px'}} src="https://image.flaticon.com/icons/png/512/920/920938.png" /></Link>
            <Link to='/boysHostel'><img width='200px' src="https://img-premium.flaticon.com/png/512/2423/premium/2423821.png?token=exp=1629446812~hmac=7bc5f34299e2211b9be7ea34b5a4e8d7"/></Link>
        </div>
            // {/* <Switch>
            // <Link to='/girlsHostel'><img width='200px' src="https://image.flaticon.com/icons/png/512/920/920938.png" /></Link>
            // <Link to='/boysHostel'><img width='200px' src="https://img-premium.flaticon.com/png/512/2423/premium/2423821.png?token=exp=1629446812~hmac=7bc5f34299e2211b9be7ea34b5a4e8d7"/></Link>
            //     <Route exact path='/girlsHostel' component={GirlsHostel}/>
            // </Switch> */}
        
    )
}

export default Homepage;