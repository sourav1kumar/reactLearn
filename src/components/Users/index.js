import React from "react";
import Card from "../Card";
import './user.css'

const Users = ({ datas }) => {
    // console.log("users", datas);
    // const {datas} = props
    return (
        <div className="users-grid">
            {datas &&
                datas.map((data) => {
                    // console.log(data);
                    return <Card {...data} />;
                })}
        </div>
    );
};

export default Users;
