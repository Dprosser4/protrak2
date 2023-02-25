import React from 'react';

export default function PageContainer({ children }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        {children}
      </div>
    </div>
  );
}
