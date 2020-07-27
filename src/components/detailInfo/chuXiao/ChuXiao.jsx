import React from 'react'
import {Link} from 'react-router-dom'
import './ChuXiao.css'

function ChuXiao() {

    return (
        <>
        <Link to="" className="chuxiao">
                    <div>
                        <span className="iconfont icon-iconfontcuxiao"></span>
                        <span className="chuxiao-text1">月末好车惠</span>
                    </div>
                    <div>
                        <span className="chuxiao-text2">服务费最高直降4000元</span>
                        <span id="right-icon"></span>
                    </div>
                </Link>
        </>
    )
}

export default ChuXiao;