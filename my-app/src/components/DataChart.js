import React from 'react';
import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DataChart = ({data}) => {

  return React.createElement(Doughnut, { data: data });
};
DataChart.propTypes = {
data:PropTypes.array
    }
export default DataChart;