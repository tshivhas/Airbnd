import { useState } from "react";
import "../assets/banner.css"
import { Button, position, Stack } from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Search from "./Search";
import Login from "./Login";

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    return <div className="banner">
        <div className="banner-search">
            {showSearch &&  <Search/>}
            <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='cyan'  onClick={() => setShowSearch(!showSearch)} className="banner-searchButton" style={{ width: "100vw", height: "28px" }}>
                    {showSearch ? "Hide" : "Search Date"}
                </Button>
            </Stack>
        </div>
        <div className="banner-info">
            <h1>Get out and stretch your imagination</h1>
            <h5>plan a different gateway to uncover the hidden gems near you</h5>
            <Button colorScheme='teal' variant='outline' >
                Explore nearby
            </Button>
        </div>
    </div>
}

export default Banner;