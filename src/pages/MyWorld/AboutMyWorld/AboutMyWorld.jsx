import React from 'react';
import { ProjectsComponent } from '../../../components/Molecules/ProjectsComponent/ProjectsComponent';
import personalPicture from '../../../assets/images/personalPicture.jpg'
import description from '../../../assets/description/description.json'
import { personalCourses } from '../../../utilities/variables'
import { Card } from '../../../components/Molecules/Card/Card';
import '../../../components/Molecules/Card/card.scss'

export const AboutMyWorld = () => {

  const self_information = [{
    id: 1,
    title: 'Creative Girl',
    src: personalPicture,
    notes: description.personalDescription,
    type: 'self_information'
  }]

  return (
    <>
      <h1> My World </h1>
      <div className='card-container-world'>
      <Card title={''} items={self_information} />
      </div>
      <ProjectsComponent courses={personalCourses} />

    </>
  );
};
