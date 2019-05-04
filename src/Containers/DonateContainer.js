import React from 'react'
import { connect } from 'react-redux'
import AdventureCard from '../Components/DonateComponents/AdventureCard'

class DonateContainer extends React.Component {

     createAdventureCards = () => {
         return this.props.adventures.map(adventure => {
             return <AdventureCard adventure={adventure}/>
         })
    }

    render(){
        return(
            <div className="donate-container height">
            {this.createAdventureCards()}
            </div>
            )

    }
}

const mapStateToProps = ({adventures}) => {
    return adventures
}

export default connect(mapStateToProps, null)(DonateContainer)
