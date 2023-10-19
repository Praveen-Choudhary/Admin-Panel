import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Chart from '../components/Chart'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import TableComponent from '../components/TableComponent'

const Container = styled.div`
display : flex;
width : 100%;
`
const Wrapper = styled.div`
flex :6;
`
const Top = styled.div`
padding : 20px;
display : flex;
gap : 20px;

`
const Left = styled.div`
flex : 1;
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
padding :20px;
position : relative;
`
const EditBtn = styled.div`
position : absolute;
top : 0;
right : 0;
padding : 5px;
font-size : 12px;
color : #7451f8;
background-color : #7551f818;
cursor : pointer; 
`


const Title = styled.h1`
font-size : 16px;
color : grey;
&.Person{
    color : rgb(85, 85, 85);
}
`
const Item = styled.div`
display : flex;
gap : 20px;
`
const ItemImage = styled.img`
width : 100px; 
height : 100px;
object-fit : cover;
border-radius : 50%;
`
const Details = styled.div`
// display : flex;
// flex-direction : column;

margin-bottom : 10px;
color : #555;
`
const DetailItem = styled.div`
margin-bottom : 10px;
font-size : 14px;
`
const ItemKey = styled.span`
font-weight : bold;
color : grey;
margin-right : 5px;
`
const ItemValue = styled.span`
font-weight : 300;
`

const Right = styled.div`
flex : 2;
`

const Bottom = styled.div`
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
padding : 20px;
margin : 20px;
`



const Single = (props) => {

    const location = useLocation();
    const item  = location.state;
    const name = item.username;
    const image = item.img;
    const email = item.email;
    const phone = item.phone;
    const dob = item.dob;
    const address = item.address;
    const country = item.country;

    // console.log(phone)
    
    return (
        <Container>
            <SideBar />
            <Wrapper>
                <NavBar />
                <Top>
                    <Left>
                        <EditBtn>Edit</EditBtn>
                        <Title>User Information</Title>
                        <Item>
                            <ItemImage src={`../${image}`} />
                            <Details>
                                <Title className='Person'>{name}</Title>
                                {console.log(name)}
                                <DetailItem>
                                    <ItemKey>Email : </ItemKey>
                                    <ItemValue>{email}</ItemValue>
                                </DetailItem>

                                <DetailItem>
                                    <ItemKey>Phone : </ItemKey>
                                    <ItemValue>{phone}</ItemValue>
                                </DetailItem>


                                <DetailItem>
                                    <ItemKey>DOB : </ItemKey>
                                    <ItemValue>{dob}</ItemValue>
                                </DetailItem>

                                <DetailItem>
                                    <ItemKey>Address : </ItemKey>
                                    <ItemValue>{address}</ItemValue>
                                </DetailItem>


                                <DetailItem>
                                    <ItemKey>Country : </ItemKey>
                                    <ItemValue>{country}</ItemValue>
                                </DetailItem>
                            </Details>
                        </Item>
                    </Left>
                    <Right>
                        <Chart aspect={3 / 1} title="User spending (last 6 months)" />
                    </Right>
                </Top>

                <Bottom>
                    <Title>Last Transctions</Title>
                    <TableComponent />
                </Bottom>

            </Wrapper>
        </Container>
    )
}

export default Single