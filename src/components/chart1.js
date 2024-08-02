import React from 'react';
import { TrendingDown, TrendingUp } from 'react-feather';
import Chart from 'react-apexcharts';
import Chart2 from './chart2';

const charts = () => {
    
    const seriesData = [
        65, 80, 88, 62, 64, 63, 75, 64, 65, 67, 69,80
    ];
    const labelsData = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 
        'Nov', 'Dec'
    ];

    const options = {
        series: [{
            data: seriesData
        }],
        colors: ['#fa5a3d'],
        fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: 'vertical',
              shadeIntensity: 0.5,
              gradientToColors: ['#fff'],
              inverseColors: false,
              opacityFrom: 0.8,
              opacityTo: 0.4,
              stops: [0, 100]
            }
        },
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        grid: {
            show: false
        },
        yaxis: {
            min: 0,
            tickAmount: 5,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        labels: labelsData,
        xaxis: {
            type: 'month',
        },
        legend: {
            horizontalAlign: 'left'
        }
    };
    return (
        <div className='container mt-5'>
            <div className='grid grid-cols-12 gap-2'>
                <div class="col-span-8">
                    <div className='box px-2'>
                        <div className='grid grid-cols-12 gap-2 w-full'>
                            <div class="col-span-8">
                                <h1 className='text-xl mt-2'>Amount of Balance</h1>
                            </div>
                            <div className='col-span-4'>
                                <div class="bg-activegray border-md">
                                    <div class="relative right-0">
                                        <ul class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60">
                                            <li class="z-30 flex-auto text-center m-0 ">
                                                <h1 class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
                                                    <span class="ml-1">Days</span>
                                                </h1>
                                            </li>
                                            <li class="z-30 flex-auto text-center m-0">
                                                <h1 class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit bg-white px-1">
                                                    <span class="ml-1 font-bold">Month</span>
                                                </h1>
                                            </li>
                                            <li class="z-30 flex-auto text-center m-0">
                                                <h1 class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
                                                    <span class="ml-1">Years</span>
                                                </h1>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-2 mt-6'>
                            <div class="col-span-8">
                                <h1 className='text-4xl mt-1'>$73.231,000</h1>
                            </div>
                            <div className='col-span-4 mt-2'>
                                <div className='flex ml-3'>
                                    <h1 className='text-lg'>$120.2</h1>
                                    <TrendingDown className='text-red-600 trending' /> 
                                    <h1 className='dot'>.</h1> 
                                    <h1 className='text-lg ml-5'>$421.021</h1>
                                    <TrendingUp className='text-green-400 trending' />
                                </div>
                            </div>
                        </div>
                        <div id="chart h-18">
                            <Chart options={options} series={options.series} type="area" height={350} />
                        </div>
                    </div>
                </div>
                <Chart2 />
            </div>
        </div>
    );
}

export default charts;