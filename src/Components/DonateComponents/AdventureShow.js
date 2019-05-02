import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
import DonateDialog from './DonateDialog'
import AdventureDivider from './AdventureDivider'
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
            debugger
            this.setState({
                adventure: adventure
            })
        })
    }

    render(){
        console.log(this.state);
    return (
        <div className="adventure-show">
            <AdventureDivider/>
            <img className="adventure-show-image"src={`http://localhost:3000/${this.state.adventure.imageURL}`}/>
            <h3>{this.state.adventure.title}</h3>
            <p>{this.state.adventure.mission}</p>
            <h4>${this.state.adventure.sum_amount} Donated of</h4><p>${this.state.adventure.cost}</p>
            <ProgressBar percentage={(this.state.adventure.sum_amount/this.state.adventure.cost) * 100}/>
            <br/>
            <br/>
            <p>{this.state.adventure.donations_number} donated</p>
            <DonateDialog adventureId={this.state.adventure.id}/>
        </div>
     )
    }

}

// const mapPropsToState = (state) => {
//     return state
// }

export default AdventureShow
