import { AccountBalanceWalletOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
// margin-right : 20px;
display : flex;
justify-content : space-between;
flex : 1;
padding : 10px;
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
height : 100px;
`
const Left = styled.div`
display : flex;
flex-direction : column;
justify-content : space-between;
`
const Title = styled.span`
font-weight : bold;
font-size : 14px;
color : rgb(160, 160, 160);
`
const Counter = styled.span`
font-size : 28px;
font-weight : 300;
`
const Link = styled.span`
font-size : 14px;
border-bottom : 1px solid grey;
`

const Right = styled.div`
display : flex;
flex-direction : column;
justify-content : space-between;
`
const Percentage = styled.div`
display : flex;
align-items : center;
font-size : 14px;
`
const Icon = styled.span`
font-size : 18px;
padding : 3px;
// background-color : rgba(128,0,128,0.541);
align-self : flex-end; 
`

const Widget = ({ type }) => {

  const amount = 50000;
  const percentage = 20;
  let data;

  switch(type){
    case 'User' :
      data={
        title : "USERS",
        isMoney : false,
        link : "See all Users",
        icon : (
          <PersonOutlined style={{
            color : "crimson",
            backgroundColor : "rgba(255,0,0,0.5)",
          }}/>
        )
      };
      break;

      case 'Order' :
      data={
        title : "ORDERS",
        isMoney : false,
        link : "View all orders",
        icon : (
          <ShoppingCartOutlined style={{
            color : "goldenrod",
            backgroundColor : "rgba(218,165,32,0.2)",
          }}/>
        )
      };
      break;

      case 'Earnings' :
      data={
        title : "EARNINGS",
        isMoney : true,
        link : "View net earning",
        icon : (
          <MonetizationOnOutlined style={{
            color : "green",
            backgroundColor : "rgba(0,128,0,0.2)",
          }}/>
        )
      };
      break;

      case 'Balance' :
      data={
        title : "BALANCE",
        isMoney : true,
        link : "See details",
        icon : (
          <AccountBalanceWalletOutlined style={{
            color : "purple",
            backgroundColor : "rgba(128,0,128,0.2)",
          }}/>
        )
      };
      break;

    default:
      break;
  }

  return (
    <Container>
        <Left>
          <Title>{data.title}</Title>
          <Counter>{data.isMoney && '₹'} {amount}</Counter>
          <Link>{data.link}</Link>
        </Left>
        <Right>
          <Percentage>
            <KeyboardArrowUpOutlined/>
            {percentage}%
          </Percentage>
          <Icon>
            {data.icon}
          </Icon>
        </Right>
    </Container>
  )
}

export default Widget
