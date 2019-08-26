import React from "react";
import { createDonation } from "../../Adapters/donationAdapters";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { showAdventure } from "../../Adapters/adventureAdapters";
import { addUserDonationAction } from "../../Redux//actions/userActions";

class DonateDialog extends React.Component {
  state = {
    donation: {
      user_id: null,
      adventure_id: null,
      amount: null
    },
    open: false
  };

  handleClickOpen = () => {
    if (!!this.props.token) {
      this.setState({ open: true });
    } else {
      alert("You Must Be Logged In to Donate");
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      donation: {
        [event.target.name]: event.target.value,
        user_id: this.props.id,
        adventure_id: this.props.adventureId
      }
    });
  };

  handleSubmit = () => {
    let donation = this.state.donation;
    this.props.createDonation(donation).then(res => {
      this.props.updateAdventureState(res);
      this.props.addUserDonationAction(res.donation);
    });
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Donate to This Adventure!
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Donation Amount</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Enter the Amount You Would Like to Donate
            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              value={this.state.donation.amount}
              autoFocus
              margin="dense"
              id="name"
              name="amount"
              label="Amount"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Donate
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return user;
};
export default withRouter(
  connect(
    mapStateToProps,
    { createDonation, showAdventure, addUserDonationAction }
  )(DonateDialog)
);
