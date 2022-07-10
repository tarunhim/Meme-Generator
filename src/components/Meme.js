import React from 'react';
import "../App.css";

export default function Meme() {
    let [res,func] = React.useState("Get a new meme");
    function handleclick() {
        func("do you want another meme");
    }
    
    
    return (
        <main>
            
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--inputs"
                    />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--inputs"
                    />
                <button 
                    className="form--button"
                    onClick={handleclick}
                    >
                    {res}
                    </button>
            
        </main>
    )
}
