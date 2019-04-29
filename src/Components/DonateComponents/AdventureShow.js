import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
import DonateDialog from './DonateDialog'
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';




class AdventureShow extends React.Component {

    state ={
        adventure: '',
        percentage: 0
    }
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/adventures/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(adventure => {
            this.setState({
                adventure: adventure
            })
        })
    }

    render(){
    return (
        <div className="adventure-show">
        <h3>{this.state.adventure.title}</h3>
        <p>{this.state.adventure.mission}</p>
        <p>${this.state.adventure.sum_amount}/${this.state.adventure.cost} Donated</p>
        <ProgressBar percentage={(this.state.adventure.sum_amount/this.state.adventure.cost) * 100}/>
        <br/>
        <br/>
        <DonateDialog adventureId={this.state.adventure.id}/>
        </div>
     )
    }

}

// const mapPropsToState = (state) => {
//     return state
// }

export default AdventureShow
