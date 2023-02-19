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

            console.log(data)
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            <figure className='flex flex-col gap-5'>
                {condition === true ? imageDefault : fetchImages}
            </figure>
            <figure className='hidden md:flex flex-col gap-5'>
                {condition === true ? imageDefault : fetchImages}
            </figure>
            <figure className='hidden md:flex flex-col gap-5'>
                {condition === true ? imageDefault : fetchImages}
            </figure>
        </div>
    )
}

export default Main;
