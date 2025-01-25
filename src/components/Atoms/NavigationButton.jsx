import React from 'react'
import { useNavigate } from 'react-router';
import {
    Thunderstorm as WeatherIcon,
    Flight as TravelIcon,
    Book as LibraryIcon,
    SportsEsports as GamesIcon,
    Calculate as CalculatorIcon,
    ShoppingCart as ShopIcon,
    AttachMoney as FinanceIcon, 
    Movie as MediaIcon , 
    Checklist as TaskIcon, 
    AddReaction as JokeIcon, 
    SentimentVeryDissatisfied   as BoredIcon,    
    Article as BlogIcon, 
   
} from '@mui/icons-material';
import {  GiDeerHead, GiTennisRacket } from "react-icons/gi";
import { SiCoinmarketcap } from "react-icons/si";


export const NavigationButton = ({ course, title }) => {
    
    const navigate = useNavigate()

    const iconMap = {
        Weather: <WeatherIcon style={{ fontSize: 100, color: '#bda27a' }} />,
        Blog: <BlogIcon style={{ fontSize: 100, color: '#dfc7cf' }} />,        
        Bored: <BoredIcon style={{ fontSize: 100, color: '#c3be9b' }} />,
        Jokes: <JokeIcon style={{ fontSize: 100, color: '#e0bfaa' }} />,
        Tasks: <TaskIcon style={{ fontSize: 100, color: '#eed5cd' }} />,
        Media: <MediaIcon style={{ fontSize: 100, color: '#d8d0cf' }} />,
        Finances: <FinanceIcon style={{ fontSize: 100, color: '#d4c4c4' }} />,       
        Travel: <TravelIcon style={{ fontSize: 100, color: '#f89698' }} />,
        Library: <LibraryIcon style={{ fontSize: 100, color: '#c4c48c' }} />,
        Games: <GamesIcon style={{ fontSize: 100, color: '#d4c4c4' }} />,
        Calculator: <CalculatorIcon style={{ fontSize: 100, color: '#f88f91' }} />,
        Shop: <ShopIcon style={{ fontSize: 100, color: '#bda27a' }} />,
        Venados: <GiDeerHead  style={{ fontSize: 100, color: 'gray' }} />,
        MBControl: <SiCoinmarketcap  style={{ fontSize: 100, color: 'gray' }} />,
        Ludix: <GiTennisRacket  style={{ fontSize: 100, color: 'gray' }} />,
       
    };
    const icon = iconMap[title] || null; 

    return (
        <div onClick={() => navigate(course)} style={{margin:'0', cursor: 'pointer',display:'flex',flexDirection:'column',alignItems:'center' }}>
            {icon}
            {title}
        </div>
    )
}
