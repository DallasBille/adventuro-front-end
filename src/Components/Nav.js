import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUserAction } from '../Redux/actions/userActions'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

class Nav extends Component {

    render(){
        return(
        <div>
        <AppBar position="fixed">
            <Toolbar >
              <Typography id="random">
                <Button className="left">
                <Link className="link" to="/home">Home</Link>
                </Button>
                <Button className="left" >
                <Link className="link left" to="/donate">Donate</Link>
                </Button >
                <Button className="left">
                <Link className="link left">Start Adventure</Link>
                </Button>
                <Button className="left">
                <Link className="link left" to="/profile">Profile</Link>
                </Button>
                <Button className="logout">
                <Link  class="link" onClick={this.props.logOut}>LogOut</Link>
                </Button>
              </Typography>
            </Toolbar>
        </AppBar>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOutUserAction())
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
