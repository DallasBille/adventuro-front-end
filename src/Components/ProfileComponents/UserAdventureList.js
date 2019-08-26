import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { updateAdventure } from "../../Adapters/adventureAdapters";

class UserAdventureList extends React.Component {
  state = {
    expanded: false,
    editedAdventure: {
      title: this.props.myAdventure.title,
      mission: this.props.myAdventure.mission,
      mode: this.props.myAdventure.mode
    }
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleOnchange = event => {
    this.setState({
      editedAdventure: {
        ...this.state.editedAdventure,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let adventure = this.state.editedAdventure;
    this.props.updateAdventure(adventure, this.props.myAdventure.id);
    this.handleExpandClick();
  };

  render() {
    return (
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
              <img
                className="adventure-images"
                src={`http://localhost:3000/${this.props.myAdventure.imageURL}`}
              />
              <Typography gutterBottom variant="h8" component="h3">
                {this.props.myAdventure.title}
              </Typography>
              <Typography gutterBottom variant="h8" component="h3">
                Mode: {this.props.myAdventure.mode}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h12" component="h6">
              Goal: ${this.props.myAdventure.cost}
            </Typography>
            <Typography gutterBottom variant="h12" component="h6">
              Donated: ${this.props.myAdventure.sum_amount}
            </Typography>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Adventure</Typography>
              <form>
                <TextField
                  defaultValue={this.state.editedAdventure.title}
                  onChange={this.handleOnchange}
                  value={this.state.editedAdventure.title}
                  name="title"
                  id="standard-full-width"
                  label="Adventure Title"
                  style={{ margin: 8 }}
                  placeholder="Title"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  multiline={true}
                  rows={2}
                  rowsMax={4}
                  onChange={this.handleOnchange}
                  defaultValue={this.state.editedAdventure.mission}
                  value={this.state.editedAdventure.mission}
                  name="mission"
                  id="standard-full-width"
                  label="Tell Us About Your Adventure"
                  style={{ margin: 8 }}
                  placeholder="Mission"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />
                <br />
                <div>
                  <label>Mode</label>
                  <br />
                  <select
                    className="adventure-select"
                    defaultValue={this.state.editedAdventure.mode}
                    value={this.state.editedAdventure.mode}
                    onChange={this.handleOnchange}
                    name="mode"
                  >
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
                <br />
                <Button onClick={this.handleSubmit}>Submit</Button>
              </form>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
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

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { updateAdventure }
)(UserAdventureList);
