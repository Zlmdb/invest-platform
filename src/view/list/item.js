import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import styled from 'styled-components';
import {Button} from 'antd';
import { fetchFollow } from 'api/follow';
import { fetchUnFollow } from 'api/unfollow';
import { baseUrl } from '../../api/baseUrl'
import 'styles/list.styl';

const Div = styled.div`
        max-width:70%;
        background-image:url(${require('../../assets/images/list.png')});
        background-size:cover;
        background-repeat:no-repeat;
        height:3.7rem;
        display:flex;
        margin:0 auto;
        border-bottom:0.5px solid #eee;
        padding:0.5rem;
        margin-bottom:30px;
        &:hover{
            box-shadow:0 0 5px #F4E8DE;
        }
        `;
const Title = styled.div`
        color:#3D3A35;
        font-size:0.3rem;
        margin-bottom:0.3rem;
        cursor:pointer;
        &:hover{
            color:#906D4D;
        }
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
class CancelAppoint extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            content: '取消预约'
        }
        this.cancelButton = this.cancelButton.bind(this)
    }
    //我的预约页的取消预约
    cancelButton(e) {
        let mobile = window.localStorage.getItem('mobile')
        let id = e.currentTarget.getAttribute('data-id')
        console.log(id)
        this.props.appointCancelButton(mobile,id)
    }
    render(){
    return (
        <div className="appointRight">
            <div className="immediateReservation" data-id={this.props.id} onClick={this.cancelButton}>{this.state.content}</div>
        </div>
    )
    }
       
}
class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailAppoint:false,//详情页里的默认没预约
            content: '立即预约',
            isDetailButton:false,//详情页的立即预约按钮是否可用
        }
        this.toDetail = this.toDetail.bind(this)
        this.appointButton = this.appointButton.bind(this)
        this.appointCancelButton = this.appointCancelButton.bind(this)
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps, nextState){
        if (nextProps.follow && nextProps.follow.status===200){
            if (this.isFollow === 'yes') {//这里是因为，follow接口触发一次，store里的follow对象信息就会一直存在，nextProps.follow.status===200也一直为true，返回再进来，还是为true,所以要加个判断，下次进来this.isFollow就是undefined了
                console.log('触发了follow')
                this.setState({
                    detailAppoint: true,
                    content: '已预约',
                    isDetailButton: true,
                })
            }
        }
        console.log('itemcomponentWillReceiveProps')
        
        if (nextProps.loginData && nextProps.loginData.status === 200){
            const thenFollow=window.localStorage.getItem('thenFollow')
            if (thenFollow&&thenFollow==='yes'){
                if(this.isLogin==='yes'){
                    // console.log(this.isLogin)
                    this.isLogin = 'no'
                    this.appointButton()//去预约
                    
                }
            }
        }
        // if (nextProps.unfollow && nextProps.unfollow.status===200){
        //     console.log('即将触发了unfollow')
        //     if (this.props.cancelCallback){
                // console.log('触发了unfollow')
                // this.props.cancelCallback()//调用我的预约页面的初始化刷新
        //     }
        // }
    }
    
    toDetail(e){
        if(this.props.clickEnable){
            this.props.history.push('/detail')
            let item = e.currentTarget.getAttribute('data-item')
            window.localStorage.setItem("item", item)
            let id = e.currentTarget.getAttribute('data-id')
            window.localStorage.setItem("id", id)
        }
    }
    appointment(){
        //详情页传过来的（立即预约）
        const { appointment } = this.props
        if (appointment) {//详情页的立即预约和已预约
            return (
                <div className="appointRight">
                    <Button disabled={this.state.isDetailButton} className="immediateReservation" onClick={this.appointButton}>{this.state.content}</Button>
                </div>
            )
        }
        // if (appointmentCancel) {//我的预约页的取消预约
        //     return (
                
        //     )
        // }
        return null
    }
    //点击详情页的立即预约和已预约
    appointButton(){
        let login = window.localStorage.getItem('login')
        let mobile = window.localStorage.getItem('mobile')
        let id = window.localStorage.getItem('id')
        if (login === 'yes') {//登录了，就调用预约接口
            this.props.fetchFollow(mobile,id)
            this.isFollow='yes'
        }else{
            console.log('iu')
            this.isLogin = 'yes'
            this.props.itemClickButton('yes')//传给父组件detail,去弹出header里的登录框，
        }
    }
    //我的预约页的取消预约
    appointCancelButton(phone,id) {
        let data = {
            mobile: phone,
            project_id: id
        };
        //调用取消预约接口
        // this.props.fetchUnFollow(phone, id)
        fetch(baseUrl + '/userinfo/unfollow', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json =>
            // dispatch(receiveGets(json))
            this.props.cancelCallback()//调用我的预约页面的初始化刷新
        )
        .catch(err => {
            console.error(err);
        })
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
            <div style={{ backgroundColor: '#fff',width:'100%' }}>
                <Div>
                    <div style={{ width: '7.63rem', paddingLeft: '0.37rem', borderRight:'1px solid #E2E2E2'}}>
                        <Title data-item={JSON.stringify(item)} data-id={item.project_id} onClick={this.toDetail}>{item.project_name}</Title>
                        <div style={{ display: 'flex',alignItems:'center', color: '#3D3A35', fontSize: '0.24rem', marginBottom:'0.6rem'}}>
                            <div style={{marginRight:'20px'}}>预估年化回报率 :</div>
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
                    {this.appointment()}
                    {/*下面的this.props.appointmentCancel是我的预约页面传过来的(取消预约)*/}
                    {
                        this.props.appointmentCancel && <CancelAppoint id={item.project_id} appointCancelButton={this.appointCancelButton}/>
                    }
                </Div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const follow=state.follow
    const unfollow=state.unfollow
    const loginData = state.login
    return {
        follow:follow,
        unfollow:unfollow,
        loginData: loginData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchFollow: (phone, id) => dispatch(fetchFollow(phone,id)),
        fetchUnFollow: (phone, id) => dispatch(fetchUnFollow(phone,id))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Item))