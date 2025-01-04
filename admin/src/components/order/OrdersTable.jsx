import React from 'react';

export const OrdersTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Order ID</th>
                        <th>Items</th>
                        <th>Total Amount (₹)</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="1">
                        <td>1</td>
                        <td>Product One</td>
                        <td>₹500</td>
                        <td>Pending</td>
                        <td className="d-flex gap-2">
                            <button type="button" className="btn btn-link text-primary p-1">Detail View</button>
                            <button type="button" className="btn btn-link text-danger p-1">Delete</button>
                        </td>
                    </tr>
                    <tr key="1">
                        <td>2</td>
                        <td>Product Two</td>
                        <td>₹350</td>
                        <td>Delivered</td>
                        <td className="d-flex gap-2">
                            <button type="button" className="btn btn-link text-primary p-1">Detail View</button>
                            <button type="button" className="btn btn-link text-danger p-1">Delete</button>
                        </td>
                    </tr>
                    <tr key="1">
                        <td>3</td>
                        <td>Product Three</td>
                        <td>₹600</td>
                        <td>Cancelled</td>
                        <td className="d-flex gap-2">
                            <button type="button" className="btn btn-link text-primary p-1">Detail View</button>
                            <button type="button" className="btn btn-link text-danger p-1">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

