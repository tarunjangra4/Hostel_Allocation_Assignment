import  {GoogleLogin, GoogleLogout } from 'react-google-login';
import firebase from 'firebase';
// import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';

function Login(){

  const [loginBtn, setLoginBtn]  = useState(true);
  const [logoutBtn, setLogoutBtn] = useState(false);

  const onLoginSuccess = (response)=>{
    console.log(response.profileObj);
    setLoginBtn(false);
    setLogoutBtn(true);
  }

  const onLoginFailure = (response) =>{
    console.log(response);
  }

  const onLogout = () =>{
    alert("You have been signed out successfully");
    setLogoutBtn(false);
    setLoginBtn(true);
  }

    return(
      <>
      <h1 style={{display:'flex',justifyContent:'center'}}>Hostel Allocation</h1>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', height:"80vh"}}>
        <h3>Login here:</h3>
        {loginBtn ? 
            <GoogleLogin 
              clientId="45927678465-sje4hea3e1otdvfgu0druh2r0jivkt27.apps.googleusercontent.com" 
              buttonText="Login with Google"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={'single_host_origin'}
            /> 
              : null
        }
        { logoutBtn ? 
            <GoogleLogout
              clientId="45927678465-sje4hea3e1otdvfgu0druh2r0jivkt27.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={onLogout}  
            /> 
              : null
        }

      </div>
      </>
    )
}

export default Login;