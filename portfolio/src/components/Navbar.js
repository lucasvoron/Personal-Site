import '../App.css';
import LSV from '../assets/LSV.png';
import {Link} from "react-router-dom";

const pages = [
    {
        name: 'About Me',
        link: '/about',
    },
    {
        name: 'Experience',
        link: '/experience',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
    {
        name: 'Coursework',
        link: '/coursework',
    },
    {
        name: 'Leadership',
        link: '/leadership',
    },
    {
        name: 'Awards',
        link: '/awards',
    },
]

function Navbar() {
  return (
    <div className="navbar-content-area">
        <div className="navbar-containers">
            <div className="navbar-page-titles-container">
                {/* <img src={logo} className="company-logo" alt="logo" /> */}
                <Link to='/'> <img src={LSV} className="company-logo" alt="logo"/> </Link>
                {/* <Link to='/' className="navbar-company-logo-text">UI/UX Engineer</Link> */}
            </div>
            <div className="navbar-page-titles-container">
                {pages.map((item, index)=>{
                    return <Link to={item.link} key={index} className="navbar-page-titles">{item.name}</Link>
                })}
            </div>
        </div>

    </div>
  );
}

export default Navbar;