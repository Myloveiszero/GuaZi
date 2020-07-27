import React from 'react'
import {Link} from 'react-router-dom'
import './DangAn.css'

function DangAn() {

    return (
        <div className="dangan">
                    <div className="dangan-header--wrapper">
                        <span className="dangan-title">车辆档案</span>
                        <Link to="" className="carInfo-link">咨询车辆详细信息</Link>
                    </div>
                    <div className="carInfo-content">
                        <Link to="" className="carInfo-item--title">
                            <span className="carInfo-item--text">空间大</span>
                            <span className="carInfo-item--text">油耗少</span>
                            <span className="carInfo-item--text">动力足</span>
                        </Link>
                        <div className="carInfo-detail--row">
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">表显示里程</span>
                                <span className="detail-num">0.9万公里</span>
                            </div>
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">上牌时间</span>
                                <span className="detail-num">2019-07</span>
                            </div>
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">变速箱</span>
                                <span className="detail-num">自动</span>
                            </div>
                        </div>
                        <div className="carInfo-detail--row">
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">排放量</span>
                                <span className="detail-num">1.8T</span>
                            </div>
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">登记证为准</span>
                                <span className="detail-num">1次过户</span>
                            </div>
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">车源编号</span>
                                <span className="detail-num">95327723</span>
                            </div>
                        </div>
                        <div className="carInfo-detail--row">
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">准入情况</span>
                                <Link to="" className="detail-num--link">查迁入标准</Link>
                            </div>
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">购车方式</span>
                                <Link to="" className="detail-num--link">查购车步骤</Link>
                            </div>
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">车源</span>
                                <Link to="" className="detail-num--link">查车源地</Link>
                            </div>
                        </div>
                        <div >
                            <Link to="" className="dangan-canshu--wrapper">
                                <span className="dangan-canshu--text">查看全部参数配置</span>
                            </Link>
                        </div >
                    </div>
                </div>
    )
}

export default DangAn;