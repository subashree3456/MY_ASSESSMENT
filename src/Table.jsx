import React from 'react';
import "./style.css";
import { useState } from 'react';
import { useEffect } from 'react';


function Table({ data }) {

    const [label, setLabels] = useState("");
    const [value, setValue] = useState("");
    const [inputs, setInputs] = useState("");

    const[varience, setVarience] =useState("");

const handleClick = async (e) =>{
    e.preventDefault();
   await setInputs(...inputs , ((inputs + (e.target.value)/100 * inputs)) )
    setInputs("");
}


const handleClick2 = async (e) =>{
    e.preventDefault();  
   await setLabels(value + (setInputs));
    
}


const handleVarience = aysnc (e) => {
    e.preventDefault();
    await setVarience(value - (setInputs)); 
}




useEffect(()=>{
console.log(inputs);
} ,[inputs]);

    return (
        <div className="table-list">
            {
                (data).map((table) => {

                    return (
                        <>
                            <div className="table-container">
                                <input
                                    type='text'
                                    className='table-id'
                                    placeholder='Label'
                                    value={table.id}
                                    onChange={(e) => setLabels(e.target.value)}
                                />

                                <input
                                    type='text'
                                    className='table-specs'
                                    placeholder='value'
                                    value={table.value}
                                    onChange={(e) => setValue(e.target.value)}
                                />

                                <input
                                    type='text'
                                    className='table-specs'
                                    placeholder='Input'
                                    // value={}
                                    onChange={(e) => setInputs(e.target.value)}
                                />

               <button type="submit" placeholder='Allocation%' onClick={handleClick}></button>

               <button type="submit" placeholder='Allocation val' onClick={handleClick2}></button>  

               <input
                                    type='text'
                                    className='table-specs'
                                    placeholder='varience'
                                    // value={}
                                    onChange={(e) => setVarience(e.target.value)}
                                    value={handleVarience}
                                />          

                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Table






