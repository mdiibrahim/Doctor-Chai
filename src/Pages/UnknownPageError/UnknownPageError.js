import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/images/404.jpg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const UnknownPageError = () => {
    return (
        <div>
            <div className="card card-compact sm:w-1/2 w-3/4 mx-auto my-40">
                <figure><img src={error} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Sorrryyyy!</h2>
                    <p className='text-lg'>The page cannot found.</p>
                    <div className="card-actions justify-end">
                        <Link to='/'><PrimaryButton>Go Home</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnknownPageError;