import React from 'react';
import { ProjectsComponent } from '../../../components/Molecules/ProjectsComponent/ProjectsComponent';
import { EducationCertifications } from '../../../components/Molecules/EducationCertifications/EducationCertifications';
import Skills from '../../../components/Molecules/Skills/Skills';

import { professionalCourses } from '../../../utilities/variables'
import professionalPicture from '../../../assets/images/professionalPicture.jpg';
import description from '../../../assets/description/description.json';
import { Card } from '../../../components/Molecules/Card/Card';

export const AboutMyExperience = () => {
  
  const self_information = [{
    id: 1,
    title: 'Front-end Developer',
    src: professionalPicture,
    notes: description.professionalDescription,
    type: 'self_information'
  }]

  return (
    <>
      <h1> My Experience </h1>
      <div className='card-container-experience' >
      <Card title={''} items={self_information} /> 
      </div>      
      <EducationCertifications />
      <Skills />
      <ProjectsComponent courses={professionalCourses} />
    </>

  );
};
