import React from 'react';
import DomainsCourses from '../../pages/DomainsCourses';

export default function CoursesSection({ coursesRef }) {
  return (
    <section ref={coursesRef} className="courses-section">
      <div className="courses-container">
        <DomainsCourses />
      </div>
    </section>
  );
}