import React, {Fragment,  useEffect, useState} from 'react';

const Dashboard = ({setAuth}) => {

    const [name, setName] = useState("");

    const getName = async () => {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers : {token: localStorage.token}
            });

            const parseRes = await response.json();

            setName(parseRes.user_name);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getName();
    },[])

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    return (
        <Fragment>
            <h1>Dashboard {name}</h1>
            <button className="btn btn-danger" onClick= {e => logout(e)}>Logout</button>
            
        </Fragment>
    )
}

export default Dashboard;