import Logo from ".././assets/Logo";
import { FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";
import { Avatar, WrapItem, Wrap, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import "../header.css"

const Navbar = () => {
   
    return <div className="header">
        <Logo />
        <div className="header-center">
            <input type="text" name="" id="" />
            <FaSearch className="search" />
        </div>
        <div className="header-right">
            <p>login</p>
            <GrLanguage className="language" />
            <MdExpandMore className="expand" />
            <Wrap style={{cursor:"pointer"}}>
                <WrapItem>
                    <Avatar size='sm' name='Dan Abrahmov' src="https://bit.ly/tioluwani-kolawole" />
                </WrapItem>
            </Wrap>
        </div>
    </div>
    
}

export default Navbar;
