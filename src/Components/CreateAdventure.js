import React from 'react'
import { createAdventure } from '../Adapters/adventureAdapters'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import ActiveStorageProvider from 'react-activestorage-provider'

 class CreateAdventure extends React.Component {


     state = {
         title: '',
         mission: '',
         cost: null,
         mode: 'Other',
         user_id: null,
         image: null
     }

     handleCreate = (event) => {
         this.setState({
             [event.target.name]: event.target.value,
             user_id: this.props.id
         })
     }

     handleSubmit = (event) => {
         event.preventDefault()
         const formData = new FormData()
         formData.append('adventure[title]', this.state.title)
         formData.append('adventure[mission]', this.state.mission)
         formData.append('adventure[cost]', this.state.cost)
         formData.append('adventure[mode]', this.state.mode)
         formData.append('adventure[user_id]', parseInt(this.state.user_id))
         formData.append('adventure[image]', this.state.image)

         this.props.createAdventure(formData)

         this.setState({
             title: '',
             mission: '',
             cost: null,
             mode: 'Other',
             user_id: null,
             image: null
         })
         return this.props.history.push('/profile')
     }

     handleFile = (event) => {
         this.setState({image: event.target.files[0]})
     }


    render(){
        console.log(this.state);
     return(
         <div className="create-container">
           <br/>
            <h3>Create Adventure</h3>
            <form>
                 <TextField
                 onChange={this.handleCreate} value={this.state.title} name="title" id="standard-full-width"
                 label="Adventure Title" style={{ margin: 8 }} placeholder="Title" fullWidth margin="normal"
                 InputLabelProps={{shrink: true,}}/>
                 <TextField multiline={true} rows={2} rowsMax={4} onChange={this.handleCreate} value={this.state.mission}
                 name="mission" id="standard-full-width" label="Tell Us About Your Adventure" style={{ margin: 8 }}
                 placeholder="Mission" fullWidth margin="normal"
                 InputLabelProps={{
                   shrink: true,
                 }}
               />
                 <TextField onChange={this.handleCreate} value={this.state.cost} name="cost" id="standard-full-width"
                 label="Goal" style={{ width: 100}} placeholder="Cost" margin="normal" InputLabelProps={{shrink: true,}}/>
                   <br/>
                   <br/>
                <div>
                <label>Mode</label>
                <br/>
                    <select className="adventure-select" value={this.state.mode} onChange={this.handleCreate} name="mode">
                       <option>Bicycle</option>
                       <option>Car</option>
                       <option>Motorcycle</option>
                       <option>Foot</option>
                       <option>Plane</option>
                       <option>Moped</option>
                       <option>Boat</option>
                       <option>Other</option>
                    </select>
                </div>
                <br/>
                <br/>
                <input onChange={this.handleFile} type="file"/>
                <br/>
                <br/>
                <Button onClick={this.handleSubmit}>Create</Button>
            </form>
         </div>
     )
     }
 }
 // <input onChange={this.handleCreate} value={this.state.cost} name="cost" type="text"/>
 const mapStateToProps = ({user}) => {
     return user
 }


 export default connect(mapStateToProps, {createAdventure})(CreateAdventure)

 
