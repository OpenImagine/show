import React from "react";
import { ReactComponent as TopBar } from '../assets/topbar.svg';
import UnifiedNav from "../components/UnifiedNav";
import ScoreBoard from "../components/ScoreBoard";
import AnimatedLogo from "../components/AnimatedLogo";
const RuntimePage: React.FC = () => {
    return (
        <>
            <UnifiedNav />
            <div className="HeaderSafeZone">
                <div className='FlexRowContainer'>
                    <div className='FlexItem'>
                        <div className="BorderedBox">
                            <div className="BorderedBoxContent">
                                <h1 className="BoxHeader">Scoreboard</h1>
                                
                                <ScoreBoard />
                            </div>
                            
                        </div>
                    </div>
                    <div className='FlexItem'>
                        <AnimatedLogo />
                    </div>
                    <div className='FlexItem'>
                        <div className="BorderedBox">
                            <div className="BorderedBoxContent">
                                <h1 className="BoxHeader">Scoreboard</h1>
                                <ScoreBoard />


                            </div>
                    </div>
                </div>

            </div>
            </div>


        </>

    );
}
export default RuntimePage;