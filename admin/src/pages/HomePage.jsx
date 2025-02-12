import React from 'react';
import { Sidebar } from '../components/layout/Sidebar.jsx';
import { useProducts } from '../hooks/useProducts';


export const HomePage = () => {

    const { productCount, categoryCount, loading, error } = useProducts();

    return (
        <div className="container-fluid mt-5 pt-2">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 vh-100">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 pb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Products</h5>
                            <p className="card-text fs-2">
                                {loading ? 'Loading...' : error ? '0' : productCount}
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 pb-3">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Total Orders</h5>
                        <p className="card-text fs-2">45</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 pb-3">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Categories</h5>
                        <p className="card-text fs-2">{loading ? 'Loading...' : error ? '0' : categoryCount}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
