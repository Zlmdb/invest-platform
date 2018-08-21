import React from 'react'
import { connect } from 'react-redux'
import { fetchInit } from 'api/detail'
import Header from 'compon/header'
import Footer from 'compon/footer'
import Item from '../list/item'
import 'styles/detail.styl'



class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemClickButton:false,//是否点击了item组件的立即预约按钮
            isAppointAlready:false//立即预约按钮是否禁用
        }
        this.itemClickButton = this.itemClickButton.bind(this)
    }
    componentWillMount(){
        
    }
    componentDidMount() {
        let { fetchInit } = this.props
        fetchInit(this.mobile,this.id)
        window.scrollTo(0,0)
        //
    }
    componentWillReceiveProps(nextProps, nextState) {
        // if (nextProps.value && nextProps.value.status === 200) {
        //     if (this.isFollow === 'yes') {//这里是因为，follow接口触发一次，store里的follow对象信息就会一直存在，nextProps.follow.status===200也一直为true，返回再进来，还是为true,所以要加个判断，下次进来this.isFollow就是undefined了
        //         console.log('触发了follow')
        //         this.setState({
        //             isDetailButton: true,
        //         })
        //     }
        // }
    }
    
    componentDidUpdate(prevProps, prevState) {
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    // }
    itemClickButton(arg) {//传给itme组件，改变itemClickButton值，再传递给header组件，去打开登录的弹出框。
        if(arg==='yes'){
            // console.log('3')
            this.setState({
                itemClickButton:true
            })
        }
    }
    render() {
        const { value } = this.props
        if (value && value.data && value.data.project_basic){
            this.itemValue = value.data.project_basic
        }
        this.id = JSON.parse(window.localStorage.getItem("id"))
        this.mobile = window.localStorage.getItem("mobile")
        // console.log(this.itemValue)
        
        const showObj={value:'yes'}
        return (
            <div>
                <Header visible={this.state.itemClickButton ? showObj:'no'}  shadowBottom></Header>
                <div style={{marginTop:'110px'}}>
                    {this.itemValue && <Item isAppointAlready={value&&value.data&&value.data.follow===1?true:false} appointment itemClickButton={this.itemClickButton} item={this.itemValue}></Item>}
                </div>
                <div className="html_text_img" style={{width:'70%',margin:'0 auto',marginTop:'30px',overflow:'hidden'}}>
                    <div dangerouslySetInnerHTML={{ __html: value && value.data && value.data.data ? value.data.data:''}}>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const value = state.detailInit
    // console.log(value)
    // const value2 = state.listInit
    // console.log(value2)
    // //
    // let id=window.localStorage.getItem("id")
    // let current={};
    // //遍历value2
    // if (value2){
    //     let data = value2.data
    //     data.forEach((v,i,arr)=>{
    //         if(v.project_id===id){
    //             current=v
    //         }
    //     })
    //     return {
    //         value: value,
    //         current: current
    //     }
    // }
    return {
        value:value
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchInit: (mobile,id) => dispatch(fetchInit(mobile,id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)