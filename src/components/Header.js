import React from 'react'
 import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_light.css';
import '../css/header.css';
import RyffLogo from '../images/ryff-logo.svg'
import DisneyLogo from '../images/disney.svg'
import Avatar from '../images/avatar.svg'
import Notification from '../images/notifications.svg'



function Header() {
    return (
        <div>
            <div className="header">   
                <EuiHeader>
                    <EuiHeaderSectionItem border="right">
                        <img src={RyffLogo} alt="ryff logo" className="logo"/>
                    </EuiHeaderSectionItem>
                    <div className="links">
                        <img src={DisneyLogo} alt="disney logo"/>
                        <div className="avatar-border">
                            <img src={Avatar} alt="user image" />
                        </div>
                        <EuiHeaderLink className="notification">
                        <img src={Notification} alt="icon" />
                        </EuiHeaderLink>

                         <EuiHeaderLink iconType="gear"></EuiHeaderLink>
                    </div>
                </EuiHeader>

                <div className="">Welcome to Spheera Robert</div>
            </div>
        </div>
    )
}

export default Header
