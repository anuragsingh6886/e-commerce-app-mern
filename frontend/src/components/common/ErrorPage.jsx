import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const ErrorPage = ({ title, message, retry, status }) => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-light vh-100">
      <div className="container p-4 max-w-md bg-white rounded shadow text-center">
        <div className="mb-4">
          <h1 className="display-1 fw-bold text-dark mb-2">{status}</h1>
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt={title}
            className="w-50 mx-auto mb-3"
          />
          <h2 className="h4 fw-semibold text-secondary mb-3">{title}</h2>
          <p className="text-muted">{message}</p>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          {retry ? (
            <button
              onClick={retry}
              className="btn btn-danger d-flex align-items-center justify-content-center"
            >
              Retry
            </button>
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="btn btn-light btn-outline-light d-flex align-items-center text-dark justify-content-center"
            >
              <ArrowLeft className="p-1" />
              Go Back
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            className="btn btn-dark d-flex align-items-center justify-content-center"
          >
            <HomeIcon className="p-1" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;