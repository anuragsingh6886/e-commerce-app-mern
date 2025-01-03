import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div class="d-flex align-items-center justify-content-center bg-light">
      <div class="container p-4 max-w-md bg-white rounded shadow text-center">
        <div class="mb-4">
          <h1 class="display-1 fw-bold text-dark mb-2">404</h1>
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Page not found"
            class="w-50 mx-auto mb-3"
          />
          <h2 class="h4 fw-semibold text-secondary mb-3">Page Not Found</h2>
          <p class="text-muted">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
          </p>
        </div>

        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <button
            onClick={() => navigate(-1)}
            class="btn btn-light btn-outline-light d-flex align-items-center text-dark justify-content-center"
          >
            <ArrowLeft className="p-1" />
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            class="btn btn-dark  d-flex align-items-center justify-content-center"
          >
            <HomeIcon className="p-1" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;