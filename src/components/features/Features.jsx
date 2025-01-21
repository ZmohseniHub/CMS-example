import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import "./Features.css"

export default function Features() {
  return (
    <div className='features'>
        <div className="featuresItem">
            <div className="featuresTitle">
                Revanue
            </div>
            <div className="featuresContent">
                <span className="featuresMoney">$4,415</span>
                <span className="featuresRate">
                    -11.4
                    <ArrowDownwardIcon className='featuresIcon negetive' />
                </span>
            </div>
            <span className="featuresSub">Compared to last month</span>
        </div>

        <div className="featuresItem">
            <div className="featuresTitle">
                Sales
            </div>
            <div className="featuresContent">
                <span className="featuresMoney">$4,415</span>
                <span className="featuresRate">
                    -1.4
                    <ArrowDownwardIcon className='featuresIcon negetive' />
                </span>
            </div>
            <span className="featuresSub">Compared to last month</span>
        </div>

        <div className="featuresItem">
            <div className="featuresTitle">
                Cost
            </div>
            <div className="featuresContent">
                <span className="featuresMoney">$2,225</span>
                <span className="featuresRate">
                    +2.4
                    <ArrowUpwardIcon className='featuresIcon' />
                </span>
            </div>
            <span className="featuresSub">Compared to last month</span>
        </div>
    </div>
  )
}
