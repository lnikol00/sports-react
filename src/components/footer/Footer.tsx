import styled from "styled-components"
import { Right } from "../header/Header"
import * as FcIcons from "react-icons/fc"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import image from "../../data/img/image.jpg"
import { Link } from "react-router-dom"

const FooterContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction:column;
    color: white;
    height:30em;
    background-color:#000000;
    padding:2% 15%;
`
const Top = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap: 8em;

    @media screen and (max-width: 610px){
        flex-direction: column;
        gap: 2em;
    }
`
const Text = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.color)};
    text-decoration: none;
    
    svg{
        font-size:30px;
    }
`

const Links = styled.div`
    display:flex;
    gap: 3em;

    a{
        text-decoration:none;
        color:white;
    }

    @media screen and (max-width: 610px){
        padding-left: 1em;
    }
`
const Center = styled.div`
    display:flex;
    padding: 3em 0em 0em;
    gap:10em;

    a{
        text-decoration:none;
        color:white;
    }

    @media screen and (max-width: 610px){
        padding: 1em;
        gap: 2em;
    }
`
const Image = styled.img`
    padding: 1em 0em;
    
    @media screen and (max-width: 610px){
        padding: 0em;
    }
`

const Bottom = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`

function Footer() {
    return (
        <FooterContainer>
            <Top>
                <Right color="white">
                    <div>
                        <FcIcons.FcNews />
                    </div>
                    <Text to="/" color="white">
                        <h2>SportsWeek</h2>
                    </Text>
                </Right>
                <Links>
                    <Link to="https://twitter.com/"><BsIcons.BsTwitter /></Link>
                    <Link to="https://hr-hr.facebook.com/"><FaIcons.FaFacebookF /></Link>
                    <Link to="https://www.instagram.com/"><BsIcons.BsInstagram /></Link>
                    <Link to="https://www.pinterest.com.au/autoweekusa/"><FaIcons.FaPinterestP /></Link>
                </Links>
            </Top>
            <Center>
                <Link to="info">About us</Link>
                <Link to="newsletter">Newsletter</Link>
                <Link to="carrer">Careers</Link>
            </Center>
            <Image src={image} alt="slika" />
            <Bottom>
                <span>A Part of Hearst Digital Media</span>
                <span>Our experts choose every product we feature. We may earn money from the links on this page.</span>
                <span>©Hearst Autos, Inc. All Rights Reserved.</span>
            </Bottom>
        </FooterContainer>
    )
}

export default Footer
