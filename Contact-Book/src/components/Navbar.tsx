import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <div>Contact Book</div>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar