import React from 'react';
import {ReactComponent as TopBar} from '../assets/topbar.svg';
const UnifiedNav: React.FC = () => {
    return(
        <div className='TopBar'>
            
            <div className='TopBarFlexContainer'>
                <div className='FlexItem'>
                    <p className='TopBarMinimizedComponent'>@ritsecclub</p>
                </div>
                <div className='FlexItem'>
                    <p className='TopBarCentralTime'>12:34</p>
                </div>
                <div className='FlexItem'>
                    <p className='TopBarMinimizedComponent'>#ImagineRIT</p>
                </div>
            </div>
            
        </div>
    )
}
export default UnifiedNav;