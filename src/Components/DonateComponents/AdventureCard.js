import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { showAdventure } from "../../Adapters/adventureAdapters";
import { connect } from "react-redux";

const AdventureCard = props => {
  const styles = {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  };

  const shortenedMission = () => {
    const short = props.adventure.mission.substring(0, 75);
    return short + "...";
  };

  const setAdventureState = () => {
    props.showAdventure(props.adventure.id);
  };

  return (
    <Link onClick={setAdventureState} to={`/${props.adventure.id}`}>
      <div>
        <Card className="adventure-card">
          <CardActionArea>
            <CardContent>
              <img
                className="adventure-images"
                src={`http://localhost:3000/${props.adventure.image_url}`}
              />
              <Typography gutterBottom variant="h8" component="h3">
                {props.adventure.title}
              </Typography>
              <Typography gutterBottom variant="h8" component="h3">
                Mode: {props.adventure.mode}
              </Typography>
              <Typography component="p">{shortenedMission()}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Donate
            </Button>
            <Button size="small" color="primary">
              More
            </Button>
            <Typography gutterBottom variant="h12" component="h6">
              Goal: ${props.adventure.cost}
            </Typography>
            <Typography gutterBottom variant="h12" component="h6">
              Donated: ${props.adventure.sum_amount}
            </Typography>
          </CardActions>
        </Card>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ adventure }) => {
  return adventure;
};

export default connect(
  mapStateToProps,
  { showAdventure }
)(AdventureCard);
