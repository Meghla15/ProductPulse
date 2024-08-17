import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
              {/*navbar  */}
              <Navbar></Navbar>
            {/* outlet */}
            <Outlet></Outlet>
            {/* footer */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;