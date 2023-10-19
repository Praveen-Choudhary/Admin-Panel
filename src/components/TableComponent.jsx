import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { rows } from '../data'
import styled from 'styled-components'

const Container = styled.div`

`
const TableData = styled.span`

`
const CellWrapper = styled.div`
display : flex;
align-items : center;
`
const Image = styled.img`
width : 32px;
height : 32px;
border-radius : 50%;
margin-right : 10px;
object-fit : cover;
`
const Status = styled.span`
padding : 5px;
border-radius : 5px;
&.Approved{
  color : green;
  background-color : rgba(0,128,0,0.151);
}
&.Pending{
  color : red;
  background-color :  #fcc1bb   ;
}
`


const TableComponent = () => {


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><TableData>Tracking ID</TableData></TableCell>
              <TableCell><TableData>Product</TableData></TableCell>
              <TableCell><TableData>Customer</TableData></TableCell>
              <TableCell><TableData>Date</TableData></TableCell>
              <TableCell><TableData>Amount</TableData></TableCell>
              <TableCell><TableData>Payment Method</TableData></TableCell>
              <TableCell><TableData>Status</TableData></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell><TableData>{row.id}</TableData></TableCell>
                <TableCell><TableData>
                    <CellWrapper>
                      <Image src={row.img}/>
                      {row.product}
                    </CellWrapper>
                  </TableData>
                </TableCell>
                <TableCell><TableData>{row.customer}</TableData></TableCell>
                <TableCell><TableData>{row.date}</TableData></TableCell>
                <TableCell><TableData>{row.amount}</TableData></TableCell>
                <TableCell><TableData>{row.method}</TableData></TableCell>
                <TableCell><TableData><Status className={`${row.status}`}>{row.status}</Status></TableData></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default TableComponent