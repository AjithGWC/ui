import React from 'react';
import Header from './header';
import Cards from './cards';
import Charts from './chart1';
import Table from './table';

const index = () => {
    return (
        <div>
          <Header />
          <Cards />
          <Charts />
          <Table />
        </div>
      );
}

export default index;