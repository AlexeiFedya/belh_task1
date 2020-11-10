import React from 'react'

import AdvantagesCompany from './advantages-company/advantages-company'
import DescriptionCompany from './description-company/description-company'
import ReviewCompany from './review-company/review-company'
import CallCenterCompany from './callcenter-company/callcenter-company'
import YandMap from './yand-map/yand-map'

import earth from './earth_k.png'

import './main.css'

const Main = () => {
    return (
        <div style={{position: 'relative'}}>
            <div className='gradient'>
            <DescriptionCompany/>

            <img src={earth} alt='earth' className='earth-img' />

            <AdvantagesCompany/>
            </div>

            {/* <div>
                <ReviewCompany/>
            </div> */}
            <CallCenterCompany/>
            <div>
                <YandMap/>
            </div>
        </div>
    )
}

export default Main;