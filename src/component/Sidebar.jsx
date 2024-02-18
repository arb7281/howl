import React from 'react'

const Sidebar = ({data}) => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
        <div className="flex flex-col">
          {data.map((link) => {
            return (
              <SidebarLink key={link.id} title={link.title} />
            )
          })}
        </div>
    </div>
  )
}

export default Sidebar