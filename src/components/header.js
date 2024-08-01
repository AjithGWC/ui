import React from 'react';
import { Search, Command } from 'react-feather';

const header = () => {
    return (
        <div class="container mt-2">
            <div class="grid grid-cols-12 gap-2">
                <div class="col-span-5">
                    <h1 className='header-title'>Dashboard</h1>
                </div>
                <div class="col-span-4">
                    <div className="search">
                        <Search className='search-icon' />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-12 gap-3">
                        <div className='col-span-6 ml-auto'>
                            <select>
                                <option>Month</option>
                                <option>Quarter</option>
                                <option>Half Year</option>
                                <option>Year</option>
                            </select>
                        </div>
                        <div className='col-span-6'>
                            <button className='money'>
                                Move Money
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default header;