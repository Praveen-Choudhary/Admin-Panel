import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Container = styled.div`
display : flex;
width : 100%;
`
const Wrapper = styled.div`
flex : 6;
`

const Top = styled.div`
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
padding : 10px;
margin : 20px;
display  : flex;
`
const Title = styled.h1`
color : grey;
font-size : 20px;
`

const Bottom = styled.div`
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
padding : 10px;
margin : 20px;
display  : flex;
`
const Left = styled.div`
flex : 1;
text-align : center;

`
const Image = styled.img`
width : 100px;
height : 100px;
border-radius : 50%;
object-fit : cover;

`


const Right = styled.div`
flex : 2;
`
const Form = styled.form`
display  :flex;
flex-wrap : wrap;
justify-content : space-around;
gap : 30px;
`
const FormInput = styled.div`
width : 40%;

`
const Label = styled.label`
display : flex;
align-items : center;
gap : 10px;

`
const Input = styled.input`
width : 100%;
padding : 5px;
border : none;
border-bottom : 1px solid grey;

`
const Icon = styled.span`
cursor : pointer;
`
const Button = styled.button`
width : 30%;
padding : 10px;
background : none;
background-color : teal;
color : white;
font-weight : bold;
cursor : pointer;
margin-top : 10px; 
`


const New = ({ inputs, title }) => {

  const [file, setFile] = useState("")
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <NavBar />

        <Top>
          <Title>{title}</Title>
        </Top>

        <Bottom>
          <Left>
            <Image src={
              file ? URL.createObjectURL(file) : '../no_image.jpg'
            } />
          </Left>

          <Right>
            <Form>

              <FormInput>
                <Label htmlFor='file'>
                  Image : <Icon><DriveFolderUploadOutlined /></Icon>
                </Label>
                <Input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{ display: 'none' }} />
              </FormInput>

              {inputs.map((input)=>(
                <FormInput key={input.id}>
                <Label>{input.label} : </Label>
                <Input type={input.type} placeholder={input.placeholder} />
              </FormInput>

              ))}
              
              <Button>ADD</Button>
            </Form>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default New