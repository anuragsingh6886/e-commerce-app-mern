import React from 'react';

export const CategoryTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="1">
                        <td>1</td>
                        <td>Category One</td>
                        <td className="d-flex gap-2">
                            <button type="button" className="btn btn-link text-primary p-1">Edit</button>
                            <button type="button" className="btn btn-link text-danger p-1">Delete</button>
                        </td>
                    </tr>
                    <tr key="1">
                        <td>2</td>
                        <td>Category Two</td>
                        <td className="d-flex gap-2">
                            <button type="button" className="btn btn-link text-primary p-1">Edit</button>
                            <button type="button" className="btn btn-link text-danger p-1">Delete</button>
                        </td>
                    </tr>
                    <tr key="1">
                        <td>3</td>
                        <td>Category Three</td>
                        <td className="d-flex gap-2">
                            <button type="button" className="btn btn-link text-primary p-1">Edit</button>
                            <button type="button" className="btn btn-link text-danger p-1">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

