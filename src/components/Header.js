import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <h1>Redux CRUD</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">Post</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header