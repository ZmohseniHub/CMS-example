import React from 'react'
import { transactions } from '../../data'
import "./WidgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={'WidgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='WidgetLg'>
      <div className="WidgetLgTitle">Latest TransActions</div>
      <table className="WidgetLgTable">
        <thead>
          <tr className="WidgetLgTr">
              <th className="WidgetLgTh">Customer</th>
              <th className="WidgetLgTh">Date</th>
              <th className="WidgetLgTh">Amount</th>
              <th className="WidgetLgTh">Status</th>
          </tr>
        </thead>
          {transactions.map((transaction) => (
            <tr  key={transaction.id} className="WidgetLgTr">
                <td className='WidgetLgUser'>
                    <img className='WidgetLgUserImg' src={transaction.img} alt="Avatar" />
                    <span className='WidgetLgUsername'>{transaction.customer}</span>
                </td>
                <td className='WidgetLgDate'>{transaction.date}</td>
                <td className="WidgetLgAmount">{transaction.amount}</td>
                <td className="WidgetLgStatus">
                  <Button type={transaction.status} />
                </td>
            </tr>
          ))}
      </table>
    </div>
  )
}
