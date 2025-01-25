import React from 'react';
import './contact.scss';
import { SocialMedia } from '../../components/Molecules/SocialMedia/SocialMedia';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DrawerAppBar from '../../components/Molecules/NavBar/DrawerAppBar';
import { Footer } from '../../components/Molecules/Footer/Footer';


export const ContactMe = () => {

  return (
    <>
      <DrawerAppBar />
      <section className='contact-container'>
        <div className='contact'>
        <h2 style={{fontFamily:'Great Vibes'}}>Contact Me </h2>
        <SocialMedia
          url={'mailto:rosmery.salazar0507@gmail.com'}
          icon={<ContactMailIcon style={{ fontSize: 100, color: 'rgb(248, 143, 145)' }} />}
          contact={'rosmery.salazar0507@gmail.com'}
        />
        <SocialMedia
          url={'https://wa.me/+5213326492584'}
          icon={<WhatsAppIcon style={{ fontSize: 100, color: 'rgb(196, 196, 140)' }} />}
          contact={'+523326492584'}
        />
        <SocialMedia
          url={'https://linkedin.com/in/rosmery-salazar-irarragorri'}
          icon={<LinkedInIcon style={{ fontSize: 100, color: 'rgb(132, 174, 202)' }} />}
        />
        </div>
      </section>
      <Footer/>
    </>
  );
};
