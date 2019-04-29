import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const UserDonations = (props) => {

    const styles = theme => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
    });

    
    return(
    <div>

        <div className='user-donations'>
        <List className={styles.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={props.donations.amount}
              secondary={
                <React.Fragment>
                  <Typography component="span" className={styles.inline} color="textPrimary">
                  {props.donations.title}
                  {props.donations.amount}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          </List>
        </div>
         <div className="clear">
         </div>
      </div>
    )
}

export default UserDonations
