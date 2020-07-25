import React from 'react';
import './Staff.css';
import StaffProfiles from './StaffProfiles'

function Staff() {
  return (
    <div className="Staff">
      <h1>Staff Component</h1>

      <div>
        <p>
          Our teachers are a dedicated group of early childhood educators whose
          level of commitment does not stop at the classroom door.  The teachers'
          will encourage your child to explore and discover new ideas and to
          reach their full potential. Excellent student-teacher ratios ensure
          each child receives individual and caring attention.
        </p>

        <StaffProfiles />
        
      </div>
    </div>
  );
}

export default Staff;