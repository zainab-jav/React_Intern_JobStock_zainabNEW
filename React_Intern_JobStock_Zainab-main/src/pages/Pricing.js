import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import bgImg from "../img/banner-10.jpg"
import PricingCard from '../components/PricingCard'
import Footer from '../sections/Footer';

const Data = [
    {
        plan : 'Basic',
        price : '29',
        festure : 'xyzz',
        features : [
            '1 GB Ram',
            '2 GB Memory',
            '1 Core Processor',
            '32 GB SSD Disk',
            '1 TB Transfer'
        ]
    },
    {
        plan : 'Premium',
        price : '40',
        festure : 'xyzz',
        features : [
            '1 GB Ram',
            '2 GB Memory',
            '1 Core Processor',
            '32 GB SSD Disk',
            '1 TB Transfer'
        ]
    },
    {
        plan : 'Ultimate',
        price : '120',
        festure : 'xyzz',
        features : [
            '1 GB Ram',
            '2 GB Memory',
            '1 Core Processor',
            '32 GB SSD Disk',
            '1 TB Transfer'
        ]
    },
    {
        plan : 'Pro Basic',
        price : '150',
        festure : 'xyzz',
        features : [
            '1 GB Ram',
            '2 GB Memory',
            '1 Core Processor',
            '32 GB SSD Disk',
            '1 TB Transfer'
        ]
    },
    {
        plan : 'Pro Premium',
        price : '180',
        festure : 'xyzz',
        features : [
            '1 GB Ram',
            '2 GB Memory',
            '1 Core Processor',
            '32 GB SSD Disk',
            '1 TB Transfer'
        ]
    },
    {
        plan : 'Pro Ultimate',
        price : '199',
        festure : 'xyzz',
        features : [
            '1 GB Ram',
            '2 GB Memory',
            '1 Core Processor',
            '32 GB SSD Disk',
            '1 TB Transfer'
        ]
    }
]
var active='';

export default function Pricing() {
    return (
        <>  
        <Navbar />
        <Banner title="Our Packages" bgImg={bgImg}/>
            <section className="pricing">
                <div className="container">
                {
                    Data.map((v,i)=>{
                        if(i%2==0){
                            active = 'active'
                        }
                        else{
                            active = ''
                        }
                        return (
                        <PricingCard key={i} active={active} plan={v.plan} price={v.price} features={v.features}/>
                        )
                    })
                }
                    
                </div>
            </section>
            <Footer />
        </>
    )
}