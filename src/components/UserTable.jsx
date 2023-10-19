import React from 'react'
import styled from 'styled-components'
import { userRows } from '../data'
import { Link } from 'react-router-dom'


const Container = styled.div`
height : 600px;
width : 96%;
padding : 20px;
`
const Wrapper = styled.div`
flex : 6;
`
const Title = styled.h1`
width : 95%;
font-size : 24px;
color : grey;
margin-bottom : 10px;
display : flex;
align-items : center;
justify-content : space-between;
`
const Linkage = styled.span`
text-decoration : none;
color : green;
font-size : 16px;
font-weight : 400;
border : 1px solid green;
border-radius : 5px;
padding : 5px;
cursor : pointer;
`

const Table = styled.div`
display: flex;
flex-direction: column;
justify-content : space-around;
border: 1px solid rgba(224, 224, 224, 1);
border-radius: 4px;
margin : 20px 10px;
overflow: hidden;
`
const TableHead = styled.div`
display: flex;
// background-color: #f9f9f9;
font-weight: bold;
`
const TableData = styled.div`
flex: 1;
padding: 8px;
color : grey;
`
const TableRow = styled.div`
display: flex;
border-top: 1px solid #ccc;
align-items : center;
`

const ImageCell = styled.div`
display : flex;
align-items : center;
`
const Image = styled.img`
width : 32px;
height : 32px;
border-radius : 50%;
object-fit : cover;
margin-right : 20px;
`
const StatusCell = styled.span`
padding : 5px;
border-radius : 5px;
&.active{
  color : green;
  background-color : rgba(0,128,0,0.151);
}
&.pending{
    background-color : #FFFFCC;
    color : goldenrod;
}
&.passive{
  color : red;
  background-color :  #fcc1bb   ;
}
`
const ViewBtn = styled.div`
padding : 2px 5px;
border-radius : 5px;
color : darkblue;
border : 1px solid rgba(0,0,139,0.596);
cursor : pointer;
`
const DeleteBtn = styled.div`
padding : 2px 5px;
border-radius : 5px;
color : crimson;
border : 1px solid rgba(220,20,60,0.6);
cursor : pointer;
`
const ActionCell = styled.div`
display : flex;
align-items : center;
gap : 15px;
`

const UserTable = () => {

    // const handleDelete = (id)=>{
    //     setData(userRows.filter(item=>item.id !== id))
    // }


    return (
        <Container>

            <Title>
                Add new user
                <Link to='/users/new' style={{ textDecoration: "none" }}><Linkage>Add New</Linkage></Link>
            </Title>

            <Table>
                <TableHead>
                    <TableData>ID</TableData>
                    <TableData>User</TableData>
                    <TableData>Email</TableData>
                    <TableData>Age</TableData>
                    <TableData>Status</TableData>
                    <TableData>Action</TableData>
                </TableHead>

                {userRows.map((item) => (

                    <TableRow key={item.id}>
                        <TableData className='userId'>{item.id}</TableData>
                        <TableData>
                            <ImageCell>
                                <Image src={`${item.img}`} />
                                {item.username}
                            </ImageCell>
                        </TableData>
                        <TableData>{item.email}</TableData>
                        <TableData>{item.age}</TableData>
                        <TableData>
                            <StatusCell className={`${item.status}`}>
                                {item.status}
                            </StatusCell>
                        </TableData>

                        <TableData>
                            <ActionCell>
                                <Link to={`/users/${item.id}`} state={item}>
                                    <ViewBtn>View</ViewBtn>
                                </Link>
                                <DeleteBtn>Delete</DeleteBtn>
                            </ActionCell>
                        </TableData>

                    </TableRow>


                ))}
            </Table>



        </Container>
    )
}

export default UserTable