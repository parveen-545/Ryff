import React from 'react'
import '../components/Dashboard.css'
import Header from '../components/Header.js'
import iconDiscover from '../images/icon-discover.svg'
import iconApprove from '../images/icon-approve.svg'
import iconSuccess from '../images/icon-success.svg'
import iconVideo from '../images/icon-video-upload.svg'

import {
    EuiButton,
    EuiCard,
    EuiIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink,
    EuiSpacer,
    EuiText,
   } from '@elastic/eui';
  

function DashboardContainer() {
    return (

      
        <div className="dasboardContainer">
        <Header/>
 

 <section className="card-section">
  <div className="card-title">
      Content
  </div>
        <EuiFlexGroup gutterSize="l" className="flex-container">
        <EuiFlexItem>
          <EuiCard
            className="card-alignment bg-lime-red"
            image={iconDiscover}
            title="DISCOVER"
            description="Lorem Ipsum"
            footer={
              <div>
                <EuiButton aria-label="Launch" className="btn btn-launch">Launch</EuiButton>
              </div>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard
            className="card-alignment bg-lime-blue"
            image={iconApprove}
            title="Approve"
            description="Lorem Ipsum"
            footer={
              <div>
                <EuiButton aria-label="Launch"  className="btn btn-launch">Launch</EuiButton>
              </div>
            }
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            className="card-alignment bg-lime-blue-shade1"
            image={iconSuccess}
            title="SUCCESS"
            description="Lorem Ipsum"
            footer={
              <div>
                <EuiButton aria-label="Launch"  className="btn btn-launch">Launch</EuiButton>
              </div>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard
            className="card-alignment bg-lime-purple"
            image={iconVideo}
            title="VIDEO UPLOAD"
            description="Lorem Ipsum"
            footer={
              <div>
                <EuiButton aria-label="Launch"  className="btn btn-launch">Launch</EuiButton>
              </div>
            }
          />
        </EuiFlexItem>

      </EuiFlexGroup>
      </section>

        </div>
    )
}

export default DashboardContainer
