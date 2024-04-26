import React from 'react'

const PointCard = (props) => {
  return (
    <>
        <div className={`py-16 text-green-50 border-green-50 font-sans border-b`}>
            <h1 className='text-xl'>{props.id}. {props.title}</h1>
            <h2 className='text-md pt-5 text-justify'>&emsp;{props.description}</h2>
        </div>
    </>
  )
}

export default PointCard