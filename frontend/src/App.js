import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Haeder from "./components/Haeder";

const App = () => {
  return (
    <>
      <Haeder />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
