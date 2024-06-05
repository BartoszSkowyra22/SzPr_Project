import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from "./Main/styles.module.css";

const Recipe = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const handleGetRecipe = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const config = {
                    method: 'get',
                    url: `http://localhost:8080/api/recipes/${id}`,
                    headers: {'Content-Type': 'application/json', 'x-access-token': token}
                }
                const { data: res } = await axios(config);
                setRecipe(res.data);
                // ustawDane(res.data);
                // setUser(null);
                // ustawTytul(res.message);
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    //localStorage.removeItem("token");
                    window.location.reload();
                }
            }
        }
    }

    const handleDelete = async () => {
        const token = localStorage.getItem("token");
            if (token) {
                var windowChecked = window.confirm("Czy na pewno chcesz usunąć?");
                if (windowChecked) {
                    try {
                        const config = {
                            method: 'delete',
                            url: `http://localhost:8080/api/recipes/${id}`,
                            headers: {'Content-Type': 'application/json', 'x-access-token': token}
                        }
                        await axios(config);
                        navigate('/');
                    } catch (error) {
                        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                            // localStorage.removeItem("token");
                            window.location.reload();
                        }
                    }
                }
            }
        // try {
        //     const response = await axios.delete(`http://localhost:8080/api/recipes/${recipe._id}`);
        //     console.log(response);
        //     navigate('/');
        // } catch (error) {
        //     console.error('Error deleting recipe:', error.response || error.message);
        // }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        // window.location.reload();
        navigate("/login");
    };

    useEffect(() => {
        handleGetRecipe();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { hour: '2-digit', minute: '2-digit' };
        const time = date.toLocaleTimeString('pl-PL', options);
        const formattedDate = date.toLocaleDateString('pl-PL').replace(/\//g, '.');
        return `${time} ${formattedDate}`;
    };

    // console.log(recipe);
    // console.log(recipe.id);



    if (!recipe) return <div>Loading...</div>;
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>MySite</h1>
                {/*<button className={styles.white_btn} onClick={handleGetUsers}>*/}
                {/*    Użytkownicy*/}
                {/*</button>*/}
                {/*<button className={styles.white_btn} onClick={handleGetAccountDetails}>*/}
                {/*    Szczegóły konta*/}
                {/*</button>*/}
                {/*<button className={styles.white_btn} onClick={handleDeleteUser}>*/}
                {/*    Usuń konto*/}
                {/*</button>*/}
                <Link to="/" className={styles.white_btn}>Lista przepisów</Link>
                <Link to="/addrecipe" className={styles.white_btn}>Nowy przepis</Link>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{formatDate(recipe.createdAt)}</p>
            <Link to={`/recipes/${recipe._id}/edit`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Recipe;


// // src/components/AddRecipe.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useHistory } from 'react-router-dom';
//
// const AddRecipe = () => {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);
//     const history = useHistory();
//
//     useEffect(() => {
//         const fetchRecipe = async () => {
//             const response = await axios.get(`/api/recipes/${id}`);
//             setRecipe(response.data.data);
//         };
//         fetchRecipe();
//     }, [id]);
//
//     const handleDelete = async () => {
//         await axios.delete(`/api/recipes/${id}`);
//         history.push('/recipes');
//     };
//
//     if (!recipe) return <div>Loading...</div>;
//
//     return (
//         <div>
//             <h2>{recipe.title}</h2>
//             <p>{recipe.ingredients}</p>
//             <p>{recipe.instructions}</p>
//             <Link to={`/recipes/edit/${id}`}>Edit</Link>
//             <button onClick={handleDelete}>Delete</button>
//         </div>
//     );
// };
//
// export default AddRecipe;
