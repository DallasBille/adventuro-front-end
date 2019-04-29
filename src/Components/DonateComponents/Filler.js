import React from 'react'

const Filler = (props) => {
console.log(Math.round(props.percentage));
    return(
        <div className="filler" style={{width: `${Math.round(props.percentage)}%`}}>

        </div>
    )

}
export default Filler
