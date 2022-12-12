import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainDetails from './MainDetails';

const Main = ({result, condition}) => {
    const [ image, setImage ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await axios.get('https://api.unsplash.com/photos/?client_id=PD9uom2P9LqgNcAy9WOzfsu3epvIqzKSdT8BeIwTXGA');
            const data = await response.data;

            setImage(data);
        };

        fetchAPI();
    }, [])

    const imageDefault = image.map((img) => (
        <span  className='relative'>
            <img className='w-full h-full' src={img.urls.small} alt="images for you" />
            <MainDetails user={img.user.name} location={img.user.location} profile={img.user.profile_image} download={img.links.download}/>
        </span>
    ))


    const fetchImages = result.map((res) => (
        <>
            <span className='relative' key={result.id}>
                <img className='w-full h-full' src={res.urls.small} alt="images for you" />
                <MainDetails user={res.user.name} location={res.user.location} profile={res.user.profile_image} download={res.links.download}/>
            </span> 
        </>
    ))

    console.log(result.length)

    return (
        <div>
            <figure className='xs:grid-cols-1 xs:px-4 xs:mt-0 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20 py-4 mt-10 grid items-start gap-4'>
                {condition === true ? imageDefault : fetchImages}
            </figure>
        </div>
    )
}

export default Main;
