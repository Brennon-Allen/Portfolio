import { useState } from "react"
import ResumeSnip from '../assets/ResumeSnip.jpeg'

export default function Resume(){

    // const [isPopoutVisible, setIsPopoutVisible] = useState(false)

    // const handleClick = () => {
    //   setIsPopoutVisible(!isPopoutVisible)
    // }

    const handleDownload = () => {
      // URL of the resume file
      const resumeUrl = 'src/assets/09-14-24 Brennon Allen Tech sume.pdf'
      
      // Creating an anchor element and triggering download
      const link = document.createElement('a')
      link.href = resumeUrl
      link.download = 'Tech Resume.pdf' // Name of the file to be downloaded
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    return (
        <div className="resume">
            <h1>Resume</h1>
            <img src={ResumeSnip} className="resume--snip"/>
            {/* <div className="black--tint"></div> */}
            <button className="view--button" onClick={handleDownload}>Download Full Resume</button>
            {/* {isPopoutVisible && <div className="popout">
                    
                    Pop-out content
                </div>} */}
        </div>
    )
}
