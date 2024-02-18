import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

const Section1 = () => {

    const sidebarData = [
        {
            id:1,
            title: "Strategy and Consulting"
        },
        {
            id:2,
            title: "Online Marketing Experience"
        },
        {
            id:3,
            title: "Commerce Solutions"
        },
        {
            id:4,
            title: "Growth Marketing"
        },
        {
            id:5,
            title: "Asset Creation"
        },

    ]


  return (
    
        <div className="container">
          <Sidebar data={sidebarData}/>
          <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
            <div className="mx-auto w-11/12 max-w-[1000px] py-10">
              <Outlet />
            </div>
          </div>
        </div>
      
  )
}

export default Section1