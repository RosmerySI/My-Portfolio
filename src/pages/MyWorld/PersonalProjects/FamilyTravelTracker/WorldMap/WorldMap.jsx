import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldMap from '../../../../../assets/mapData/world-110m.json';
import flowers from "../../../../../assets/images/flowers.png"

const worldFeatures = feature(worldMap, worldMap.objects.countries).features;

const WorldMap = ({ visitedCountries }) => {
    

    return (
        <ComposableMap projection="geoEqualEarth" width={1298} height={450} style={{backgroundColor:'#feeff0',
            overflow:'auto',borderWidth: '10px', borderStyle: 'solid', borderImage: `url(${flowers}) 150 repeat`            
        }}>
            <Geographies geography={worldFeatures}>
                {({ geographies }) =>
                    geographies.map((geo) => {
                        const countryName = geo.properties.name; 
                        const isVisited = visitedCountries[countryName]; 
                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: isVisited || '#ECEFF1', 
                                        stroke: '#607D8B',
                                        strokeWidth: 0.5,
                                    },
                                    hover: {
                                        fill: '#CFD8DC',
                                    },
                                    pressed: {
                                        
                                        fill: '#CFD8DC',
                                    },
                                }}
                            />
                        );
                    })
                }
            </Geographies>
        </ComposableMap>
    );
};

export default WorldMap;
