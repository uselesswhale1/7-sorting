import React from 'react'

// <Bookmark onChange={handleChange} condition={condition(false)} />
const Bookmark = ({ status, ...rest }) => {
  return (
    <button {...rest}>
      <i className={'bi bi-bookmark' + (status ? '-fill' : '')}></i>
    </button>
  )
}

export default Bookmark

// const bookmark = <i className="bi bi-bookmark"></i>
