import React from "react";
import './navbar.css'

const Navbar = ({setData}) => {

    const getUserData = async () => {
        const data = await fetch('https://reqres.in/api/users?page=1')
        const jsonData = await data.json();
        // console.log(jsonData.data);
        setData(jsonData.data)
    }
    return (
        <div className="navbar">
            <div className="company">
                <img src="logo.png" alt="Company logo" />
                <div className="company-name">AB Company</div>
            </div>
            <div className="data-button">
                <button onClick={getUserData}>Get Users</button>
            </div>
        </div>
    );
};

export default Navbar;
