import React from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const AdventureCard = (props) => {

    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    };

    const shortenedMission = () => {
        const short =  props.adventure.mission.substring(0, 75)
        return short + "..."

    }
    console.log(props.adventure.imageURL);
    return(
    <Link to={`/${props.adventure.id}`}>
    <div>
    <Card className="adventure-card">
    <CardActionArea>
      <CardContent>
       <img className="adventure-images" src={`http://localhost:3000/${props.adventure.imageURL}`}/>
        <Typography gutterBottom variant="h8" component="h3">
          {props.adventure.title}
        </Typography>
        <Typography gutterBottom variant="h8" component="h3">
          Mode: {props.adventure.mode}
        </Typography>
        <Typography component="p">
         {shortenedMission()}
        </Typography>
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
        Cost ${props.adventure.cost}
      </Typography>
      <Typography gutterBottom variant="h12" component="h6">
        Donated ${props.adventure.sum_amount}
      </Typography>
    </CardActions>
  </Card>
    </div>
</Link>
    )
}

export default AdventureCard
