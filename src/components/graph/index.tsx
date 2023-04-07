import React from 'react';
import Highcharts from 'highcharts';
import HighchartsNetworkGraph from 'highcharts/modules/networkgraph';
import HighchartsReact from 'highcharts-react-official';
import { Network } from 'network';

HighchartsNetworkGraph(Highcharts); // initialize networkgraph module

interface Props{
    network:Network
}
export const Graph = ({network}:Props) => {
    const options = {
        chart: {
          type: 'networkgraph'
        },
        title: {
          text: `${network.name}` 
        },
        plotOptions: {
          networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
              enableSimulation: true,
              friction: -0.1
            }
          }
        },
        series: [{
          dataLabels: {
            enabled: true,
            linkFormat: '{point.label}',
            allowOverlap: true
          },
          data: network.links
        }]
      };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default Graph;