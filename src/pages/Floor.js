import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Btn(props){ 
    const {id} = props;
    return (
        <Button variant="contained">
            {id}
        </Button>
    )
}

function Floor(){
    return(
        <div>
            <form>
                <select name='floor'>
                    <option value="f1">Floor1</option>
                    <option value="f2">Floor2</option>
                    <option value="f3">Floor3</option>
                    <option value="f4">Floor4</option>
                    <option value="f5">Floor5</option>
                </select>
            </form>
            <div>
                <div>
                    <Link to={'/boyshostel/B1'} id={1} component={Btn}></Link>
                    <Link to={'/boyshostel/B2'} id={2} component={Btn}></Link>
                    <Link to={'/boyshostel/B3'} id={3} component={Btn}></Link>
                    <Link to={'/boyshostel/B4'} id={4} component={Btn}></Link>
                </div>
                <div>
                    <Link to={'/boyshostel/B5'} id={10} component={Btn}></Link>
                    <Link to={'/boyshostel/B6'} id={5} component={Btn}></Link>
                </div>
                <div>
                    <Link to={'/boyshostel/B1'} id={9} component={Btn}></Link>
                    <Link to={'/boyshostel/B2'} id={8} component={Btn}></Link>
                    <Link to={'/boyshostel/B3'} id={7} component={Btn}></Link>
                    <Link to={'/boyshostel/B4'} id={6} component={Btn}></Link>
                </div>
            </div>
            <div className={'f'+{}}>
                <div></div>
            </div>
        </div>
        
    )
}

export default Floor;