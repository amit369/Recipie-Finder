import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant.js';

const NavBar = () => {
    return (
        <div>
            <Menu borderless fixed='top'>
                <Menu.Item>
                    <img src={logo} alt="logo"  style={{ width : 150 }}/>
                </Menu.Item>
                     <Menu.Item name="Home" />
                     <Menu.Item name="Recipies" />
            </Menu>
        </div>
    )
}

export default NavBar;