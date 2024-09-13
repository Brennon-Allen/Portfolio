import { useState } from "react"
import ResumeSnip from '../assets/ResumeSnip.jpeg'

export default function Resume(){

    const [isPopoutVisible, setIsPopoutVisible] = useState(false);

    const handleClick = () => {
      setIsPopoutVisible(!isPopoutVisible)
    }

    return (
        <div className="resume">
            <h1>Resume</h1>
            <div className="resume--text"><div>
                <img src={ResumeSnip} className="resume--snip"/>
                    <button className="view--button" onClick={handleClick}>View Full Resume</button>
                {isPopoutVisible && <div className="popout">Pop-out content</div>}
            </div>
            </div>
        </div>
    )
}
