import React from "react";
import Color from "../Color/Color";


export default function ColorList( { colors = [], onRemoveColor = f => f, onRateColor = f => f } ) {
    return (
        <div>
            {
                colors.map( color => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/> )
            }
        </div>
    )
}