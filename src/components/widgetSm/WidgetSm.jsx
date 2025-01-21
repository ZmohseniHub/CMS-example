import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@mui/material'
import { newMembers } from '../../data';

import "./WidgetSm.css"
export default function WidgetSm() {

  return (
    <div className='WidgetSm'>
        <h3 className="WidgetSmTitle">WidgetSmtitle</h3>
        <ul className="WidgetSmList">
        {newMembers.map((user) => (
            <li key={user.id}  className="WidgetSmListItem">
                <img className='WidgetSmImg' src={user.img} alt="avatar" />
                <div className="WidgetSmUser">
                    <span className="WidgetSmUsername">{user.username}</span>
                    <span className="WidgetSmProfetion">{user.title}</span>
                </div>
                <Button className='WidgetSmBtn'>
                    <VisibilityIcon className="widgetSmIcon" />
                </Button>
            </li>
        ))}
        </ul>
    </div>
  )
}
