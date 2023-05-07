import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Newsletter from './pages/Newsletter';
import Info from './pages/Info';
import Carrer from './pages/Carrer';
import News from './pages/News';
import NotFound from './pages/NotFound';
import { useState } from 'react';

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

const darkTheme = {
  headerBackground: "rgb(48, 48, 48)",
  background: "rgb(15, 13, 13)",
  hiddenBackground: "rgba(54, 51, 51, 0.89)",
  text: "lightgray",
  hover: "gray",
  body: "rgb(95, 95, 95)",
  toggle: "black"
}

const lightTheme = {
  headerBackground: "#f5f5f5",
  background: "rgb(255, 200, 78)",
  hiddenBackground: "rgba(254, 189, 48, 0.89)",
  text: "black",
  hover: "#ffb81b",
  body: "white",
  toggle: "white",
}

function App() {

  const [theme, setTheme] = useState<string>("light")
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <AppContainer />
        <Router>
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <MainContainer>
            <Routes>
              <Route index element={<Home />} />
              <Route path='newsletter' element={<Newsletter />} />
              <Route path='info' element={<Info />} />
              <Route path='carrer' element={<Carrer />} />
              <Route path='news/:id' element={<News />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </MainContainer>
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
