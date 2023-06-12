import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ color: isActive ? '#ECD444' : 'black'});

const PageWrapper = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/anotherpage" style={styles}>Another Page</NavLink>
            </nav>
        </header>
        <Outlet />
    </>
};

export default PageWrapper;