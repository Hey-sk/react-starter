import { NavLink } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
    
    const linkstyle = ( {isActive} ) => {
        return {
            textDecoration: (isActive ? 'underline' : 'none')
        }
    }

    return (
        <>
            <div className="navbar">
                <p><NavLink to="/" style={linkstyle}>Home</NavLink></p>
                <p><NavLink to="login" style={linkstyle}>Login</NavLink></p>
                <p><NavLink to="xxx" style={linkstyle}>Error</NavLink></p>
            </div>
        </>
    )
    
}