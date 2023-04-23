import styled from "styled-components"
import * as FcIcons from "react-icons/fc"
import * as FiIcons from "react-icons/fi"
import { useState } from "react"
import { Link } from "react-router-dom"

type Props = {
    openNavbar: boolean;
}

const HeaderContainer = styled.div`
    background-color: rgb(236, 232, 232);
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0rem 5rem;
`

const Right = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
        color: black;
    gap:10px;

    svg{
        font-size:30px;
    }
`

const Left = styled.div`
    display:flex;
    justify-content: center;
    gap:8px;
    align-items: center;
    flex-direction: column;
    height: 2.5em;
    width: 3em;
    cursor: pointer;

    div{
        background-color:black;
        width: 1.7rem;
        height: 0.1em;
        border-radius:8px;
    }
`

const Navbar = styled.nav<Props>`
    position: absolute;
    top:0;
    left:${(props) => (props.openNavbar ? "0" : "-50%")};
    width:325px;
    height:100vh;
    padding-top:30px;
    background-color:rgb(255, 200, 78);
    transition:ease 0.5s;
`

const Close = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 1em;
    width: 3em;
    padding-bottom:15px;
    margin-right:20px;
    cursor: pointer;

    div{
        background-color:black;
        width: 1.7rem;
        height: 0.1em;
        border-radius:8px;
    }

    div:nth-child(1){
        transform:rotate(45deg) translate(1.8em, -1.5em);
    }
    div:nth-child(2){
        transform:rotate(-45deg) translate(0.5em, 0.8em);
    }
`

const Input = styled.h2`
    font-size:18px;
    padding-right: 2em;
    cursor: pointer;
`

const Search = styled.div`
    display:flex;
    justify-content:space-between;   
    align-items:center;
    height:40px;
    font-size: 25px;
    width:280px;
    margin-left: 20px;
    padding-left: 10px;
    padding-bottom:15px;
    border-bottom:1px solid black;
`

function Header() {

    const [open, setOpen] = useState<boolean>(false)

    const openNav = () => {
        setOpen(!open)
    }

    return (
        <HeaderContainer>
            <Wrapper>
                <Left onClick={openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Left>
                <Right href="/">
                    <div>
                        <FcIcons.FcNews />
                    </div>
                    <div>
                        <h2>SportsWeek</h2>
                    </div>
                </Right>
            </Wrapper>
            <Navbar openNavbar={open}>
                <Search>
                    <FiIcons.FiSearch />
                    <Input>SEARCH</Input>
                    <Close onClick={openNav}>
                        <div></div>
                        <div></div>
                    </Close>
                </Search>
            </Navbar>

        </HeaderContainer>
    )
}

export default Header
