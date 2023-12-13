import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary bg-info-subtle container-fluid position-absolute top-0 start-50 translate-middle-x">
            <nav className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to='/'>Indie Stage &#127897;</Link>
                {/* <Link to='/reglogin'>Register/Log In</Link> */}
                <Link className="nav-link active" to='/indie/home'>All Concerts</Link>
            </nav>
        </div>
    )
}
