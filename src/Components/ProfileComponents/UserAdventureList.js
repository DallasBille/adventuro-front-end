import React from 'react'
import NewAdventure from './NewAdventure'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';



class UserAdventureList extends React.Component{

    state = {
        expanded: false,
        editedAdventure: {
            title: this.props.adventures.title,
            mode: this.props.adventures.mode,
            mission: this.props.adventures.mission,
            title: this.props.adventures.title,
            cost: this.props.adventures.cost,
        }
    }

    handleExpandClick = () => {
        console.log("clicked");
   this.setState(state => ({ expanded: !state.expanded }));
 };

 // handleOnchange =() => {
 //     this.setState({
 //
 //     })
 // }

// className={classnames(classes.expand, {
//     [classes.expandOpen]: this.state.expanded,
// })}
render(){
    console.log(this.state);
    return(
        <div className="user-adventure-card">
        <Card>
        <CardActionArea>
        <IconButton
        onClick={this.handleExpandClick}
        aria-expanded={this.state.expanded}
        aria-label="Edit"
      >
      <Button>Edit Adventure</Button>
      </IconButton>
          <CardContent>
           <img className="adventure-images" src={this.props.adventures.image}/>
            <Typography gutterBottom variant="h8" component="h3">
              {this.props.adventures.title}
            </Typography>
            <Typography gutterBottom variant="h8" component="h3">
              Mode: {this.props.adventures.mode}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography gutterBottom variant="h12" component="h6">
            Cost ${this.props.adventures.cost}
          </Typography>
          <Typography gutterBottom variant="h12" component="h6">
            Donated ${this.props.adventures.sum_amount}
          </Typography>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Adventure</Typography>
            <form>
                  <TextField
                  defaultValue={this.props.adventures.title}
                  onChange={this.handleCreate}
                  value={this.state.title}
                  name="title"
                  id="standard-full-width"
                  label="Adventure Title"
                  style={{ margin: 8 }}
                  placeholder="Title"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                  <TextField multiline={true} rows={2} rowsMax={4} onChange={this.handleCreate} defaultValue={this.props.adventures.mission} value={this.state.mission}
                  name="mission" id="standard-full-width" label="Tell Us About Your Adventure" style={{ margin: 8 }}
                  placeholder="Mission" fullWidth margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                  <TextField
                  defaultValue={this.props.adventures.cost}
                  onChange={this.handleCreate}
                  value={this.state.cost}
                  name="cost"
                  id="standard-full-width"
                  label="Goal"
                  style={{ width: 100}}
                  placeholder="Cost"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                }}/>
                <br/>
                <br/>
                <div>
                <label>Mode</label>
                <br/>
                <select className="adventure-select" defaultValue={this.props.adventures.mode} value={this.state.mode} onChange={this.handleCreate} name="mode">
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
          <Button onClick={this.handleSubmit}>Submit</Button>
          </form>
          </CardContent>
        </Collapse>
      </Card>
        </div>
    )
}

}
// <div className="user-adventure-list">
// <h3>Current Adventure</h3>
// <h3>{props.adventures.title}</h3>
// <p>Cost: ${props.adventures.cost}</p>
// <p>Mode: {props.adventures.mode}</p>
// <p>Mission: {props.adventures.mission}</p>
// <br/>
// <button>Edit</button>
// <button>Delete</button>
// </div>
export default UserAdventureList
