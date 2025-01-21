import React from 'react'
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import { chartData } from '../../data'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

import "./Home.css"

export default function home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Months Sale"  data={chartData} />
      <div className="widget">
        <WidgetSm />
        <WidgetLg />
      </div>

    </div>

  )
}
