import React from "react"
import memesData from "../memesdata.js"


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main className="main">
            <div className="form">
                <input className="form-input" type="text" placeholder="top text" />
                <input className="form-input" type="text" placeholder="bottom text" />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <img className="image" src={memeImage} />
        </main>
    )
}