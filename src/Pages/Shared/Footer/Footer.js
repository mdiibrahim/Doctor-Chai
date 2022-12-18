import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';
import logo from '../../../assets/images/logo.jpg';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
        className="p-10 shadow">
            <div className="footer footer-center p-10   rounded ">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='' className="link link-hover">About us</Link>
                        <Link to='/appointment' className="link link-hover">Appoinment</Link>
                        <Link to="" className="link link-hover">FAQs</Link>
                        <Link to='/' className="link link-hover">Home</Link>
                    </div>
                    <div>
                    <img className='w-32 -mt-5 mb-4' alt="" src={logo} />
                        <p className="font-bold">
                        Doctor Chai - ডাক্তার চাই?
                            <br />Take Treatment, Easy Way
                        </p>
                    </div>
                    <div>
                        <p>Copyright © 2022 - All right reserved by Doctor Chai - ডাক্তার চাই? Ltd.</p>
                    </div>
                </div>
        </footer>
        
    );
};

export default Footer;


