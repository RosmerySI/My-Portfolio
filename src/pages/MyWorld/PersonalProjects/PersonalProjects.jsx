import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import './personalProjects.scss';

const componentsMap = {
  calc: React.lazy(() => import('./Calc/Calc')),
  games: React.lazy(() => import('./Games/Games')),
  jokes: React.lazy(() => import('./Jokes/Jokes')),
  weather: React.lazy(() => import('./Weather/Weather')),
  travel: React.lazy(() => import('./FamilyTravelTracker/FamilyTravelTracker')),
  bored: React.lazy(() => import('./Bored/Bored')),
  books: React.lazy(() => import('./Library/Library')),
  todos: React.lazy(() => import('./Todos/Todos')),
  movies_series: React.lazy(() => import('./MoviesSeries/MoviesSeries')),
  blog: React.lazy(() => import('./Blog/BlogList')),
  
};

export const PersonalProjects = () => {
  const { project } = useParams();
  const ComponentToRender = componentsMap[project];
  

  return (
    <>     
      <Suspense fallback={<div>Cargando...</div>}>
        {ComponentToRender ? <ComponentToRender /> : <div>Project not found</div>}
      </Suspense>
    </>
  );
};
