import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'styles/app.styl';

const Div = styled.div`
        max-width:70%;
        // max-width:12rem;
        background:url(${require('../../assets/images/list.png')}) no-repeat 100% 100%;
        height:3.7rem;
        display:flex;
        margin:0 auto;
        border:0.5px solid #eee;
        padding:0.5rem;
        margin-bottom:30px;
        &:hover{
            box-shadow:0 0 20px #E4D4C6;
        }
        `;
const Title = styled.div`
        color:#3D3A35;
        font-size:0.3rem;
        margin-bottom:0.3rem;
        `;
const Rate = styled.div`
        color:#FF4E32;
        font-size:0.28rem;
        `;
const RateDetail = styled.div`
        margin-right:40px;
        `;
const RateTag = styled.div`
        margin-right:20px;
        padding:5px 10px;
        background-color:rgba(198,171,146,0.2);
        `;

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount = () => {

    }
    toDetail(e){
        this.props.history.push('/detail')
        let item = e.currentTarget.getAttribute('data-item')
        window.localStorage.setItem("item", item)
    }
    render() {
        // 基金 FUND = 1
        // 房地产 REAL_ESTATE = 2
        // 商业地产 COMMERICAL_ESTATE = 3
        // 保险 INSURANCE = 4
        const { item } = this.props
        //tags区分开
        let arrTag = item.tags.split('#')
        let allTag=arrTag.map((value,index) => <RateTag key={index}>{value}</RateTag>)
        //判断类型
        let project=null
        if (item.project_type === 1) { // 基金
            project = item.fund
        } else if (item.project_type === 2) {// 房地产
            project = item.real_estate
        } else if (item.project_type === 3) {// 商业地产
            project = item.commercial_estate
        } else if (item.project_type === 4) {// 保险
            project = item.insurance
        }
        //判断前面对应的key值
        let threeLine1, threeLine2, threeLine3, threeLineValue1, threeLineValue2, threeLineValue3
        switch (item.project_type) {
            case 1:
                threeLine1 = '成立以来收益率';
                threeLine2 = '递增金额';
                threeLine3 = '基金期限';
                threeLineValue1 = project.seven_day_return;
                threeLineValue2 = project.step_amount;
                threeLineValue3 = project.invest_range;
                break;
            case 2:
                threeLine1 = '房产类型';
                threeLine2 = '卧室数量';
                threeLine3 = '使用面积';
                if (project.property_type ==='house'){
                    threeLineValue1 ='独栋别墅'
                } else if (project.property_type === 'apartmenet'){
                    threeLineValue1 = '公寓'
                } else if (project.property_type === 'townhouse') {
                    threeLineValue1 = '联排别墅'
                } else if (project.property_type === 'multi-family house') {
                    threeLineValue1 = '多户住宅'
                }
                threeLineValue2 = project.bedrooms;
                threeLineValue3 = project.sqft;
                break;
            case 3:
                threeLine1 = '项目总价';
                threeLine2 = '起投金额';
                threeLine3 = '收益周期';
                threeLineValue1 = project.total_price;
                threeLineValue2 = project.min_amount;
                threeLineValue3 = project.invest_range;
                break;
            case 4:
                threeLine1 = '投资门槛';
                threeLine2 = '缴费期限';
                threeLine3 = '投保年龄';
                threeLineValue1 = project.min_amount;
                threeLineValue2 = project.invest_range;
                threeLineValue3 = project.age_range;
                break;
            default:
                break;
        }
        return (
            <div style={{ backgroundColor: '#fff' }} data-item={JSON.stringify(item)} onClick={this.toDetail.bind(this)}>
                <Div>
                    <div style={{ width: '7.63rem', paddingLeft: '0.37rem', borderRight:'1px solid #E2E2E2'}}>
                        <Title>{item.project_name}</Title>
                        <div style={{ display: 'flex',alignItems:'center', color: '#3D3A35', fontSize: '0.24rem', marginBottom:'0.6rem'}}>
                            <div style={{marginRight:'20px'}}>预估年华回报率 :</div>
                            <Rate>{project.estimate_yearly_return}</Rate>
                        </div>
                        <div style={{ display: 'flex', color: '#ADA29B', fontSize: '0.2rem', marginBottom:'0.3rem'}}>
                            <RateDetail>{threeLine1} : {threeLineValue1}</RateDetail>
                            <RateDetail>{threeLine2} : {threeLineValue2}</RateDetail>
                            <RateDetail>{threeLine3} : {threeLineValue3}</RateDetail>
                        </div>
                        <div style={{ display: 'flex', color: '#C6AB92', fontSize: '0.2rem', marginBottom:'0.3rem'}}>
                            {allTag}
                        </div>
                    </div>
                </Div>
            </div>
        )
    }
}

export default withRouter(Item)