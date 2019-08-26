import React from "react";
import { connect } from "react-redux";
import AdventureCard from "../Components/DonateComponents/AdventureCard";
import { fetchAdventures } from "../Adapters/adventureAdapters";
import AdventureShowDiv from "../Components/Divs/AdventureShowDiv";
import FilterAdventures from "../Components/DonateComponents/FilterAdventures";

class DonateContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAdventures();
  }

  filteredAdventures = () => {
    const filterAdv = this.props.adventures.adventures.filter(adventure => {
      return adventure.mode === this.props.filter.term;
    });
    if (this.props.filter.term === "All") {
      return this.props.adventures.adventures;
    } else {
      return filterAdv;
    }
  };

  createAdventureCards = () => {
    return this.filteredAdventures().map(adventure => {
      return <AdventureCard adventure={adventure} />;
    });
  };
  render() {
    return (
      <div className="donate-container height">
        <AdventureShowDiv />
        <FilterAdventures />
        {this.createAdventureCards()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchAdventures }
)(DonateContainer);
