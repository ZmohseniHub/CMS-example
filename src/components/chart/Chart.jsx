import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid , Tooltip} from "recharts"

import "./Chart.css"

export default function Chart({title , data, grid}) {
    console.log(this.props);
    
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="sale" stroke='#008080'/>
                    <XAxis dataKey="name" stroke='#00880'/>
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
