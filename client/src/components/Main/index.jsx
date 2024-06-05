
import styles from "./styles.module.css";
import { useState } from "react";
//import axios from "axios";
// import { Routes, Route, Link } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
// import Users from "../users";
// import AccountDetails from "../accountDetails";
import RecipeList from "../RecipeList";
// import AddRecipe from "../AddRecipe";
// import Recipe from "../Recipe";
// import RecipeForm from "../RecipeForm";

const categories = ['Śniadanie', 'Zupa', 'Obiad', 'Kolacja', 'Deser'];

const Main = () => {
    const navigate = useNavigate();
    // const [dane, ustawDane] = useState([]);
    // const [myUser, setUser] = useState(null);
    // const [tytul, ustawTytul] = useState("");
    //const [recipeTitle, setRecipeTitle] = useState("");
    const [data, setData] = useState({
        name: "",
        category: "",
        ingredients: "",
        instructions: "",
    })

    // const handleGetUsers = async (e) => {
    //     e.preventDefault();
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         try {
    //             const config = {
    //                 method: 'get',
    //                 url: 'http://localhost:8080/api/users',
    //                 headers: {'Content-Type': 'application/json', 'x-access-token': token}
    //             }
    //             const { data: res } = await axios(config);
    //             ustawDane(res.data);
    //             setUser(null);
    //             ustawTytul(res.message);
    //         } catch (error) {
    //             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //                 localStorage.removeItem("token");
    //                 window.location.reload();
    //             }
    //         }
    //     }
    // };
    //
    // const handleGetAccountDetails = async (e) => {
    //     e.preventDefault();
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         try {
    //             const config = {
    //                 method: 'get',
    //                 url: 'http://localhost:8080/api/users/myUser',
    //                 headers: {'Content-Type': 'application/json', 'x-access-token': token}
    //             }
    //             const { data: res } = await axios(config);
    //             setUser(res.data);
    //             ustawDane([]);
    //             ustawTytul(res.message);
    //         } catch (error) {
    //             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //                 localStorage.removeItem("token");
    //                 window.location.reload();
    //             }
    //         }
    //     }
    // };

    // const handleDeleteUser = async () => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         var windowChecked = window.confirm("Czy na pewno chcesz usunąć?");
    //         if (windowChecked) {
    //             try {
    //                 const config = {
    //                     method: 'get',
    //                     url: 'http://localhost:8080/api/users/delete',
    //                     headers: {'Content-Type': 'application/json', 'x-access-token': token}
    //                 }
    //                 await axios(config);
    //                 localStorage.removeItem("token");
    //                 window.location.reload();
    //             } catch (error) {
    //                 if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //                     localStorage.removeItem("token");
    //                     window.location.reload();
    //                 }
    //             }
    //         }
    //     }
    // };

    const handleLogout = () => {
        localStorage.removeItem("token");
        // window.location.reload();
        navigate("/login");
    };


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
                <Link to="/addrecipe" className={styles.white_btn}>Nowy przepis</Link>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Wyloguj
                </button>
            </nav>
            {/*<select name="category" value={data.category} onChange={handleChange} required className={styles.input}>*/}
            {/*    <option value="">Wybierz kategorię</option>*/}
            {/*    {categories.map(category => (*/}
            {/*        <option key={category} value={category}>{category}</option>*/}
            {/*    ))}*/}
            {/*</select>*/}
            {/*{tytul !== "" ? <h1>{tytul}</h1> : <p></p>}*/}
            {/*{dane.length>0 ? <Users users={dane} /> : <p></p>}*/}
            {/*{myUser != null ? <AccountDetails user={myUser}/> : <p></p>}*/}
            <RecipeList/>

            {/*{dane.length>0 ? <RecipeList users={dane} /> : <p></p>}*/}

            {/*<Routes>*/}
            {/*    <Route path="/recipes" element={<AddRecipe />} />*/}
            {/*    <Route path="/recipes/new" element={<RecipeForm />} />*/}
            {/*    <Route path="/recipes/edit/:id" element={<RecipeForm />} />*/}
            {/*    <Route path="/recipes/:id" element={<Recipe />} />*/}
            {/*</Routes>*/}
        </div>
    );
};

export default Main;


// import styles from "./styles.module.css"
// import {useState} from "react";
// import axios from "axios";
// import Users from "../users";
// import AccountDetails from "../accountDetails";
//
// const Main = () => {
//     const [dane, ustawDane] = useState([])
//     const [myUser, setUser] = useState(null)
//     const [tytul, ustawTytul] = useState("")
//
//     const handleGetUsers = async (e) => {
//         e.preventDefault()
//         //pobierz token z localStorage:
//         const token = localStorage.getItem("token")
// //jeśli jest token w localStorage to:
//         if (token) {
//             try {
// //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
//                 const config = {
//                     method: 'get',
//                     url: 'http://localhost:8080/api/users',
//                     headers: {'Content-Type': 'application/json', 'x-access-token': token}
//                 }
// //wysłanie żądania o dane:
//                 const {data: res} = await axios(config)
// //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
// //z serwera – jeśli został poprawnie zweryfikowany token
//                 ustawDane(res.data) // `res.data` - zawiera sparsowane dane – listę
//                 setUser(null)
//                 ustawTytul(res.message)
//                 console.log("TEST")
//             } catch (error) {
//                 if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                     localStorage.removeItem("token")
//                     window.location.reload()
//                     console.log("Powinno przeładować")
//                 }
//             }
//         }
//     }
//
//     const handleGetAccountDetails = async (e) => {
//         e.preventDefault()
//         //pobierz token z localStorage:
//         const token = localStorage.getItem("token")
// //jeśli jest token w localStorage to:
//         if (token) {
//             try {
// //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
//                 const config = {
//                     method: 'get',
//                     url: 'http://localhost:8080/api/users/myUser',
//                     headers: {'Content-Type': 'application/json', 'x-access-token': token}
//                 }
// //wysłanie żądania o dane:
//                 const {data: res} = await axios(config)
// //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
// //z serwera – jeśli został poprawnie zweryfikowany token
//                 setUser(res.data) // `res.data` - zawiera sparsowane dane – listę
//                 ustawDane([])
//                 ustawTytul(res.message)
//             } catch (error) {
//                 if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                     localStorage.removeItem("token")
//                     window.location.reload()
//                 }
//             }
//         }
//     }
//
//     const handleDeleteUser = async () => {
//         //pobierz token z localStorage:
//         const token = localStorage.getItem("token")
// //jeśli jest token w localStorage to:
//         if (token) {
//             var windowChecked = window.confirm("Czy na pewno chcesz usunąć?")
//             if (windowChecked) {
//                 try {
// //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
//                     const config = {
//                         method: 'get',
//                         url: 'http://localhost:8080/api/users/delete',
//                         headers: {'Content-Type': 'application/json', 'x-access-token': token}
//                     }
//                     await axios(config)
//                     localStorage.removeItem("token")
//                     window.location.reload()
//
//                 } catch (error) {
//                     if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                         localStorage.removeItem("token")
//                         window.location.reload()
//                     }
//                 }
//             }
//         }
//     }
//
//
//     const handleLogout = () => {
//         localStorage.removeItem("token")
//         window.location.reload()
//     }
//     return (
//         <div className={styles.main_container}>
//             <nav className={styles.navbar}>
//                 <h1>MySite</h1>
//                 <button className={styles.white_btn} onClick={handleGetUsers}>
//                     Użytkownicy
//                 </button>
//                 <button className={styles.white_btn} onClick={handleGetAccountDetails}>
//                     Szczegóły konta
//                 </button>
//                 <button className={styles.white_btn} onClick={handleDeleteUser}>
//                     Usuń konto
//                 </button>
//                 <button className={styles.white_btn} onClick={handleLogout}>
//                     Logout
//                 </button>
//             </nav>
//             {tytul !== "" ? <h1>{tytul}</h1> : <p></p>}
//             {dane.length > 0 ? <Users users={dane}/> : <p></p>}
//             {myUser != null ? <AccountDetails user={myUser}/> : <p></p>}
//         </div>
//     )
// }
// export default Main