import React, { useState } from "react";
import { FaStar } from "react-icons/fa"


const createArray = length => [...Array(length)]

const Star = ({ selected = false, pres }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={pres}/>
)

export default function StarRaiting({ totalStars = 5, selectedStars = 0 }) {
    // const [selectedStars, setSelectedStars] = useState(1)
    return (
        <div>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}


