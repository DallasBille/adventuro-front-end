import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import RouterComp from './Components/RouterComp'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { currentUser } from './Adapters/userAdapters'
import { fetchAdventures } from './Adapters/adventureAdapters'

class App extends React.Component {


    componentDidMount(){
        this.props.fetchAdventures()
        let token = localStorage.getItem("token")
        if(token){
            this.props.currentUser(token)
        }
    }

    // fetch(`http://localhost:3000/api/v1/current_user`,{ headers: { Authorization: `Bearer ${token}` } })
    // .then(res => res.json())
    // .then(user => {
    //     this.props.loadUser(user.user)
    //     this.props.setToken(token)
    // })
    render(){
      return (

        <div className="App">
        <Router>
            <h3>App</h3>
            <Nav/>
            <RouterComp/>
            <div className="clear">
            </div>
            <Footer/>
        </Router>
        </div>
      );
    }
}

const mapStateToProps = ({user}) => {
    return user
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadUser: (user)=>{dispatch({type: "LOAD_USER", payload: user})},
//         setToken: (token)=>{dispatch({type: "SET_TOKEN", payload: token})},
//         // fetchAdventures: (adventures)=>dispatch({type: "LOAD_ADVENTURES", payload: adventures})
//         fetchAdventures: fetchAdventures()
//
//
//     }
// }

export default connect(mapStateToProps, {currentUser, fetchAdventures})(App)
