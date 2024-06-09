import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({ budgetList }) {
  return (
    <div className='border rounded-lg p-5'>
      <h2 className='font-bold text-lg'>Activity</h2>
      <ResponsiveContainer width={'80%'} height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 7
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='totalSpend' stackId="a" fill='#183D3D' />
          <Bar dataKey='amount' stackId="a" fill='#93B1A6' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartDashboard

