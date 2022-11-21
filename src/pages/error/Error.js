import { NavLink } from "react-router-dom"
import './error.scss'

export default function Error() {
    return (
        <>
            <div className='error'>
                <h1>Page Not Found</h1>
                <NavLink to="/"><button>return home</button></NavLink>
            </div>
        </>
    )
}