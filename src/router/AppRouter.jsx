
import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import { LandingPage } from '../pages/LandingPage';
import { MyExperienceRoute } from './MyExperienceRoute';
import { MyWorldRoute } from './MyWorldRoute';
import { ContactMe } from '../pages/ContactMe/ContactMe';


export const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<LandingPage />} />                   
            <Route path="experience/*" element={<MyExperienceRoute />}/>           
            <Route path="world/*" element={<MyWorldRoute />}/>            
            <Route path="contact/*" element={<ContactMe />}/>            
            <Route path="/*" element={<Navigate to="/" />} />    
        </Routes>
    );
};
