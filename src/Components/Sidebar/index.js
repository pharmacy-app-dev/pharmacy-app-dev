import Brand from './Parts/Brand';
import Menus from './Parts/Menus';
import { FaBeer } from 'react-icons/fa';

const Sidebar = ()=>{
    return (
        <nav className="flex flex-col h-screen  bg-white items-center">
            <Brand/>
            <Menus/>
        </nav>
    );
}

export default Sidebar;