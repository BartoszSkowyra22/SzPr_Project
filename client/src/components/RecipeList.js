// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from'./styles.module.css'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    // const handleGetRecipes = async  => {
    //     e.preventDefault();
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         try {
    //             const config = {
    //                 method: 'get',
    //                 url: 'http://localhost:8080/api/recipes',
    //                 headers: {'Content-Type': 'application/json', 'x-access-token': token}
    //             }
    //             const { data: res } = await axios(config);
    //             setRecipes(res.data.data);
    //             // ustawDane(res.data);
    //             // setUser(null);
    //             // ustawTytul(res.message);
    //         } catch (error) {
    //             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //                 localStorage.removeItem("token");
    //                 window.location.reload();
    //             }
    //         }
    //     }
    // };
    //
    // useEffect(() => {
    //     // const fetchRecipes = async () => {
    //     //     const response = await axios.get('/api/recipes');
    //     //
    //     //     // setRecipes(response.data.data);
    //     // };
    //     handleGetRecipes();
    //     //fetchRecipes();
    // }, []);


    const handleGetRecipes = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/recipes',
                    headers: {'Content-Type': 'application/json', 'x-access-token': token}
                }
                const { data: res } = await axios(config);
                setRecipes(res.data);
                console.log(res.data)
                // ustawDane(res.data);
                // setUser(null);
                // ustawTytul(res.message);
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    localStorage.removeItem("token");
                    window.location.reload();
                }
            }
        }
    };

    useEffect(() => {
        handleGetRecipes();
    }, []);


    return (
        <div>
            <h2>Lista przepisów</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
            {/*<Link to="/recipes/new">Add New Recipe</Link>*/}
        </div>
    );
};

export default RecipeList;
