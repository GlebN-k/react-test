import React, { useState } from "react";
import { FaStar } from "react-icons/fa"


const createArray = length => [...Array(length)]

const Star = ({ selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    // onClick={(i) => onRate}
)

export default function StarRaiting({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
    // const [selectedStars, setSelectedStars] = useState(1)
    return (
        <div>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i+1)}/>
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}


