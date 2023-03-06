import React from 'react';
import './compareBox.css';

const CompareBox = ({heading}) => {
    return (
        <div className='compareBox'>
            <label for="fruit-select">{heading}</label>
            <div className='input'>
                <select id="fruit-select" style={{border:"none",borderBottom:"2px solid white"}}>
                <option value="apple"> Equal </option>
                <option value="apple"> &lt;= </option>
                <option value="banana">&gt;=</option>
                <option value="orange">&lt;</option>
                <option value="pear">&gt;</option>
            </select>
            <input type="text" style={{border:"none",borderBottom:"2px solid white"}}>
            </input>
            </div>
            
        </div>
    )
}

export default CompareBox;