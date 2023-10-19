import React from 'react'
import SideBar from '../components/SideBar'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import DataTable from '../components/DataTable'
import UserTable from '../components/UserTable'

const Container = styled.div`
display : flex;
width : 100%;
`
const ListContainer = styled.div`
flex : 6;
`

const List = () => {
  return (
    <Container>
      <SideBar/>
      <ListContainer>
          <NavBar/>
          {/* dataTable */}
          {/* <DataTable/> */}
          <UserTable/>
      </ListContainer>
    </Container>
  )
}

export default List