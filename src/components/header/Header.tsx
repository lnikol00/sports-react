import styled from "styled-components"
import * as FcIcons from "react-icons/fc"
import * as FiIcons from "react-icons/fi"
import * as HiIcons from "react-icons/hi"
import { useState } from "react"
import Switch from "../other/Switch"
import { Link } from "react-router-dom"

type Props = {
    openNavbar?: boolean;
    padding?: string | undefined;
    rotateIcon?: boolean;
    background?: boolean;
    color?: string | undefined;
    hidden?: boolean;
}

type PassingProps = {
    toggleTheme: any;
    isDarkTheme: boolean;
}

const HeaderContainer = styled.div`
    background-color: ${(props) => (props.theme.headerBackground)};
    position:sticky;
    top:0;
    z-index:4;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0rem 5rem;

    @media screen and (max-width: 600px) {
        padding: 0rem 2rem;
    }
`

export const Right = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
    color: ${(props) => (props.theme.text)};
    gap:20px;

    svg{
        font-size:30px;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        @media screen and (max-width: 450px){
            gap: 0;
        }
    }

    @media screen and (max-width: 450px){
            gap: 10px;
    }
`

const Text = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${(props) => (props.theme.text)};
    text-decoration: none;
    
    svg{
        font-size:30px;
    }

    @media screen and (max-width: 450px){
       gap: 10px;
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
        background-color:${(props) => (props.theme.text)};
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
    background-color:${(props) => (props.theme.background)};
    color:${(props) => (props.theme.text)};
    transition: all 500ms ease;
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
    margin-left:3em;
    cursor: pointer;

    div{
        background-color:${(props) => (props.theme.text)};
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

const Input = styled.h2 <Props>`
    font-size:18px;
    padding-right: 1em;

    a{
        text-decoration:none;
        color:${(props) => (props.theme.text)};
    }
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
    border-bottom:1px solid ${(props) => (props.theme.text)};
    cursor: pointer;
`
const MenuItems = styled.ul`
    width:300px;
`

const MenuLink = styled.li<Props>`
    display:flex;
    justify-content: ${(props) => (props.content)};
    align-items:center;
    padding: ${(props) => (props.padding)};
    width:300px;
    list-style:none;
    background-color: ${(props) => (props.background ? `${(props.theme.hover)}` : "none")};

    a{
        color: ${(props) => (props.theme.text)};
        text-decoration:none;
        font-size:1em;
        font-weight:600;
        cursor: pointer;
    }

    &:hover{
        background-color: ${(props) => (props.theme.hover)};
    }
`
const Rotate = styled.div<Props>`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    transform:rotate(${(props) => (props.rotateIcon ? "90deg" : "0")});
    transition: all 0.5s ease;
`

const HiddenLink = styled.div`
    background-color:${(props) => (props.theme.hiddenBackground)};
    transition: all 0.5s ease; 
    display: ${(props) => props.hidden ? "block" : "none"};
`

function Header({ toggleTheme, isDarkTheme }: PassingProps) {

    const [open, setOpen] = useState<boolean>(false)
    const [rotate1, setRotate1] = useState<boolean>(false)
    const [rotate2, setRotate2] = useState<boolean>(false)
    const [rotate3, setRotate3] = useState<boolean>(false)
    const [menu1, setMenu1] = useState<boolean>(false)
    const [menu2, setMenu2] = useState<boolean>(false)
    const [menu3, setMenu3] = useState<boolean>(false)

    const openNav = () => {
        setOpen(!open)
    }

    const openMenu1 = () => {
        setMenu1(!menu1)
        setRotate1(!rotate1)
    }
    const openMenu2 = () => {
        setMenu2(!menu2)
        setRotate2(!rotate2)
    }
    const openMenu3 = () => {
        setMenu3(!menu3)
        setRotate3(!rotate3)
    }

    return (
        <HeaderContainer>
            <Wrapper>
                <Left onClick={openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Left>
                <Right>
                    <div>
                        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    </div>
                    <Text to="/">
                        <FcIcons.FcNews />
                        <h2>SportsWeek</h2>
                    </Text>
                </Right>
            </Wrapper>
            <Navbar openNavbar={open}>
                <Search>
                    <FiIcons.FiSearch />
                    <Input onClick={openNav}><Link to="search">SEARCH</Link></Input>
                    <Close onClick={openNav}>
                        <div></div>
                        <div></div>
                    </Close>
                </Search>
                <MenuItems>
                    <MenuLink padding="15px 20px"><Link onClick={openNav} to="/">Home</Link></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px" background={rotate1}>
                        <Link onClick={openNav} to={`/news/${1}`}>Football</Link>
                        <Rotate onClick={openMenu1} rotateIcon={rotate1}>
                            <HiIcons.HiOutlineChevronRight />
                        </Rotate>
                    </MenuLink>
                    <HiddenLink hidden={menu1}>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Football</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">NFL</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Futsal</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Rugby</Link></MenuLink>
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><Link onClick={openNav} to={`/news/${2}/info`}>Basketball</Link></MenuLink>
                    <MenuLink padding="15px 20px"><Link onClick={openNav} to={`/news/${3}/info`}>Tennis</Link></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px" background={rotate2}>
                        <Link onClick={openNav} to={`/news/${4}`}>Racing</Link>
                        <Rotate onClick={openMenu2} rotateIcon={rotate2}>
                            <HiIcons.HiOutlineChevronRight />
                        </Rotate>
                    </MenuLink>
                    <HiddenLink hidden={menu2}>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">NASCAR</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Formula 1</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">IndyCar</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">NHRA</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Moto GP</Link></MenuLink>
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><Link onClick={openNav} to={`/news/${5}/info`}>Handball</Link></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px" background={rotate3}>
                        <Link onClick={openNav} to={`/news/${6}`}>E-sports</Link>
                        <Rotate onClick={openMenu3} rotateIcon={rotate3}>
                            <HiIcons.HiOutlineChevronRight />
                        </Rotate>
                    </MenuLink>
                    <HiddenLink hidden={menu3}>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Leauge of Legends</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Valorant</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">CSGO</Link></MenuLink>
                        <MenuLink padding="12px 30px"><Link onClick={openNav} to="#">Rocket Leauge</Link></MenuLink>
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><Link onClick={openNav} to="forum">Forum</Link></MenuLink>
                </MenuItems>
            </Navbar>

        </HeaderContainer>
    )
}

export default Header
