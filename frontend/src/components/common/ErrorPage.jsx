import React from 'react';

const ErrorPage = ({ title, message, retry, status }) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light p-4">
      <div className="w-100 border border-danger rounded p-4" style={{ maxWidth: '400px' }}>
        <h3 className="text-center text-danger fw-bold">{status} : {title}</h3>
        <h6 className="text-center text-muted">{message}</h6>
        {retry && (
          <div className="mt-4 d-flex justify-content-center">
            <button
              className="btn btn-danger"
              onClick={retry}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;