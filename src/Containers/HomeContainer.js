import React from 'react'
import HomeDiv from '../Components/Divs/HomeDiv'
const HomeContainer = () => {

    return(
        <div>
            <img className="home-image" src="https://i.imgur.com/gtUldYo.jpg"/>
            <HomeDiv/>
            <p className="about-text">Adventuro is a platform for adventurers to get their trips funded, while giving any added funds to the charity of their choice. Whether you have and adventure idea that you would like funded, or you would like to fund other adventurers along with their charities, Adventuro is the place. Once an adventures minimum goal has been met, any fund beyond go to the charity of their choice!</p>
            <p className="about-text">When an adventures minimum goal has been met, any fund beyond goes to the charity of their choice!</p>
        </div>
    )
}
export default HomeContainer
