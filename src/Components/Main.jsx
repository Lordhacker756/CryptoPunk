import React from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import {useState,useEffect} from 'react'


const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    console.log(activePunk.name, "🤤");
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className='selectedPunk' src={activePunk.image_url} alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{ color: 'white' }}>
                    <div className="title">{activePunk.name} <span className="itemNumber"># {activePunk.token_id}</span></div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img className='selectedPunk' src="https://darkfuels.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-11-at-7.05.33-AM.jpeg" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>0x6b05129799BE0c02636B2038b288504D29E24257</div>
                            <div className="ownerHandle">
                                @kaal__rudra
                            </div>
                        </div>
                            <div className="ownerLink"><img src={instagramLogo} alt="" /></div>
                            <div className="ownerLink"><img src={twitterLogo} alt="" /></div>
                            <div className="ownerLink"><img src={moreIcon} alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main
