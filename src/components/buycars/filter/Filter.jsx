import React from 'react';
import './Filter.css';

function Filter(){

    return(
        <div className="filter">
                <div className="filter-nav">
                    <a href="" className="nav-item order">
                        <span>价格最低</span>
                    </a>
                    <a href="" className="nav-item brand">
                        <span>品牌</span
                    ></a>
                    <a href="" className="nav-item price">
                        <span>价格</span>
                    </a>
                    <a href="" className="nav-item option">
                        <span>筛选</span>
                    </a>
                </div>
                <div className="filter-nav-third">
                    <a href="" className="third-nav-item-icon">严选好车</a>
                    <a href="" className="third-nav-item-icon">全国低价</a>
                    <a href="" className="third-nav-item-icon">准新车</a>
                    <a href="" className="third-nav-item-icon">限时秒强</a>
                </div>
        </div>
    )
}

export default Filter;
