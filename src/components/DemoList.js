import React from 'react';

const DemoList = ({ demoData }) => {
  return (
    <div className='container mt-4'>
      <h1 className='mb-4'>Demo Data</h1>

      {Array.isArray(demoData) && demoData.length > 0 ? (
        <table className='table table-bordered table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>     
            </tr>
          </thead>
          <tbody>
            {demoData.map((demo, index) => (
              <tr key={index}>
                <td>{demo.name}</td>
                <td>{demo.email}</td>
                <td>
                  <button type='button' className='btn btn-sm btn-primary me-2'>Edit</button>
                  <button type='button' className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className='text-danger'>No record found...</h4>
      )}
    </div>
  );
};

export default DemoList;
