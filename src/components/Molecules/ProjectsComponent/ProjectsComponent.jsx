import React from 'react';
import { NavigationButton } from '../../Atoms/NavigationButton';
import './projectsComponent.scss'

export const ProjectsComponent = ({ courses,title }) => {
   
    return (
        <section className='projectsComponent-container'>
            <h2 style={{textAlign:'center',margin:'0',fontSize:'28px',  fontFamily: "Great Vibes"}}>My Projects</h2>
            <section className='projectsComponentButtons'>
                {
                    courses.map((course) => (
                        <NavigationButton key={course.id} course={course.course} title={course.title} />        
                    ))
                }

            </section>
        </section>
    );
};
