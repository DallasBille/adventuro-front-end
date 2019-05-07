import React from 'react'

const Filler = (props) => {

        const progressBarConditional = () => {
            if(props.percentage >= 100){
                return 100
            } else {
                return props.percentage
            }
        }
    return(

            <div className="filler" style={{width: `${Math.round(progressBarConditional())}%`}}>
            </div>


    )

}
export default Filler
