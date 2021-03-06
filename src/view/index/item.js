import React from 'react'
import { withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux'
import styled from 'styled-components';
import 'styles/app.styl';


const RecommendedItem = styled.div`
        justify-content:space-between;
        width:3.78rem;
        height:5.64rem;
        // border:1px solid #000;
        background-image:url(${require('../../assets/images/recommendBk.png')});
        background-size:100% 100%;
        border-radius:6px;
        // border:1px solid #E2E2E2;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        &:hover{
            box-shadow:0 0 5px #F4E8DE;
        }
        `;
const RecommendSplitDownTitle = styled.div`
        font-size:0.2rem;
        color:#454950;
        `;
const RecommendSplitDownTurn = styled.div`
        font-size:0.8rem;
        color:#C6AB92;
        `;
const RecommendSplitDownDate = styled.div`
        font-size:0.15rem;
        color:#ADA29B;
        `;
const RecommendSplitDownKnow = styled.div`
        display:inline-block;
        font-size:0.14rem;
        background:#C6AB92;
        color:#fff;
        width:1.8rem;
        height:0.59rem;
        line-height:0.59rem;
        text-align:center;
        border-radius:0.3rem;
        margin-top:0.33rem;
        cursor:pointer;
        &:hover{
            background-color:#B08F70;
        }
        `;

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.toDetail = this.toDetail.bind(this)
    }
    componentDidMount = () => {

    }
    toDetail(e) {
        let id = e.currentTarget.getAttribute('data-id')
        window.localStorage.setItem("id", id)
        this.props.history.push('/detail')
    }
    render() {
        const { item } = this.props
        //判断类型
        let project = null
        if (item.project_type === 1) { // 基金
            project = item.fund
        } else if (item.project_type === 2) {// 房地产
            project = item.real_estate
        } else if (item.project_type === 3) {// 商业地产
            project = item.commercial_estate
        } else if (item.project_type === 4) {// 保险
            project = item.insurance
        }
        return (
            <RecommendedItem className={this.props.center ? 'itemCenter' : ''}>
                    <div className="recommendSplitUp"></div>
                    <div className="recommendSplitDown">
                        <RecommendSplitDownTitle>{item.project_name}</RecommendSplitDownTitle>
                        <RecommendSplitDownTurn>{project.estimate_yearly_return}</RecommendSplitDownTurn>
                        <RecommendSplitDownDate>七日年化收益率</RecommendSplitDownDate>
                    <RecommendSplitDownKnow data-item={JSON.stringify(item)} data-id={item.project_id} onClick={this.toDetail}>了解详情</RecommendSplitDownKnow>
                    </div>
                </RecommendedItem>
        )
    }
}

export default withRouter(Item)