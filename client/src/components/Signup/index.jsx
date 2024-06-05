import {useState} from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import styles from "./styles.module.css"

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/users"
            const {data: res} = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <h1>Stwórz konto</h1>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Imię"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Nazwisko"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Hasło"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                    />
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.orange_btn}>
                        Zarejestruj się
                    </button>
                </form>
                <div className={styles.login_prompt}>
                    Powracasz?{" "}
                    <Link to="/login" className={styles.login_link}>
                        Zaloguj się
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Signup
