import React from 'react';
import { TrendingDown, TrendingUp } from 'react-feather';
import Chart from 'react-apexcharts';

const chart2 = () => {
    const options = {
        series: [75, 25],
        chart: {
            type: 'donut',
            height: 50
        },
        colors: ['#fa360f', '#651606'],
        plotOptions: {
            donut: {
                size: '25%',
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 100
                }
            }
        }]
    };

    const radialBarOptions = {
        series: [100],
        chart: {
            height: 50,
            type: 'radialBar',
            offsetY: 0
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: 'transparent'
                },
                track: {
                    background: '#ffffff',
                    strokeWidth: '100%'
                },
                dataLabels: {
                    show: false
                },
            }
        },
        fill: {
            type: 'gradient',
            colors: ['#e2e2e2'],
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
                colors: ['#000']
            }
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['#000000'],
            dashArray: 4
        }
    };

    const radialBarStyle = {
        position: 'absolute',
        top: '513px',
        right: '5.3%'
    };

    const customLabelStyle = {
        position: 'absolute',
        bottom: '6%',
        right: '10.5%',
        color: '#888'
    };
    return (
        <div class="col-span-4">
            <div className='box'>
                <div className='pie-title mt-2'>
                    <h1 className='text-xl'>Cashflow</h1>
                    <h1 className='text-md font-normal u-l'>View more</h1>
                </div>
                <div className='p-4'>
                    <div className='grid grid-cols-12'>
                        <div class="col-span-6">
                            <div className='box'>
                                <div className='flex justify-evenly'>
                                <h1 className='text-xl font-medium flex'>$120.2<TrendingDown className='text-red-600  ml-2 mt-1 w-1/6' /> </h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6">
                            <div className='box'>
                                <div className='flex justify-evenly'>
                                    <h1 className='text-2xl font-medium flex'>$421.021<TrendingUp className='text-green-500 ml-2 mt-1 w-4' /> </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto mt-7 mb-3'>
                    <Chart options={options} series={options.series} type="donut" height={350} ></Chart>
                    <div style={customLabelStyle}>
                        <h1>Current Net Income</h1>
                        <h1 className='text-xl text-black text-center'>$302M</h1>
                    </div>
                    <Chart style={radialBarStyle} options={radialBarOptions} series={radialBarOptions.series} type="radialBar" height={280} />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default chart2;