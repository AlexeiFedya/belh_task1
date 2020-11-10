import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center: [53.88092057067276,27.493037999999974],
    zoom: 13,
};

const coordinates = [
    [53.88092057067276,27.493037999999974]
];

const YandMap = () => {
    return (
        <div className='container-fluid px-0'>
<YMaps>
            <Map defaultState={mapData} width={'100%'}>
                {coordinates.map((coordinate, index) => <Placemark key={index} geometry={coordinate} />)}
            </Map>
        </YMaps>
        </div>
        
    )
}

export default YandMap;