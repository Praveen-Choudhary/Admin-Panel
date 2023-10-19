import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'

const Container = styled.div`
flex : 4;
-webkit-box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49); 
box-shadow: 2px 4px 10px 1px rgba(98,98,98,0.49);
border-radius : 5px;
color : grey;
`
const Title = styled.div`
margin : 10px;
`


const data = [
    {name : 'Janurary', Total : 56000 },
    {name : 'February', Total : 58000 },
    {name : 'March', Total : 42000 },
    {name : 'April', Total : 48000 },
    {name : 'May', Total : 62000 },
    {name : 'June', Total : 76000 },
];

const Chart = ({ aspect, title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        
                    </defs>
                    <XAxis dataKey="name" stroke='grey'/>
                    <YAxis stroke='grey'/>
                    <CartesianGrid strokeDasharray="3 3" stroke='rgb(228,225,225)' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart 