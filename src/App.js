import React from 'react';
import logo from './logo.svg';
import './App.css';
// import SignUp from './Components/SignUp'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import RouterComp from './Components/RouterComp'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'
// import { loadUser } from './Adapters/userAdapters'


class App extends React.Component {


    componentDidMount(){
        let token = localStorage.getItem("token")
        if(token){
            fetch(`http://localhost:3000/api/v1/current_user`,{ headers: { Authorization: `Bearer ${token}` } })
            .then(res => res.json())
            .then(user => {
                console.log(token);
                 this.props.loadUser(user.user)
                  this.props.setToken(token)
            })
        }
    }




    // {notLoggedIn ? <Landing/> :
    // const notLoggedIn = (Object.keys(this.props.email).length == 0)
    render(){
      return (
        <div className="App">
            <Router>
            <h3>App</h3>
            <Nav/>
            <RouterComp/>
            <Footer/>
            </Router>
        </div>
      );
    }
}



const mapStateToProps = ({user}) => {
    return user
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (user)=>{dispatch({type: "LOAD_USER", payload: user})},
        setToken: (token)=>{dispatch({type: "SET_TOKEN", payload: token})}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
