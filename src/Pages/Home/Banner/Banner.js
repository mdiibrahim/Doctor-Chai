import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero" style={{
            background: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your Dentist Here!</h1>
                    <p className="py-6">Find your doctor easily with a minimum of effort. We've kept everything organised for you. Just Click & take consultation for your teeth.</p>
                    <Link to='/appointment'><PrimaryButton >Getting Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;