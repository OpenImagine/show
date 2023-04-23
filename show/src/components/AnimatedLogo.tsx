import React from "react"
const AnimatedLogo: React.FC = () => {
    
    return(
        <video id={"anim-icon"} width={800} height={800} className="AnimatedLogo" src="/assets/animations/Search.mp4" autoPlay = {true} muted={true} />
    )
}

export default AnimatedLogo;