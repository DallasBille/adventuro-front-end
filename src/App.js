import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import RouterComp from './Components/RouterComp'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { signUpNewUser } from './Adapters/userAdapters'


class App extends React.Component {


    componentDidMount(){
        let token = localStorage.getItem("token")
        if(token){
            fetch(`http://localhost:3000/api/v1/current_user`,{ headers: { Authorization: `Bearer ${token}` } })
            .then(res => res.json())
            .then(user => {
                return this.props.loadUser(user.user)
            })
        } 
    }



    render(){
        console.log(this.props.user)
      return (
        <div className="App">
        <Router>
        <h1>App</h1>
          <Nav/>
          <RouterComp/>
          <Footer/>
         </Router>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (user)=>{dispatch({type: "LOAD_USER", payload: user})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
