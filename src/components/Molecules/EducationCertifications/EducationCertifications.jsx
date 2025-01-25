import React from 'react';
import { List } from '../../Atoms/List';
import './educationCertification.scss';
import { education, certifications } from '../../../utilities/variables';

export const EducationCertifications = () => {
  return (
    <section className="education-certifications-section">
      <h2>Education & Certifications</h2>
      <div className="education-certifications-container">
        <div className="education-card">
          <List title={'Education'} items={education} />
        </div>
        <div className="certifications-card">
          <List title={'Certifications'} items={certifications} />
        </div>
      </div>
    </section>
  );
};
