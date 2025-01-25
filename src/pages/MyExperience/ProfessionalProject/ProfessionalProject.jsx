import { useParams } from 'react-router-dom';
import { Carousel } from '../../../components/Molecules/Carousel/Carousel';
import { projectImagePaths } from '../../../utilities/projectImagePath';
import './professionalProject.scss'

export const ProfessionalProject = () => {

    const { project } = useParams();

    const images = projectImagePaths[project] || {};
    const imagesArray = Object.values(images).map((module) => module.default);
    
    return (
        <section className='carousel'>
            <h1>{project==='venados'?'Venados':project==='ludix'?'Ludix':'MBControl'}</h1>
            <Carousel imagesArray={imagesArray} project={project} />
        </section>
    );
}


