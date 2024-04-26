import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className="text-[65px] leading-[62px] font-[400] font-['Open_Sans'] tracking-tighter text-green-50 pl-8">
                {props.data}
            </div>
        </>
    )
}

export default Heading