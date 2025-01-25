import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { AboutMyWorld } from '../pages/MyWorld/AboutMyWorld/AboutMyWorld';
import { PersonalProjects } from '../pages/MyWorld/PersonalProjects/PersonalProjects';
import DrawerAppBar from '../components/Molecules/NavBar/DrawerAppBar';
import { Form } from '../pages/MyWorld/PersonalProjects/Form';
import { Footer } from '../components/Molecules/Footer/Footer';

export const MyWorldRoute = () => {
   

    return (
        <>
            <DrawerAppBar />
            <main>
                <Routes>
                    <Route index element={<AboutMyWorld />} />
                    <Route path="personal_projects/:project/*" element={<PersonalProjects />} />
                    <Route path="personal_projects/form/:id/:type" element={<Form />} />                    
                    <Route path="/*" element={<Navigate to="/" />} /> 
                </Routes>
            </main>
            <Footer/>
        </>
    );
};
