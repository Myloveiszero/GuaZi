import React from 'react';
import './DetailInfo.css';
// import Header from ''

function CarsInfomation() {

return (
<section className="detail-page">
    <div className="detail-header-wrapper">
        {/*<Header /> */}
    </div>
    <div className="main-layout">
        <div className="img-show">
            <div className="pic-count">
                <div className="pic-num">1/35</div>
            </div>
        </div>
        <div className="car-info--box1">
            <div className="pirce">
                <div className="pirce-text">
                    <span className="pirce-num">7.60</span>
                    <span className="pirce-text--after"> 性价比分析</span>
                </div>
                <span className="yuanjia">原价7.76万|新车含税价11.81万</span>
                <a href="" className="feiyong-box">
                    <div  className="feiyong">
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
                </a>
            </div>
            <div className="kuanshi">
                <span className="car-name">纳智捷 优6 SUV 2018款 1.8T 经典天窗版</span>
                <div className="car-type-box">
                    <span className="car-type">准新车</span>
                </div>
            </div>
            <a href="" className="gouchefangshi">
                <div> <span className="fenqi-span">分期</span>
                    <span className="shoufu-span">首付一成 0.70 万开回家</span>
                </div>
                <span className="right-icon"></span>
            </a>
            <a href="" className="fuwu">
                <div>
                    <span className="fuwu-text">服务</span>
                    <span className="fuwu-type1">30天全面保修</span>
                    <span className="fuwu-type2">1年或2万公里保障</span>
                </div>
                <span className="right-icon"></span>
            </a>
            <a href="" className="zaixianjiangche">
                    <div>
                        <span className="iconfont icon-zhibo"></span>
                        <span className="jiangche-text1">在线讲车</span>
                        <span className="jiangche-text2">语音咨询车况优惠</span>
                    </div>  
                    <span className="jiangche-button">开启讲车</span>          
            </a>
        </div>
        <div className="kongbaihe"></div>
        <a href="" className="chuxiao">
            <div>
                <span className="iconfont icon-iconfontcuxiao"></span>
                <span className="chuxiao-text1">月末好车惠</span>
            </div>
            <div>
                <span className="chuxiao-text2">服务费最高直降4000元</span>
                <span id="right-icon"></span>
            </div>
        </a>
        <div className="kongbaihe"></div>
        <div className="dangan"></div>
    </div>
</section>
)
}

export default CarsInfomation;