import React from 'react'

const Filler = (props) => {
    return(

            <div className="filler" style={{width: `${Math.round(props.percentage)}%`}}>
            </div>


    )

}
export default Filler
