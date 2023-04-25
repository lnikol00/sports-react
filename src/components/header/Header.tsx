import styled from "styled-components"
import * as FcIcons from "react-icons/fc"
import * as FiIcons from "react-icons/fi"
import * as HiIcons from "react-icons/hi"
import { useState } from "react"

type Props = {
    openNavbar?: boolean;
    padding?: string | undefined;
    margin?: string | undefined;
    rotateIcon?: boolean;
    background?: boolean;
    color?: string | undefined;
}

const HeaderContainer = styled.div`
    background-color: #f5f5f5;
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

export const Right = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
    /* color: black;*/
    color: ${(props) => (props.color)};
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
    padding: ${(props) => (props.padding)};
    width:300px;
    list-style:none;
    background-color: ${(props) => (props.background ? "#ffb81b" : "none")};

    a{
        color: black;
        text-decoration:none;
        font-size:1em;
        font-weight:600;
        cursor: pointer;
    }

    &:hover{
        background-color: #ffb81b;
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
    background-color:rgba(254, 189, 48, 0.89);  
`

function Header() {

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
                <Right href="/" color="black">
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
                    <MenuLink padding="15px 20px"><a href="/">Home</a></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px" background={rotate1}>
                        <a href="#">Foootball</a>
                        <Rotate onClick={openMenu1} rotateIcon={rotate1}>
                            <HiIcons.HiOutlineChevronRight />
                        </Rotate>
                    </MenuLink>
                    <HiddenLink>
                        {menu1 ? <div>
                            <MenuLink padding="12px 30px"><a href="#">Football</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">American football</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">Futsal</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">Australian football</a></MenuLink>
                        </div> : null}
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><a href="#">Basketball</a></MenuLink>
                    <MenuLink padding="15px 20px"><a href="#">Tennis</a></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px" background={rotate2}>
                        <a href="#">Racing</a>
                        <Rotate onClick={openMenu2} rotateIcon={rotate2}>
                            <HiIcons.HiOutlineChevronRight />
                        </Rotate>
                    </MenuLink>
                    <HiddenLink>
                        {menu2 ? <div>
                            <MenuLink padding="12px 30px"><a href="#">NASCAR</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">Formula 1</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">IndyCar</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">NHRA</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">Moto GP</a></MenuLink>
                        </div> : null}
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><a href="#">Handball</a></MenuLink>
                    <MenuLink content="space-between" padding="15px 20px" background={rotate3}>
                        <a href="#">E-sports</a>
                        <Rotate onClick={openMenu3} rotateIcon={rotate3}>
                            <HiIcons.HiOutlineChevronRight />
                        </Rotate>
                    </MenuLink>
                    <HiddenLink>
                        {menu3 ? <div>
                            <MenuLink padding="12px 30px"><a href="#">Leauge of Legends</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">Valorant</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">CSGO</a></MenuLink>
                            <MenuLink padding="12px 30px"><a href="#">Rocket Leauge</a></MenuLink>
                        </div> : null}
                    </HiddenLink>
                    <MenuLink padding="15px 20px"><a>Forum</a></MenuLink>
                </MenuItems>
            </Navbar>

        </HeaderContainer>
    )
}

export default Header
