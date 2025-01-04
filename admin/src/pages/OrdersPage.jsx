import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { OrdersTable } from '../components/order/OrdersTable';

export const Orders = () => {
    return (
        <div className="container-fluid mt-5 pt-2">
            <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 vh-100">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Order List</h1>
                </div>
                <OrdersTable />
            </main>
            </div>
        </div>
    );
};