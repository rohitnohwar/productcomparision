import React, { useEffect, useState } from 'react';
import randomColor from "randomcolor";
import ReactApexChart from 'react-apexcharts'
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Charts.css'

function Charts(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };

    const [products, setProducts] = useState([])
    const [chartData, setData] = useState([])
    const [areaChart, setAreaChart] = useState([])
    const [areaOptions, setAreaOptions] = useState({})

    function getProductInfo() {
        axios.get('/productinfo').then((response)=>{
            let products = response.data

            let axisX = {}
            let tempLabels = []
            
            products?.map((product, index) => {
                tempLabels.push(product.productId)
                Object.keys(product.data).map((year, index) => {
                    axisX[year] = true
                });
            });

         
 
            axisX = Object.keys(axisX).sort()

            let datasets = []
            let areaData = []

            products?.map((product, index) => {
                let data = []
                axisX?.map((year, index) => {
                    data?.push(product.data[year] ? product.data[year] : 0)
                });
                let color = randomColor()
                let config = {
                    label: product.productId,
                    backgroundColor: color,
                    borderColor: color
                }
                config.data = data
                datasets.push(config)

                let areaConfig = {
                    name:product.productId,
                }
                areaConfig.data = data
                console.log(areaConfig)
                areaData.push(areaConfig)
                
            });
            console.log(areaData)

            setData({
                labels:axisX,
                datasets: datasets
            })

            setAreaChart(areaData)


            setAreaOptions({
                chart: {
                    height: 350,
                    type: 'area'
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth'
                  },
                  xaxis: {
                    type: 'string',
                    categories: axisX
                  },
                  tooltip: {
                    x: {
                      format: 'string'
                    },
                },
            })

        })
    }


    useEffect(() => {
        getProductInfo()
    },[])

    return ( 
        <div className='charts'>
            <div className='charts-card' style={{marginRight:'5%'}}>{
                chartData.labels && chartData.datasets && options && <Line options={options} data={chartData} />
            }</div>
            <div className='charts-card'>
            {areaOptions && <ReactApexChart options={areaOptions} series={areaChart} type="area" height={350} />}
            </div>
        </div>
    );
}

export default Charts