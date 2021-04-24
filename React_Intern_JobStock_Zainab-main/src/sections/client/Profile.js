import React from 'react';

import Banner from '../../components/Banner'
import ClientProfile from '../../components/client/ClientProfile'

import bannerImg from "../../img/banner-10.jpg";
import Img from "../../img/can-2.png";

import ClientData from '../../data/client/Data'


export default function Profile() {
    return (
        <>
            {/* <Banner /> */}
            <Banner bgImg={bannerImg} title="Employer Profilee" />

            <ClientProfile
                img={Img}
                name={ClientData[0].name}
                designation={ClientData[0].designation}
                post={ClientData[0].jobPost}
                like={ClientData[0].Liked}
                share={ClientData[0].jobShared}
                online={ClientData[0].online} />
        </>
    )
}