import React from 'react';

function getData() {
  // This function is used to get data from the server
}

const ErrorPage = ({
  title = 'Something went wrong',
  message = message,
  retry = getData(),
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-red-500">{title}</h1>
        <p className="text-center text-gray-500">{message}</p>
        {retry && (
            <div className="mt-4 flex justify-center">
                <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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