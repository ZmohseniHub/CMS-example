import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className="sidebarListItem active">
                                <LineStyleIcon className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem ">
                            <TimelineIcon className='sidebarIcon' />
                            Analystic
                        </li>
                        <li className="sidebarListItem ">
                            <TrendingUpIcon className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem active">
                                <PeopleOutlineIcon className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/newUsers" className='link'>
                            <li className="sidebarListItem active">
                                <PersonOutlineIcon className='sidebarIcon' />
                                New User
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebarListItem active">
                                <StorefrontIcon className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem ">
                            <AttachMoneyIcon className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem ">
                            <BarChartIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutlineIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem ">
                            <DynamicFeedIcon className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem ">
                            <MailOutlineIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkOutlineIcon className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem ">
                            <TimelineIcon className='sidebarIcon' />
                            Analystics
                        </li>
                        <li className="sidebarListItem ">
                            <ReportIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
