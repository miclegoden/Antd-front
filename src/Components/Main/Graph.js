import React, { useState, useEffect } from 'react'

import { Line } from '@ant-design/plots'
import './Graph.css'

const DemoLine = () => {
  const data = [
    {
      year: 'Jan',
      value: 50,
    },
    {
      year: 'Feb',
      value: 60,
    },
    {
      year: 'Mar',
      value: 55,
    },
    {
      year: 'Apr',
      value: 70,
    },
    {
      year: 'May',
    },
    {
      year: 'Jun',
    },
    {
      year: 'Jul',
    },
    {
      year: 'Aug',
    },
    {
      year: 'Sep',
    },
    {
      year: 'Oct',
    },
    {
      year: 'Nov',
    },
  ]
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#f00530',
        lineWidth: 1,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 1,
          stroke: '#f00530',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  }
  return <Line {...config} />
}
export default DemoLine
