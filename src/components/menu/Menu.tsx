import {Link} from "react-router-dom";

const Menu = () => {// відображає список навігаційних посилань
        return (// посилання на сторінки
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login'}>login</Link></li>
                <li><Link to={'/auth/resources'}>auth resources</Link></li>
            </ul>
        </div>
    );
};

export default Menu;