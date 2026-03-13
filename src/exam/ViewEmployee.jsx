import React, { useState, useEffect } from 'react';


export default function ViewEmpoyee() {
  const [employees, setEmployees] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employeeRegistrations')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDelete = (employeeId) => {
    if (window.confirm(`Are you sure you want to delete employee with ID ${employeeId}? This action cannot be undone.`)) {
      const updatedEmployees = employees.filter(employee => employee.id !== employeeId);
      setEmployees(updatedEmployees);
      localStorage.setItem('employeeRegistrations', JSON.stringify(updatedEmployees));
      setDeleteMessage(`Employee with ID ${employeeId} has been deleted successfully.`);
      setTimeout(() => setDeleteMessage(''), 3000);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Manage Employees</h2>
      {deleteMessage && (
        <div style={{
          color: '#28a745',
          marginBottom: '15px',
          padding: '10px',
          backgroundColor: '#d4edda',
          borderRadius: '4px',
          border: '1px solid #c3e6cb'
        }}>
          {deleteMessage}
        </div>
      )}

      {employees.length === 0 ? (
        <p style={{ fontSize: '16px', color: '#666' }}>No employees registered yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderRadius: '4px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>ID</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Student Name</th>
                
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Contact No</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Location</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Registered At</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #dee2e6', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  <td style={{ padding: '12px' }}>{employee.id}</td>
                  <td style={{ padding: '12px' }}>{employee.fullName}</td>
                 
                  <td style={{ padding: '12px' }}>{employee.email}</td>
                  <td style={{ padding: '12px' }}>{employee.contactNo}</td>
                  <td style={{ padding: '12px' }}>{employee.location}</td>
                  <td style={{ padding: '12px', fontSize: '12px', color: '#666' }}>{employee.registeredAt}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
