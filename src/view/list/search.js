import React from 'react'
import styled from 'styled-components';
import 'styles/app.styl';

const Div = styled.div`
        background-color:#000;
        height:70px;
        line-height:70px;
        padding-left:15%;
        display:flex;
        // align-items:center;
        color:#fff;
        margin-bottom:30px;
        `;
const DivItem= styled.div`
        background-color:${props => props.isClick ? '#B7916D' : '#000'};
        &:hover{
            background-color:#B7916D
        }
        margin-right:80px;
        padding:0 10px;
        `;


class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount = () => {

    };

    render() {
        const { scrollTop } = this.props
        console.log(scrollTop)
        return (
            <div style={{ position: this.props.scrollTop ? 'fixed' : '', top: this.props.scrollTop ? 0 : '',width:'100%'}}>
                <Div>
                    <DivItem isClick>全部分类</DivItem>
                    <DivItem>固定收益</DivItem>
                    <DivItem>房产基金</DivItem>
                    <DivItem>私募股权</DivItem>
                    <DivItem>对冲基金</DivItem>
                </Div>
            </div>
        )
    }
}

export default List