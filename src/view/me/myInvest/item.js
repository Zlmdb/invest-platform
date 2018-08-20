import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
        width:33.3%;
        height:71px;
        line-height:71px;
        text-align:center;
        color:#3D3A35;
        font-size:0.24rem;
        border-right:${props => props.right ? '0.5px solid #E2E2E2':'none'};
        border-bottom:${props => props.bottom ? '0.5px solid #E2E2E2' : 'none'};
        `;


class Item extends React.Component {
    constructor(props) {
        super(props)
    }


    // shouldComponentUpdate(nextProps, nextState) {
    // }
    render() {
        const { item } = this.props
        let allMoney = parseFloat(item.principal) + parseFloat(item.interest)
        let colorSet ='red'
        if (item.interest.indexOf('-')===-1){//正数
            console.log(1)
            colorSet ='red'
        }else{
            console.log(2)
            colorSet = 'green'
        }
        return (
            <div style={{marginBottom:'40px'}}>
                <div style={{ marginBottom: '20px', color:'#3D3A35',fontSize:'0.3rem',fontWeight:'bold'}}>{item.project_name}</div>
                <div style={{ backgroundColor: '#fff', border: '0.5px solid #E2E2E2' }}>
                    <div className="rateTable">
                        <Div right bottom >年化回报率</Div>
                        <Div right bottom >迄今收益</Div>
                        <Div bottom >资产</Div>
                    </div>
                    <div className="rateTable">
                        <Div right >{item.estimate_yearly_return}</Div>
                        <Div right style={{ color: colorSet === 'red' ? '#FF4E32' : '#7ED321' }} >{item.interest.indexOf('-') === -1 ? '+' + item.interest : item.interest}{item.unit === 0 ? '￥' : '$'}</Div>
                        <Div>{allMoney}{item.unit === 0 ?'￥':'$'}</Div>
                    </div>
                    {/*<Card title="Card Title">
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>*/}
                </div>
            </div>
        )
    }
}


export default withRouter(Item)