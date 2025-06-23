import React from 'react'

const Footer = () => {
  let footerstyle ={
    width: "100%"
  }

  return (
    <div className='bg-dark text-light' style={footerstyle}>
      <p>
      Copyright &copy; React Todos Practice
      </p>
    </div>
  )
}

export default Footer
