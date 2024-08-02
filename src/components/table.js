import React from 'react';
import Chart from 'react-apexcharts';

const table = () => {
    const options = {
        series: [25],
        chart: {
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '30%',
                },
                track: {
                    strokeWidth: '80%',
                },
                dataLabels: {
                    show: false,
                    name: {
                        show: true,
                        fontSize: '10px',
                    },
                    value: {
                        show: true,
                        fontSize: '10px',
                    }
                },
            },
        },
        fill: {
            colors: ['#ff9c30'],
        },
    };

    const option = {
        series: [15],
        chart: {
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '30%',
                },
                track: {
                    strokeWidth: '80%',
                },
                dataLabels: {
                    show: false,
                    name: {
                        show: true,
                        fontSize: '10px',
                    },
                    value: {
                        show: true,
                        fontSize: '10px',
                    }
                },
            },
        },
        fill: {
            colors: ['#ff9c30'],
        },
    };

    const month = {
        series: [85],
        chart: {
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '30%',
                },
                track: {
                    strokeWidth: '80%',
                },
                dataLabels: {
                    show: false,
                    name: {
                        show: true,
                        fontSize: '10px',
                    },
                    value: {
                        show: true,
                        fontSize: '10px',
                    }
                },
            },
        },
        fill: {
            colors: ['#ff9c30'],
        },
    };

    const chart = {
        width: '45%'
    }
    return (
        <div className='box mt-6'>
            <div className='flex justify-between px-3'>
                <h1 className='text-xl mt-1'>List of transactions</h1>
                <div class="bg-activegray border-md">
                    <div class="relative right-0">
                        <ul class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60">
                            <li class="z-30 flex-auto text-center m-0 ">
                                <h1 class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
                                    <span class="mx-5">Days</span>
                                </h1>
                            </li>
                            <li class="z-30 flex-auto text-center m-0">
                                <h1 class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit bg-white px-1">
                                    <span class="mx-4 font-bold">Month</span>
                                </h1>
                            </li>
                            <li class="z-30 flex-auto text-center m-0">
                                <h1 class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
                                    <span class="mx-5">Years</span>
                                </h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right border">
                        <thead class="text-xs text-gray-700 uppercase bg-activegray dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID TRANSACTIONS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DATE OF INVESTMENT
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    AMOUNT OF INVESTMENTS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    PERCENT INVESTMENTS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    TENDOR INVESTMENTS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    PROGRESS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:border-gray-300">
                                <td class="px-6 py-4 font-bold whitespace-nowrap">
                                    #124322
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    12 August
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    $123.212,121
                                </td>
                                <td class="px-6 py-4 font-bold">
                                %32
                                </td>
                                <td>
                                    <div className='flex'>
                                        <Chart style={chart} options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
                                        <h1 className='mt-5 font-bold'>12 Month</h1>
                                    </div>
                                </td>
                                <td>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200">
                                    <div class="bg-orange-500 h-1.5 rounded-full w-10/12"></div>
                                </div>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:border-gray-300">
                                <td class="px-6 py-4 font-bold whitespace-nowrap">
                                    #124322
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    12 August
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    $123.212,121
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    %32
                                </td>
                                <td>
                                    <div className='flex'>
                                        <Chart style={chart} options={option} series={option.series} type={option.chart.type} height={option.chart.height} />
                                        <h1 className='mt-5 font-bold'>3 Years</h1>
                                    </div>
                                </td>
                                <td>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200">
                                        <div class="bg-red-500 h-1.5 rounded-full w-1/5"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="px-6 py-4 font-bold whitespace-nowrap">
                                    #124322
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    12 August
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    $123.212,121
                                </td>
                                <td class="px-6 py-4 font-bold">
                                    %32
                                </td>
                                <td>
                                    <div className='flex'>
                                        <Chart style={chart} options={month} series={month.series} type={month.chart.type} height={month.chart.height} />
                                        <h1 className='mt-5 font-bold'>12 Month</h1>
                                    </div>
                                </td>
                                <td>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200">
                                        <div class="bg-emerald-400 h-1.5 rounded-full w-11/12"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default table;