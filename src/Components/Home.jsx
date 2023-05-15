import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ShowAllCoffee from './ShowAllCoffee';

const Home = () => {
    const coffees = useLoaderData()
    return (
        <div className='m-20'>
           <h1 className='text-center'> Our populer Product </h1>
           <div className='w-full mx-auto border'>
           <Link to='/addcoffee'>
           <button className="btn gap-2">
                  Add coffee
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
           </Link>
           </div>
           <div className='grid md:grid-cols-2 gap-4'>
             {
               coffees.map(coffee=> <ShowAllCoffee key={coffee._id} coffee={coffee}></ShowAllCoffee>)
             }
           </div>
        </div>
    );
};

export default Home;