import { NavLink } from 'react-router-dom'
import './login.scss'

export default function Login() {
    return(
        <div className='login'>
        <h1>Login Page</h1>
        <NavLink to="/"><button>return home</button></NavLink>
    </div>
    )
}