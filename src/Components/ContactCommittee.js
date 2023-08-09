import React, { useState, useEffect } from 'react';

export const ContactCommittee = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9001/admin/members/committee', {
      method: 'GET', // Explicitly specify the GET method
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setCommitteeMembers(data))
      .catch(error => console.error('Error fetching committee members:', error));
  }, []);

  return (
    <div>
      <h2>Committee Members</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
           
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Flat</th>
            <th>Contact Details</th>
            {/* Add more columns here based on your Member entity */}
          </tr>
        </thead>
        <tbody>
          {committeeMembers.map(member => (
            <tr key={member.userId}>
              
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.email}</td>
              <td>{member.flatNo}</td>
              <td>{member.mobileNo}</td>
              {/* Add more columns here based on your Member entity */}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>For any queries feel free to contact us at any time</h2>
      <h3>-committeeMembers </h3>
    </div>
  );
};


