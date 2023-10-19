import React from 'react'
import styled from 'styled-components';
import Chart from '../components/Chart';
import Featured from '../components/Featured';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import TableComponent from '../components/TableComponent';
import Widget from '../components/Widget';

const Contanier = styled.div`
    display : flex;
`
const Title = styled.h1`
    // color : white;
`
const Wrapper = styled.div`
    // background-color : lightblue;
    flex : 6;
`
const Cover = styled.div`
display : flex;
padding : 20px;
gap : 20px;
`
const Charts = styled.div`
display : flex;
padding : 5px 20px;
gap : 20px;
`
const ListContainer = styled.div`

-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
padding : 20px;
margin : 20px;

`
const ListTitle = styled.div`
font-weight : 600;color : grey;
margin-bottom ; 15px;
`


const Home = () => {
  return (
    <Contanier>
        {/* <Title>Admin Panel</Title> */}
        <SideBar/>
        <Wrapper>
            <NavBar/>
            {/* Container */}
            <Cover>

                <Widget type='User'/>
                <Widget type='Order'/>
                <Widget type='Earnings'/>
                <Widget type='Balance'/>
                
            </Cover>
            <Charts>
                <Featured/>
                <Chart aspect={2/1} title="Last 6 Month (Revenue)"/>
            </Charts>

            <ListContainer>
                <ListTitle>Latest Transctions</ListTitle>
                <TableComponent/>
            </ListContainer>
        </Wrapper>
    </Contanier>
  )
}

export default Home