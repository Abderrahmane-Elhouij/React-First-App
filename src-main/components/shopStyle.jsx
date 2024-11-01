import styled from "styled-components";
import Products from "./product_Function";

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #eaeaea;

  & p {
    color: black;
    font-weight: bold;
    margin-left: 20px;
  }

  & .nav-links {
    display: flex;
    gap: 10px;
  }

  & .store-icon {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    & p {
      margin-left: 0;
      margin-top: 10px;
    }

    & .nav-links {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    & .store-icon {
      margin-right: 0;
    }
  }
`;

const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: black;
  color: white;

  & p {
    font-size: 60px;
    font-weight: bold;
  }
  & span {
    color: #bcbcbc;
  }

  @media (max-width: 768px) {
    & p {
      font-size: 40px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0;

  @media (min-width: 769px) {
    width: 700px;
    margin: 50px auto;
  }
`;

const PageFooter = styled.div`
  height: 50px;
  width: 100%;
  background-color: black;
  & p {
    text-align: center;
    color: white;
  }
`;

const Shop = () => {
  return (
    <>
      <PageHeader>
        <p>Start Bootstrap</p>
        <div className="nav-links">
          <p>Home</p>
          <p>About</p>
          <p>Shop</p>
        </div>
        <div className="store-icon"> &#128722; </div>
      </PageHeader>
      <PageSection>
        <p>Shop in Style</p>
        <span>With this shop homepage template</span>
      </PageSection>
      <Container>
        <Products />
      </Container>
      <PageFooter>
        <p>Copyright &copy; Your Website 2022</p>
      </PageFooter>
    </>
  );
};

export default Shop;
