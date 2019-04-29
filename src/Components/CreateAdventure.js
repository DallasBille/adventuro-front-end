import React from 'react'
import { createAdventure } from '../Adapters/adventureAdapters'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

 class CreateAdventure extends React.Component {

     state = {
         title: '',
         mode: 'Other',
         mission: '',
         title: '',
         cost: 0,
         user_id: null
     }

     handleCreate = (event) => {
         this.setState({
             [event.target.name]: event.target.value,
             user_id: this.props.id
         })
     }

     handleSubmit = (event) => {
         event.preventDefault()
         let adventure = this.state
         this.props.createAdventure(adventure)
         return this.props.history.push('/profile')
     }
    render(){
     return(
         <div>
         <h3>Create Adventure</h3>
         <form onSubmit={this.handleSubmit}>
         <select value={this.state.mode} onChange={this.handleCreate} name="mode">
         <option>Bicycle</option>
         <option>Car</option>
         <option>Motorcycle</option>
         <option>Foot</option>
         <option>Plane</option>
         <option>Moped</option>
         <option>Boat</option>
         <option>Other</option>
         </select>
         <p>Title</p>
         <input onChange={this.handleCreate} value={this.state.title} name="title" type="text"/>
         <p>Mission</p>
         <input onChange={this.handleCreate} value={this.state.mission} name="mission" type="text"/>
         <p>Cost</p>
         <input onChange={this.handleCreate} value={this.state.cost} name="cost" type="text"/>
         <p>Description</p>
         <textarea onChange={this.handleCreate} value={this.state.description} rows="4" cols="50" name="description" type="text"/>
         <br/>
         <input type="submit"/>
         </form>
         </div>
     )
     }
 }
 const mapStateToProps = ({user}) => {
     return user
 }


 export default connect(mapStateToProps, {createAdventure})(CreateAdventure)
