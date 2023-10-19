import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../data'

const Container = styled.div`
height : 600px;
width : 96%;
padding : 20px;
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

const ActionCell = styled.div`
display : flex;
align-items : center;
gap : 15px;
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

const DataTable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    const actionColumn = [
        {
            field : "action",
            headerName : "Action",
            width : 140,
            renderCell : (prams)=>{
                return(
                    <ActionCell>

                            <Link to='/users/test'>
                                <ViewBtn>View</ViewBtn>
                            </Link>

                        <DeleteBtn onClick={()=>handleDelete(prams.row.id)}>Delete</DeleteBtn>
                    </ActionCell>
                )
            }
        }
    ]

    return (
        <Container>
            <Title>
                Add new user
                <Link to='/users/new' style={{ textDecoration: "none" }}><Linkage>Add New</Linkage></Link>
            </Title>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                // pageSize={10}
                // rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </Container>
    )
}

export default DataTable