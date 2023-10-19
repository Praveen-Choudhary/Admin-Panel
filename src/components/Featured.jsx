import { KeyboardArrowDownSharp, KeyboardArrowUpSharp , MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';

const Container = styled.div`
flex : 2;
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
padding : 10px;
`

const Top = styled.div`
display : flex;
align-items : center;
justify-content : space-between;
color :grey;

`
const Title = styled.div`
font-size : 16px;
font-weight : 600;
color :grey;
`
const Bottom = styled.div`
padding : 20px;
display : flex;
align-items : center;
justify-content : center;
flex-direction : column;
gap : 15px;

`

const FeaturedChart = styled.div`
width : 100px;
height : 100px;
`
const Amount = styled.p`
font-size : 30px;
`
const Desc = styled.p`
font-weight : 300px;
font-size : 14px;
text-align : center;
`
const Summary =styled.div`
width : 100%;
display : flex;
align-items : center;
justify-content : space-between;
`
const Item = styled.div`
text-align : center;

`
const ItemTitle = styled.div`
font-size : 14px;
color : grey;

`
const ItemResult  =styled.div`
display : flex;
`
const Icon = styled.span`
color: ${props => props.theme.main};
`
const ResultAmount = styled.div`

`

const Featured = () => {
    Icon.defaultProps = {
        theme: {
          main: "palevioletred"
        }
    }

    const theme = {
        main: "mediumseagreen"
      };

  return (
    <Container>
        <Top>
            <Title>Total Revenue</Title>
            <MoreVert fontSize='small'/>
        </Top>

        <Bottom>
            <FeaturedChart>
             <CircularProgressbar value={70} text={`70%`} strokeWidth={3}/>;
            </FeaturedChart>
            <Title>Total sales made today</Title>
            <Amount>₹50000</Amount>
            <Desc>Previoust transictions processing. Last payments may not be included</Desc>
            <Summary>
                <Item>
                    <ItemTitle>Target</ItemTitle>
                    <ItemResult>
                        <Icon>
                            <KeyboardArrowDownSharp fontSize='small'/>
                            <ResultAmount>₹120000</ResultAmount>
                        </Icon>
                        
                    </ItemResult>
                </Item>

                <Item>
                    <ItemTitle>Last Week</ItemTitle>
                    <ItemResult>
                        <ThemeProvider theme={theme}>
                            <Icon>
                                <KeyboardArrowUpSharp fontSize='small'/>
                                <ResultAmount>₹120000</ResultAmount>
                            </Icon>
                        </ThemeProvider>
                    </ItemResult>
                </Item>

                <Item>
                    <ItemTitle>Last Month</ItemTitle>
                    <ItemResult>
                        <ThemeProvider theme={theme}>
                            <Icon>
                                <KeyboardArrowUpSharp fontSize='small'/>
                                <ResultAmount>₹120000</ResultAmount>
                            </Icon>
                        </ThemeProvider>

                    </ItemResult>
                </Item>
            </Summary>
        </Bottom>
    </Container>
  )
}

export default Featured