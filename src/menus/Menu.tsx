import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;