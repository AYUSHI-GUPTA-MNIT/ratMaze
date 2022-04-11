import React from 'react'

function Cellr({row, col}) {
    return (
        < div className="square" id={`${row}-${col}`}>
            <img src="./mouse.jpeg" className="rat"/>
        </div>
    )
}

export default Cellr