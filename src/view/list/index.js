import React from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'antd';
import { fetchInit } from 'api/list'
import { PropTypes } from 'prop-types'
import Header from 'compon/header'
import Footer from 'compon/footer'
import Search from './search'
import Item from './item'
import 'styles/app.styl';


class List extends React.Component {
    static propTypes = {
        initData: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            current:1,
            scrollTop:false
        }
        this.scrollHandler = this.handleScroll.bind(this);
        this.change = this.change.bind(this);
    }
    componentWillMount(){
        
        
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler);
        let { fetchInit} = this.props
        fetchInit(1)
    }
    handleScroll(event) {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // let scrollTop = event.srcElement.body.scrollTop;
        this._handleScroll(scrollTop);
    }
    _handleScroll(scrollTop) {
        if (parseInt(scrollTop) >= 70) {
            this.setState({
                scrollTop:true
            })
        }else{
            this.setState({
                scrollTop: false
            })
        }
        //滚动条距离页面的高度
    }
    componentWillReceiveProps(nextProps, nextState){

    }
    // shouldComponentUpdate(nextProps, nextState){
    //     let { initData } = this.props
    //     return nextProps.initData !== initData
    // }
    componentWillUpdate(nextProps, nextState){

    }
    componentDidUpdate(prevProps, prevState) {

    }
    componentWillUnmountf () {
        window.removeEventListener('scroll', this.handleScroll);
    }
    change(page){
        console.log(page);
        this.setState({
            current: page,
        });
        let { fetchInit } = this.props
        fetchInit(page)
    }
    render() {
        let { initData } = this.props
        let arr = initData.data,arrNode=[]
        if (arr){
            var total = initData.total_count
            arr.forEach(function (value,index) {
                arrNode.push(<Item clickEnable item={value} key={index}></Item>)
            })
        }
        
        return (
            <div>
                <Header></Header>
                <Search scrollTop={this.state.scrollTop}></Search>
                <div style={{marginTop:'180px'}}>
                    {arrNode}
                </div>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'0.93rem',marginTop:'0.68rem'}}>
                    <Pagination pageSize={10} hideOnSinglePage={true} total={total} defaultCurrent={1} current={this.state.current} onChange={this.change}/>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let initData = state.listInit
    return {
        initData: initData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchInit: (data) => dispatch(fetchInit(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
