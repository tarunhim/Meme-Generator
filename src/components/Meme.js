import React from 'react';
import "../App.css";

export default function Meme() {
    let [url,func] = React.useState("https://i.imgflip.com/21tqf4.jpg");
    let [sc,setsc] = React.useState({topText: "", bottomText: ""});
    let [memes,setApiData] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://sample-api-bytarun.herokuapp.com/")
        .then(res => res.json())
        .then(data => setApiData(data.data.memes));
        
    },[]);
    function handleclick() {
        let num = Math.floor(Math.random()*100);
        console.log(memes[num].url);
        func(memes[num].url);
    }
    function contentChange(e) {
        const{name, value} = e.target;
        setsc(prev => {
            return {...prev, [name] : value}
        })
    }
    

    return (
        <main>
            <div
                className="img-container"
                >
                <h2
                className='top-text'
                >{sc.topText}</h2>
                <h2
                className='bottom-text'
                >{sc.bottomText}</h2>  
                <img 
                src={url}
                alt="meme"
                />
                  
                </div>
            <div className='form-container'>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--inputs"
                    onChange={contentChange}
                    name="topText"
                    value={sc.topText}
                    />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--inputs"
                    onChange={contentChange}
                    name="bottomText"
                    value={sc.bottomText}
                    />
                <button 
                    className="form--button"
                    onClick={handleclick}
                    >
                    Get a new meme
                </button>
            </div>
                
            
        </main>
    )
}
