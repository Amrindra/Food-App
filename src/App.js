import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Pages />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
