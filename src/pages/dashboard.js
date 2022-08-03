import React from 'react'
import LeftNav from '../components/LeftNav';
import DashboardContainer from '../components/DashboardContainer';


function Dashboard() {
    return (
        <div className="dashboard-section">
           
           <LeftNav/>
           <DashboardContainer/>
           </div>
    )
}

export default Dashboard
