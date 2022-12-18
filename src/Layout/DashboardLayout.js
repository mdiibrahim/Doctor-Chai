import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 mt-16'>
                <ul className="menu p-4 w-full direction-row  text-primary lg:col-span-1 lg:direction-col bg-base-100  mt-9 rounded-lg">
                    <li><Link to="/dashboard">My Appointments</Link></li>

                    {
                        isAdmin && <>
                            <li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                            <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                        </>
                    }





                </ul>
                <div className='lg:col-span-3 w-full'>
                    <Outlet></Outlet>
                </div >
            </div>
           
        </div>
    );
};

export default DashboardLayout;