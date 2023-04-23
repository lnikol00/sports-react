import styled from "styled-components"
import * as FcIcons from "react-icons/fc"
import * as FiIcons from "react-icons/fi"
import * as HiIcons from "react-icons/hi"
import { useState } from "react"

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
    display:flex;
    align-items:center;
    flex-direction:column;
    position: absolute;
    top:0;
    left:${(props) => (props.openNavbar ? "0" : "-100%")};
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
    flex-direction:column;
    gap: 8px;
    height: 2.5em;
    width: 1.5em;
    padding-bottom:15px;
    /* margin-right:20px; */
    margin-left:3em;
    cursor: pointer;

    div{
        background-color:black;
        width: 1.7rem;
        height: 0.1em;
        border-radius:8px;
    }

    div:nth-child(1){
        transform:rotate(45deg) translate(0.1em, 0.6em);
    }
    div:nth-child(2){
        transform:rotate(-45deg) translate(-0.3em, -0.2em);
    }
`

const Input = styled.h2`
    font-size:18px;
    padding-right: 1em;
`

const Search = styled.div`
    display:flex;
    justify-content:space-between;   
    align-items:center;
    height:40px;
    font-size: 25px;
    width:280px;
    padding-left: 10px;
    margin-bottom:0.5em;
    padding-bottom:15px;
    border-bottom:1px solid black;
    cursor: pointer;
`
const MenuItems = styled.ul`
    width:300px;
`

const MenuLink = styled.li`
    display:flex;
    justify-content: ${(props) => (props.content)};
    align-items:center;
    padding:15px 20px;
    width:300px;
    list-style:none;
    margin-bottom:5px;

    div{
        display:flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }

    a{
        font-size:1em;
        font-weight:600;
        cursor: pointer;
    }

    &:hover{
        background-color: #ffb81b;
    }
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
                <MenuItems>
                    <MenuLink><a>News</a></MenuLink>
                    <MenuLink content="space-between">
                        <a>Foootball</a>
                        <div>
                            <HiIcons.HiOutlineChevronRight />
                        </div>
                    </MenuLink>
                    <MenuLink><a>Basketball</a></MenuLink>
                    <MenuLink><a>Tennis</a></MenuLink>
                    <MenuLink content="space-between">
                        <a>Racing</a>
                        <div>
                            <HiIcons.HiOutlineChevronRight />
                        </div>
                    </MenuLink>
                    <MenuLink><a>Handball</a></MenuLink>
                    <MenuLink content="space-between">
                        <a>E-sports</a>
                        <div>
                            <HiIcons.HiOutlineChevronRight />
                        </div>
                    </MenuLink>
                    <MenuLink><a>Forum</a></MenuLink>
                </MenuItems>
            </Navbar>

        </HeaderContainer>
    )
}

export default Header
