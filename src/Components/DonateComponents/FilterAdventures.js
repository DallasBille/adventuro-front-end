import React from 'react'
import { connect } from 'react-redux'
import { setFilterAction } from '../../Redux/actions/adventureActions'
class FilterAdventure extends React.Component {

        setFilterState = (event) => {
            this.props.setFilterAction(event.target.value)
        }

        render(){
            return(
                <div className="filter">
                  <label className="filter-label">Sort by Transportation Mode</label>
                  <br/>
                    <select className="filter-select" onChange={this.setFilterState} value={this.props.term} type="mode" >
                        <option>All</option>
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
            )
        }
}

const mapStateToProps = ({filter}) => {
    return filter
}

export default connect(mapStateToProps,{setFilterAction})(FilterAdventure)
