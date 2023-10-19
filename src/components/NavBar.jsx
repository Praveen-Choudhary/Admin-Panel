import React from 'react'
import { Search, Language, DarkMode, FullscreenExit, NotificationsNone, ChatBubbleOutline, ListOutlined} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import styled from 'styled-components'

const Contanier = styled.div`
height : 50px;
border-bottom : 0.5px solid lightgrey;
display : flex;
align-items : center;
font-size : 14px;
color : #555;
`
const Wrapper = styled.div`
width : 100%;
padding : 20px;
display : flex;
align-items : center;
justify-content : space-between;

`
const Searching = styled.div`
display : flex;
align-items : center;
border : 0.5px solid lightgrey;
padding : 3px;
`
const Input = styled.input`
border : none;
outline : none;
background-color : transparent;
&::placeholder{
    font-size : 12px;
}
`
const Icon = styled.span`
`

const Items  =styled.div`
display : flex;
align-items : center;

`
const Item = styled.div`
display : flex;
align-items : center;
margin-right : 20px;
position : relative;
`

const Counter = styled.div`
width : 15px;
height : 15px;
background-color : red;
color : white;
// margin : auto;
text-align : center;
border-radius : 50%;
font-size : 10px;
font-weight ; bold;
position : absolute;
top : -5px;
right : -5px;
`
const Image= styled.img`
width : 30px;
height : 30px;
border-radius : 50%;
`


const NavBar = () => {
  return (
    <Contanier>
        <Wrapper>
            <Searching>
                <Input type='text' placeholder='Search....'/>
                <Search/>
            </Searching>

            <Items>
                <Item><Language/>English</Item>
                <Item><DarkModeIcon/></Item>
                <Item><FullscreenExit/></Item>
                <Item>
                    <NotificationsNone/>
                    <Counter>1</Counter>
                </Item>
                <Item>
                    <ChatBubbleOutline/>
                    <Counter>2</Counter>
                </Item>
                <Item><ListOutlined/></Item>
                <Item>
                    <Image src='../av.jpg' alt='avatar'/>
                </Item>
            </Items>
        </Wrapper>
    </Contanier>
  )
}

export default NavBar