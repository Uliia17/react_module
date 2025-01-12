import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                    <Link to={'/a'}>a page</Link>
                    <Link to={'/b'}>b page</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;