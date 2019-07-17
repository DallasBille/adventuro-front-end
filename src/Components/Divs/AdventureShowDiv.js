import React from 'react'
import { withRouter } from 'react-router'

const AdventureShowDiv = (props) => {

    const createAdvRedirect = () => {
        return props.history.push("/create")
    }
    return(
        <div>
            <h2 className='adventure-browse-div'>Browse Adventures. Fund Dreams. Donate to Charity.</h2>
            <button className='adventure-browse-button' onClick={createAdvRedirect}>Fund Your Own Adventure</button>
        </div>
    )
}

export default withRouter(AdventureShowDiv)
