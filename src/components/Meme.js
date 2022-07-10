import React from 'react';
import "../App.css";

export default function Meme() {
    
    
    
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
                    >
                    Get new memes
                    </button>
            
        </main>
    )
}
