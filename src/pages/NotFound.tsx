import styled from "styled-components"

const MainContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 8em 10em;

    h1{
        text-align: center;
        line-height: 1.5em;
        font-size: 4.5em;
        padding-bottom: 0.5em;
    }

    a{
        color: black;
        padding: 0.5em;
        font-size: 1.2em;
    }

    @media screen and (max-width:1250px){
        margin: 8em 5em;
    }

    @media screen and (max-width: 1000px){
        h1{
            font-size: 3em;
        }
    }
    @media screen and (max-width: 600px){
        margin: 5em 2.5em;
        h1{
            font-size: 2.3em;
        }
        a{
            font-size: 1em;
        }
    }

`

function NotFound() {
    return (
        <MainContainer>
            <h1>Oops! We don't have the page you're looking for.</h1>
            <a href="/">Check out some of out other stories.</a>
        </MainContainer>
    )
}

export default NotFound
