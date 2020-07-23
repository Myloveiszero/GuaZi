import React from 'react';
import './DetailInfo.css';
// import Header from ''

function CarsInfomation() {

    return (
        <section className="detail-page">
            <div className="detail-header-wrapper">
                {/* <Header /> */}
            </div>
            <div className="main-layout">
                <div className="img-show"></div>
                <div className="car-info--box1">
                    <div className="pirce">
                        <div className="pirce-text">
                            <span className="pirce-num">7.60</span>
                            <span className="pirce-text--after"> 性价比分析</span>
                        </div>
                        <span className="yuanjia">原价7.76万|新车含税价11.81万</span>
                        <div className="feiyong-box">
                            <div className="feiyong">
                                <span className="fenqi">
                                    分期再减4100元
                          </span>
                                <span className="butie">
                                    补贴5000元
                          </span>
                            </div>
                            <div className="chakan">
                                <span className="chakan-text">查看</span>
                            </div>
                        </div>
                    </div>
                    <div className="kuanshi">
                        <span className="car-name">纳智捷 优6 SUV 2018款 1.8T 经典天窗版</span>
                        <div className="car-type-box">
                            <span className="car-type">准新车</span>
                        </div>
                    </div>
                    <div className="gouchefangshi">
                        <div> <span className="fenqi-span">分期</span>
                            <span className="shoufu-span">首付一成 0.70 万开回家</span>
                        </div>
                        <span className="right-icon"></span>
                    </div>
                    <div className="fuwu"></div>
                    <div className="zaixianjiangche"></div>
                </div>

                <div className="kongbaihe"></div>
                <div className="miaoqiang"></div>
                <div className="paihangbang"></div>
                <div className="kongbaihe"></div>
                <div className="dangan"></div>
            </div>
        </section>
    )
}

export default CarsInfomation;