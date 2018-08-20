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
            itemClickButton:false//是否点击了item组件的立即预约按钮
        }
        this.itemClickButton = this.itemClickButton.bind(this)
    }
    componentWillMount(){
        
    }
    componentDidMount() {
        let { fetchInit } = this.props
        fetchInit(this.id)
        window.scrollTo(0,0)
        //
    }
    componentWillReceiveProps(nextProps, nextState) {
        
    }
    
    componentDidUpdate(prevProps, prevState) {
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    // }
    itemClickButton(arg) {//传给itme组件，改变itemClickButton值，再传递给header组件，去打开登录的弹出框。
        if(arg==='yes'){
            this.setState({
                itemClickButton:true
            })
        }
    }
    render() {
        this.itemValue = JSON.parse(window.localStorage.getItem("item"))
        this.id = JSON.parse(window.localStorage.getItem("id"))
        // console.log(this.itemValue)
        const { value}=this.props
        return (
            <div>
                <Header visible={this.state.itemClickButton?'yes':'no'} shadowBottom></Header>
                <div style={{marginTop:'110px'}}>
                    {this.itemValue && <Item appointment itemClickButton={this.itemClickButton} item={this.itemValue}></Item>}
                </div>
                <div className="html_text_img" style={{width:'70%',margin:'0 auto',marginTop:'30px',overflow:'hidden'}}>
                    <div dangerouslySetInnerHTML={{__html:value}}>
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
        fetchInit: (data) => dispatch(fetchInit(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)