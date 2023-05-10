import styled from "styled-components"
import * as FiIcons from "react-icons/fi"

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 30px;
    background-color: ${(props) => (props.theme.body)};

    @media screen and (max-width:1200px){
        padding: 30px 0px;
    }
`

const Input = styled.input`
    width: 60%;
    height: 45px;
    outline:none;
    border: none;
    border-bottom: 1px solid ${(props) => (props.theme.text)};
    background-color: ${(props) => (props.theme.headerBackground)};
    padding-left: 30px;
    color: ${(props) => (props.theme.text)};
    font-size: 18px;
    margin-bottom: 300px;

    @media screen and (max-width:1200px){
        width: 70%;
    }
`

const Button = styled.button`
    width: 8%;
    height: 45px;
    margin-bottom: 300px;
    border: none;
    outline: none;
    background-color: ${(props) => (props.theme.background)};
    color: ${(props) => (props.theme.text)};
    font-size: 12px;
    text-transform:uppercase;
    font-weight:700;
    letter-spacing: 5px;
    display: block;

    @media screen and (max-width:1200px){
        display: none;
    }
`

const SearchButton = styled.button`
    width: 5%;
    height: 45px;
    margin-bottom: 300px;
    border: none;
    outline: none;
    background-color: ${(props) => (props.theme.background)};
    color: ${(props) => (props.theme.text)};
    font-size: 20px;
    display: none;

    @media screen and (max-width:1200px){
        display: block;
    }
    @media screen and (max-width:800px){
        width: 12%;
    }
`

function Search() {
    return (
        <MainContainer>
            <Input />
            <Button>Search</Button>
            <SearchButton>
                <FiIcons.FiSearch />
            </SearchButton>
        </MainContainer>
    )
}

export default Search
