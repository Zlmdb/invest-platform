import React from 'react'
import { connect } from 'react-redux'
import { fetchInit } from 'api/detail'
import Header from 'compon/header'
import Footer from 'compon/footer'
import Item from '../list/item'
import { Modal,Button} from 'antd';
import 'styles/detail.styl'



class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemClickButton:false,//是否点击了item组件的立即预约按钮
            isAppointAlready:false,//立即预约按钮是否禁用
            visible:false
        }
        this.itemClickButton = this.itemClickButton.bind(this)
        this.isDetailFollow = this.isDetailFollow.bind(this)
        this.handleOk = this.handleOk.bind(this)
    }
    componentWillMount(){
        
    }
    componentDidMount() {
        let { fetchInit } = this.props
        fetchInit(this.mobile,this.id)
        window.scrollTo(0,0)
        //
        // this.isFollow='yes'
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
        //监听follow接口调用成功后，弹出预约成功提示框
        // if (nextProps.follow && nextProps.follow.status === 200) {
        //     if (this.isFollow === 'yes') {//这里是因为，follow接口触发一次，store里的follow对象信息就会一直存在，nextProps.follow.status===200也一直为true，返回再进来，还是为true,所以要加个判断，下次进来this.isFollow就是undefined了
        //         // console.log('触发了follow')
        //         this.isFollow = 'no'
        //         this.setState({
        //             visible:true
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
    isDetailFollow(){
        this.setState({
            visible: true
        })
    }
    handleOk(){
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        const { value } = this.props
        if (value && value.data && value.data.project_basic){
            this.itemValue = value.data.project_basic
        }
        this.id = JSON.parse(window.localStorage.getItem("id"))
        this.mobile = window.localStorage.getItem("mobile")
        // console.log(this.itemValue)
        //是否登录
        let isAppointAlready = (value && value.data && value.data.follow) === 1 ? 'yes' : 'no'
        console.log(isAppointAlready)
        const showObj={value:'yes'}
        return (
            <div>
                <Header visible={this.state.itemClickButton ? showObj:'no'}  shadowBottom></Header>
                <div style={{marginTop:'110px'}}>
                    {this.itemValue && <Item isDetailFollow={this.isDetailFollow} isAppointAlready={isAppointAlready} appointment itemClickButton={this.itemClickButton} item={this.itemValue}></Item>}
                </div>
                <div className="html_text_img" style={{width:'70%',margin:'0 auto',marginTop:'30px',overflow:'hidden'}}>
                    <div dangerouslySetInnerHTML={{ __html: value && value.data && value.data.data ? value.data.data:''}}>
                    </div>
                </div>
                <Footer></Footer>
                <Modal
                    className="appointSuccess"
                    title="恭喜你预约成功"
                    centered
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    visible={this.state.visible}
                    footer={[
                        <div  key="submit" type="primary" className="appointSuccessModule"  onClick={this.handleOk}>知道了</div>
                    ]}
                >
                    <div> 您的预约信息已成功提交，客户经理将在24小时内与您联系。</div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const value = state.detailInit
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