import React from 'react';
import './Filter.css';

function Filter(){

    return(
        <div className="filter">
                <nav className="filter-nav">
                    <a href="" className="nav-item"><span>价格最低</span></a>
                    <a href="" className="nav-item">品牌</a>
                    <a href="" className="nav-item">价格</a>
                    <a href="" className="nav-item">筛选</a>
                </nav>
                <nav className="filter-nav-third">
                    <a href="" className="third-nav-item-icon">严选好车</a>
                    <a href="" className="third-nav-item-icon">全国低价</a>
                    <a href="" className="third-nav-item-icon">准新车</a>
                    <a href="" className="third-nav-item-icon">限时秒强</a>
                </nav>
        </div>
    )
}

export default Filter;
