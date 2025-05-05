import React, { useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { IoMdPeople } from "react-icons/io";
import "../assets/search.css";
import { Button, Wrap, WrapItem, Stack } from '@chakra-ui/react'

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    return (
        <>
            <div className="search-date">
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
                <h2>
                    Number of guests  <IoMdPeople className="peopleIcon" />
                </h2>
                <input min={0} defaultValue={2} type="number" />

                <Wrap spacing={4}>
                    <WrapItem>
                        <Button className="btn" colorScheme='red' borderRadius={0} w={334}>Search AirBnb</Button>
                    </WrapItem>
                </Wrap>

            </div>
        </>
    );
};

export default Search;