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

const AdventureCard = (props) => {

    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    };

    return(
    <div>
    <Card className="adventure-card">
    <CardActionArea>
      <CardMedia
        className={styles.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.adventure.title}
        </Typography>
        <Typography component="p">
         {props.adventure.mission}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Donate
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
      <Typography component="p">
        Cost ${props.adventure.cost}
      </Typography>
    </CardActions>
  </Card>
    </div>
    )
}

export default AdventureCard
