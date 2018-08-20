import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'antd';



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
        if (item.interest.indexOf('-'===-1)){
            colorSet ='red'
        }else{
            colorSet = 'green'
        }
        return (
            <div style={{marginBottom:'40px'}}>
                <div style={{ marginBottom: '20px', color:'#3D3A35',fontSize:'0.3rem',fontWeight:'bold'}}>财富好望角租赁收益型美元基金</div>
                <div style={{ backgroundColor: '#fff', border: '0.5px solid #E2E2E2' }}>
                    <div className="rateTable">
                        <Div right bottom >年华回报率</Div>
                        <Div right bottom >迄今收益</Div>
                        <Div bottom >资产</Div>
                    </div>
                    <div className="rateTable">
                        <Div right >{item.estimate_yearly_return}</Div>
                        <Div right style={{ color: colorSet = 'red' ? '#FF4E32' : '#7ED321' }} >{item.interest.indexOf('-' === -1) ? '+' + item.interest : item.interest}</Div>
                        <Div>{allMoney}</Div>
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