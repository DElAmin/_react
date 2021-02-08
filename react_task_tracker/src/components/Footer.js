import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {/* <a href="/about">About</a> */}
            <Link to="/about">Go Back</Link>
        </footer>
    )
}

export default Footer
