import {NavLink} from 'react-router-dom';

import { RiDashboardLine } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import { IoIosInformationCircleOutline } from "react-icons/io";

const iconSize = 30;
const styleIcon = "text-current group-hover:text-pink";

const Menu = (Props) => {
    return (
        <NavLink exact activeClassName="text-pink" to={Props.link} className="group text-gray-400 flex items-center flex-col justify-center p-5 mb-2">
            <div className="mb-1">{Props.icon}</div>
            <div className="text-xs text-current group-hover:text-pink font-semibold">
                {Props.title}
            </div>
        </NavLink>
    );
};

const Menus = () => {
    return (
        <section>
            <Menu
                link="/"
                icon={<RiDashboardLine className={styleIcon} size={iconSize} />}
                title="Dashboard"
            />
            <Menu
                link="/drugs"
                icon={<GiMedicines className={styleIcon} size={iconSize} />}
                title="Drugs"
            />
            <Menu
                link="/info"
                icon={
                    <IoIosInformationCircleOutline
                        className={styleIcon}
                        size={iconSize}
                    />
                }
                title="Info"
            />
        </section>
    );
};

export default Menus;
