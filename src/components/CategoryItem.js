// import { Container } from '@mui/material'

import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
flex:1;
margin:px;
`;
const Image = styled.image`
width:100%;
`;
const Info = styled.div``
const Title = styled.h1``
const Button = styled.button``

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src="{item.img}"/>
      <Info/>
      <Title>
        {item.title}
      </Title>
      <Button>Shop Now!</Button>
    </Container>
  )
}

export default CategoryItem