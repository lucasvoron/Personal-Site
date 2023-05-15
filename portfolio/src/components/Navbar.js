import '../App.css';
import recycle from '../assets/recycle.png';
import {Link} from "react-router-dom";

const pages = [
    {
        name: 'Information',
        link: '/',
    },
    {
        name: 'Idea',
        link: '/idea',
    },
    {
        name: 'Tutorial',
        link: '/tutorial',
    },
    {
        name: 'FAQ',
        link: '/faq',
    },
]

function Navbar() {
  return (
    <div className="navbar-content-area">
        <div className="navbar-containers">
            <div className="navbar-page-titles-container">
                {/* <img src={logo} className="company-logo" alt="logo" /> */}
                <Link to='/'> <img src={recycle} className="company-logo" alt="logo"/> </Link>
                <Link to='/' className="navbar-company-logo-text">Waste Management</Link>
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