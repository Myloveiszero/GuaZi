import React from 'react'
import {Link} from 'react-router-dom'
import './ShouHou.css'

function ShouHou() {

    return (
        <div className="shouhou">
                    <div className="shouhou-header">
                        <Link to="" className="shouhou-header--link">
                            <div className="shouhou-header--box">
                                <span className="shouhou-header--text1">服务保障</span>
                                <span className="shouhou-header--text2">服务费不超过车价9%，欢迎联系咨询</span>
                            </div>
                            <span className="shouhou-header--text3 "></span>
                        </Link>
                    </div>
                    <div className="shouhou-content">
                        <div className="shouhou-content--box">
                            <ul className="shouhou-content--item">
                                <li>
                                    <Link to="" className="shouhou-item--box">
                                        <img className="shouhou-content--img" src={require("../../../assets/fontImg/baoxiu.png")} />
                                        <p className="shouhou-content--text">30天全面保修</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="shouhou-item--box">
                                        <img className="shouhou-content--img" src={require("../../../assets/fontImg/baozhang.png")} />
                                        <p className="shouhou-content--text">1年或2万公里保障</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="shouhou-item--box">
                                        <img className="shouhou-content--img" src={require("../../../assets/fontImg/zhengbei.png")} />
                                        <p className="shouhou-content--text">专业整备</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="shouhou-item--box">
                                        <img className="shouhou-content--img" src={require("../../../assets/fontImg/guohu.png")} />
                                        <p className="shouhou-content--text">过户服务</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="shouhou-item--box">
                                        <img className="shouhou-content--img" src={require("../../../assets/fontImg/jiance.png")} />
                                        <p className="shouhou-content--text">259项检测</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="shouhou-item--box">
                                        <img className="shouhou-content--img" src={require("../../../assets/fontImg/peifu.png")} />
                                        <p className="shouhou-content--text">调表车赔付</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}

export default ShouHou;