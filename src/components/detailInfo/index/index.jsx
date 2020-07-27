import React from 'react';
import Header from '../header/Header'
import ImgShow from '../imgShow/ImgShow'
import CarBaseInfor from '../carBaseInfor/CarBaseInfor'
import BlankBox from '../../../common/kongBaiHe/BlankBox'
import ChuXiao from '../chuXiao/ChuXiao'
import DangAn from '../dangAn/DangAn'
import ShouHou from '../shouHou/ShouHou'
import GouCheFuWu from '../gouCheFuWu/GouCheFuWu'
import XuanCheZhiNan from '../xuanGouZhiNan/XuanGouZhiNan'
import './index.css'

function DetailInformation() {
    return (
        <section className="detail-page">
            <Header />
            <div className="main-layout">
                <ImgShow />
                <CarBaseInfor />
                <BlankBox />
                <ChuXiao />
                <BlankBox />
                <DangAn />
                <BlankBox />
                <ShouHou />
                <BlankBox />
                <GouCheFuWu />
                <BlankBox />
                <XuanCheZhiNan />
                <BlankBox />
            </div>
        </section>
    )
}

export default DetailInformation;
