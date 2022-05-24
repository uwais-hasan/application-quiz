
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Question from "./Pages/Questions/Questions";
import Result from "./Pages/Result/Result";
import {Container} from "@mui/material";
import Header from "./Components/Header/Header";
import {Box} from "@mui/material";
import Footer from "./Components/Footer/Footer";
import 'animate.css'
function App() {
  return (
  <Box pt={3} className='content-App'>
      <Router>

          <Container>
              <Header />
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/question' exact element={<Question/>}/>
                  <Route path='/result' exact element={<Result/>}/>
              </Routes>
              <Footer />
          </Container>
      </Router>
  </Box>
  );
}

export default App;
