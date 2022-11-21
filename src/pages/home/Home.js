import { NavLink } from 'react-router-dom'
import './home.scss'

export default function Home(){
    return(
        <>
            <div className='home'>
                <h1>Hello World</h1>
                <NavLink to="login"><button>login</button></NavLink>
            </div>
        </>
    )
}