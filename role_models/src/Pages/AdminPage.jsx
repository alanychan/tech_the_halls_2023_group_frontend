import { useState, useEffect } from "react"
import { Link, useOutletContext } from "react-router-dom"

// Styles
import './HomePage.css';

// Components
import ProfileListCard from "../Components/ProfileListCard/ProfileListCard";
import LoginForm from "../Components/LoginForm/LoginForm";

function AdminPage() {
    const [loggedIn] = useOutletContext();

    //state
    const [usersList, setUsersList] = useState([]);

    // Effects
    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}users`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setUsersList(data);
            }, []);
    }, []);

    console.log(usersList);

    return (
        <>
            {loggedIn ?
                <div className="page-container">
                    <h1 className="">Admin Page</h1>

                    <div className="profiles-admin-list">
                        {usersList.map((users, key) => {
                            return <ProfileListCard key={key} usersData={users} />;
                        })}
                    </div>
                </div>
                : <div className="page-container"><p>Only Admin can view this page. Please <span><a href="/login">log in as Admin</a></span>.</p><LoginForm /></div>} </>
    );
};

export default AdminPage;

// website with stats - https://www.baysidegroup.com.au/employers/women-in-ict-in-statistics-how-does-your-company-stack-up#:~:text=Only%2024%25%20of%20computing%20jobs,experience%20gender%20bias%20at%20work. 