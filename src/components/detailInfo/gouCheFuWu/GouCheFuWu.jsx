import React from 'react'
import './GouCheFuWu.css'

function GouCheFuWu() {

    return (
        <div className="gouchefuwu">
        <div className="gouchefuwu-header">
            <span className="gouchefuwu-content--title">购车服务</span>
        </div>
        <div className="gouchefuwu-content">
            <div className="gouchefuwu-content--wuliu">
                <span className="gouchefuwu-wuliu--title">瓜子物流</span>
                <h3 className="gouchefuwu-wuliu--text">车辆将由
                    <span className="gouchefuwu-wuliu--from">华东仓</span>
                    运往
                    <span className="gouchefuwu-wuliu--to">南昌</span>
                </h3>
            </div>
            <div className="gouchefuwu-content--liuchen">
                <span className="gouchefuwu-liuchen--title">流程服务</span>
                <span className="gouchefuwu-liuchen--item">在线看车</span>
                <span className="gouchefuwu-liuchen--item">专人上门</span>
                <span className="gouchefuwu-liuchen--item">确定意向</span>
                <span className="gouchefuwu-liuchen--item">验车过户</span>
            </div>
            <div className="gouchefuwu-content--rengong">
                <div className="gouchefuwu-rengong--box">
                <div className="gouchefuwu-rengong--img"></div>
                <h3 className="gouchefuwu-rengong--text">顾问上门 为您一站式服务</h3>
                </div>
                <span className="right-icon"></span>
            </div>
        </div>
    </div>
    )
}

export default GouCheFuWu;