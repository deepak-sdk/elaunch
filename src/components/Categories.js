// import { Container } from '@mui/material'

import styled from "styled-components";
import { Category } from "@mui/icons-material";
import { categories } from "../data";

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`;

const Categories = () => {
  return 
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item}/>
      ))
      }
    </Container>;
  
}

export default Categories