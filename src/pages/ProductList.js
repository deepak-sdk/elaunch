import styled from "styled-components"
// import Announcement from "../components/Announcement";
// import NavBar from "../components/NavBar";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";

const Container=styled.div``;
const Title=styled.h2`
margin:20px;
`;
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`;
const Filter=styled.div`
margin:20px;
`;
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`;
const Select=styled.select`
padding:10px;
margin-right:20px;
`;
const Option=styled.option``;

const ProductList = () => {
  return (
    <Container>
      {/* <NavBar />
      <Announcement /> */}
      <Title>Clothes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
        </Filter>
        <Select>
            <Option disabled selected>
                Colour
            </Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Magenta</Option>
            <Option>Purple</Option>
        </Select>
        <Select>
        <Option disabled selected>
                Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
        </Select>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
}

export default ProductList