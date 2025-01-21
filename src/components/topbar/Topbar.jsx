import React from 'react'
import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import XIcon from '@mui/icons-material/X';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Site Name</span>
                    <XIcon />
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topbarIconBadg">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topbarIconBadg">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img className="topbarAvatar" src="/images/avatar.png" alt="Avatar" />
                </div>
            </div>
        </div>
    )
}
