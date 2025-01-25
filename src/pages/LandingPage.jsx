import React from 'react';
import { NavigationButton } from '../components/Atoms/NavigationButton';
import './landingPage.scss'


export const LandingPage = () => {

  return (
    <section className='landingPage'>
      <div className='landingPageContainer'>
        <h1 className='titleStyle' >The Web Site of Rosmery Salazar Irarragorri</h1>
        <div className='buttonsContainer'>
          <div className='buttonWorld'>
            <NavigationButton course={'world'} title={'My World'} />
          </div>
          <div className='buttonExperience'>
            <NavigationButton course={'experience'} title={'My Experience'} />
          </div>
        </div>
      </div>
    </section>
  );
};
