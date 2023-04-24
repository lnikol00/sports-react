import styled from "styled-components"
import * as FcIcons from "react-icons/fc"
import * as FiIcons from "react-icons/fi"
import * as HiIcons from "react-icons/hi"
import { useState } from "react"

type Props = {
    openNavbar?: boolean;
    padding?: string | undefined;
    margin?: string | undefined;
}

const HeaderContainer = styled.div`
    background-color: #f5f5f5;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0rem 5rem;
    position:sticky;
    top:0;
    z-index:4;

    @media screen and (max-width: 600px) {
        padding: 0rem 2rem;
    }
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
    width:340px;
    height:100vh;
    padding-top:30px;
    background-color:rgb(255, 200, 78);
    transition:all 1s ease;
    z-index:5;
    overflow-y: scroll;

    @media screen and (max-width:500px){
        width:330px;
    }
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

const MenuLink = styled.li<Props>`
    display:flex;
    justify-content: ${(props) => (props.content)};
    align-items:center;
    /* padding:15px 20px; */
    padding: ${(props) => (props.padding)};
    width:300px;
    list-style:none;

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

const HiddenLink = styled.div`
    background-color:rgba(254, 187, 42, 0.89);
`

function Header() {

    const [open, setOpen] = useState<boolean>(false)
    const [menu1, setMenu1] = useState<boolean>(false)
    const [menu2, setMenu2] = useState<boolean>(false)
    const [menu3, setMenu3] = useState<boolean>(false)

    const openNav = () => {
        setOpen(!open)
    }

    const openMenu1 = () => {
        setMenu1(!menu1)
    }
    const openMenu2 = () => {
        setMenu2(!menu2)
    }
    const openMenu3 = () => {
        setMenu3(!menu3)
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
                    <MenuLink padding="15px 20px"><a>News</a></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px">
                        <a>Foootball</a>
                        <div onClick={openMenu1} >
                            <HiIcons.HiOutlineChevronRight />
                        </div>
                    </MenuLink>
                    <HiddenLink>
                        {menu1 ? <div>
                            <MenuLink padding="12px 30px"><a>Football</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>American football</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>Futsal</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>Australian football</a></MenuLink>
                        </div> : null}
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><a>Basketball</a></MenuLink>
                    <MenuLink padding="15px 20px"><a>Tennis</a></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px">
                        <a>Racing</a>
                        <div onClick={openMenu2}>
                            <HiIcons.HiOutlineChevronRight />
                        </div>
                    </MenuLink>
                    <HiddenLink>
                        {menu2 ? <div>
                            <MenuLink padding="12px 30px"><a>NASCAR</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>Formula 1</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>IndyCar</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>NHRA</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>Moto GP</a></MenuLink>
                        </div> : null}
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><a>Handball</a></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px">
                        <a>E-sports</a>
                        <div onClick={openMenu3}>
                            <HiIcons.HiOutlineChevronRight />
                        </div>
                    </MenuLink>
                    <HiddenLink>
                        {menu3 ? <div>
                            <MenuLink padding="12px 30px"><a>Leauge of Legends</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>Valorant</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>CSGO</a></MenuLink>
                            <MenuLink padding="12px 30px"><a>Rocket Leauge</a></MenuLink>
                        </div> : null}
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><a>Forum</a></MenuLink>
                </MenuItems>
            </Navbar>

        </HeaderContainer>
    )
}

export default Header
