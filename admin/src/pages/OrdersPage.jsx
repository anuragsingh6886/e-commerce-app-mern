import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';

export const Orders = () => {
    return (
        <div className="container-fluid mt-5 pt-2">
            <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 vh-100">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Order List</h1>
                </div>
                <div className="row">
                <div className="col-md-8">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Orders</h5>
                        <p className="card-text">Orders list</p>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            </div>
        </div>
    );
};