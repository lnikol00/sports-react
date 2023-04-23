import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';

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
      <Header />
      <MainContainer>

      </MainContainer>
    </>

  );
}

export default App;
