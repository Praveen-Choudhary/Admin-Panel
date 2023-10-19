import React from 'react'
import { Dashboard, Group, Store, CreditCard, LocalShipping, QueryStats, Notifications, SettingsSystemDaydream, Psychology, Settings, AccountCircle, Logout } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Contanier = styled.div`
// background-color : lightcoral;
flex :1;
border-right : 0.5px solid lightgrey;
min-height : 100vh;
`
const Top = styled.div`
// background-color : rebeccapurple;
height : 50px;
display : flex;
align-items : center;
justify-content : center; 
`
const Logo = styled.span`
font-size : 20px;
font-weight : bold;
color : rebeccapurple
`
const Hr = styled.hr`
height : 0;
border : 0.5px solid lightgrey;
`

const Center = styled.div`
// padding-left : 20px;
`
const Icon = styled.span`
font-size : 18px;
margin-right : 5px;
color : rebeccapurple;
`
const Ul = styled.ul`
list-style : none;
`
const Li = styled.li`
display : flex;
// align-items : center; 
padding : 5px;
cursor : pointer;
&:hover{
    background-color : #ece8ff
}
`
const Span = styled.span`
font-size : 13px;
font-weight : 600;
color : #888;
`
const Title = styled.p`
font-size : 10px;
font-weight : bold;
color : grey;
margin-top : 15px;
margin-bottom : 5px;
`

const Bottom = styled.div`
display : flex;
align-items : center;
margin : 30px;

`
const ColorOption = styled.div`
width : 20px;
height : 20px;
border-radius : 5px;
border : 1px solid #7451f8;
cursor : pointer;
margin : 5px;
&:nth-child(1){
    background-color : whitesmoke;
} 
&:nth-child(2){
    background-color : #333;
}
`


const SideBar = () => {
    return (
        <Contanier>
            <Top>
                <Link to='/' style={{ textDecoration: "none" }}><Logo>JIKS</Logo></Link>
            </Top>
            <Hr />
            <Center>
                <Ul>
                    <Title>MAIN</Title>
                    <Li>
                        <Icon><Dashboard /></Icon>
                        <Span>Dashboard</Span>
                    </Li>
                    <Title>LISTS</Title>
                    <Li>
                        <Link to='/users' style={{ textDecoration: "none" }}>
                            <Icon><Group /></Icon>
                            <Span>Users</Span>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/products' style={{ textDecoration: "none" }}>
                            <Icon><Store /></Icon>
                            <Span>Products</Span>
                        </Link>
                    </Li>
                    <Li>
                        <Icon><CreditCard /></Icon>
                        <Span>Orders</Span>
                    </Li>
                    <Li>
                        <Icon><LocalShipping /></Icon>
                        <Span>Delivery</Span>
                    </Li>
                    <Title>USEFUL</Title>
                    <Li>
                        <Icon><QueryStats /></Icon>
                        <Span>Stats</Span>
                    </Li>
                    <Li>
                        <Icon><Notifications /></Icon>
                        <Span>Notifications</Span>
                    </Li>
                    <Title>SERVICE</Title>
                    <Li>
                        <Icon><SettingsSystemDaydream /></Icon>
                        <Span>System health</Span>
                    </Li>
                    <Li>
                        <Icon><Psychology /></Icon>
                        <Span>Logs</Span>
                    </Li>
                    <Li>
                        <Icon><Settings /></Icon>
                        <Span>Settings</Span>
                    </Li>
                    <Title>USER</Title>
                    <Li>
                        <Icon><AccountCircle /></Icon>
                        <Span>Profile</Span>
                    </Li>
                    <Li>
                        <Icon><Logout /></Icon>
                        <Span>Log Out</Span>
                    </Li>
                </Ul>
            </Center>
            {/* <Bottom>
                <ColorOption></ColorOption>
                <ColorOption></ColorOption>
            </Bottom> */}
        </Contanier>
    )
}

export default SideBar
