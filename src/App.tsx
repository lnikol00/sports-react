import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Newsletter from './pages/Newsletter';
import Info from './pages/Info';
import Carrer from './pages/Carrer';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/other/ScrollToTop';
import Search from './pages/Search';
import Forum from './pages/Forum';
import Cathegories from './pages/Cathegories';
import Articles from './pages/Articles';

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
  formBackground: "rgb(101, 99, 99)",
  hiddenBackground: "rgba(54, 51, 51, 0.89)",
  text: "lightgray",
  hover: "gray",
  body: "rgb(95, 95, 95)",
  toggle: "black",
  article: "rgba(255,255,255,0.1)"
}

const lightTheme = {
  headerBackground: "#f5f5f5",
  background: "rgb(255, 200, 78)",
  formBackground: "#F8F4F5",
  hiddenBackground: "rgba(254, 189, 48, 0.89)",
  text: "black",
  hover: "#ffb81b",
  body: "white",
  toggle: "white",
  article: "rgba(0,0,0,0.1)"
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
            <ScrollToTop />
            <Routes>
              <Route index element={<Home />} />
              <Route path='newsletter' element={<Newsletter />} />
              <Route path='info' element={<Info />} />
              <Route path='carrer' element={<Carrer />} />
              <Route path='search' element={<Search />} />
              <Route path='forum' element={<Forum />} />
              <Route path='news/:id/' element={<Cathegories />} />
              <Route path='news/:id/info' element={<Articles />} />
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
