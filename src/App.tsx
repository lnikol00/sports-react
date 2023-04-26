import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Newsletter from './pages/Newsletter';
import Info from './pages/Info';

const AppContainer = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`

const MainContainer = styled.div`
  
`

function App() {
  return (

    <>
      <AppContainer />
      <Router>
        <Header />
        <MainContainer>
          <Routes>
            <Route index element={<Home />} />
            <Route path='newsletter' element={<Newsletter />} />
            <Route path='info' element={<Info />} />
          </Routes>
        </MainContainer>
        <Footer />
      </Router>
    </>

  );
}

export default App;
