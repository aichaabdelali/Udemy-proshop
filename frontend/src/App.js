import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Haeder from "./components/Haeder";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Haeder />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
