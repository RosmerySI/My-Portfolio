import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import DrawerAppBar from '../components/Molecules/NavBar/DrawerAppBar';
import { AboutMyExperience } from '../pages/MyExperience/AboutMyExperience/AboutMyExperience';
import { ProfessionalProject } from '../pages/MyExperience/ProfessionalProject/ProfessionalProject';
import { Footer } from '../components/Molecules/Footer/Footer';


export const MyExperienceRoute = () => {
    return (
        <>
            <DrawerAppBar />
            <main>
                <Routes>
                    <Route index element={<AboutMyExperience />} />
                    <Route path="professional_projects/:project" element={<ProfessionalProject />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <Footer/>
        </>
    );
};
