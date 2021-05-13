import React from 'react';
import icon1 from '../../images/safe.svg'
import icon2 from '../../images/file.svg'
import icon3 from '../../images/invest.svg'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesP, ServicesCard, ServicesIcon} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>We have top of the line security packaged into all of our products.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>Improve Workflow</ServicesH2>
                    <ServicesP>We help your buisness reach and exceed it's efficiancy goals.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Maximize profits</ServicesH2>
                    <ServicesP>by incorperating the latest software and techniques. Your profits will skyrocket.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
