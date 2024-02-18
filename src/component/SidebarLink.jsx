import React from 'react'
import { useSelector } from 'react-redux'

const SidebarLink = ({id, title}) => {

    const {currentId} = useSelector((state) => state.section2)

  return (
    <div >{title}</div>
  )
}

export default SidebarLink