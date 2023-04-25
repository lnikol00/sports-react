import styled from "styled-components"
import { Right } from "../header/Header"
import * as FcIcons from "react-icons/fc"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import image from "../../data/img/image.jpg"

const FooterContainer = styled.div`
    color: white;
    height:25em;
    background-color:#000000;
    padding:2% 5%;
`
const Top = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap: 8em;
`
const Links = styled.div`
    display:flex;
    gap: 3em;

    a{
        text-decoration:none;
        color:white;
    }
`
const Center = styled.div`
    display:flex;
    padding: 3em 0em 0em;
    gap:10em;
`
const Image = styled.img`
    padding: 1em 0em;
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
                <Right href="/" color="white">
                    <div>
                        <FcIcons.FcNews />
                    </div>
                    <div>
                        <h2>SportsWeek</h2>
                    </div>
                </Right>
                <Links>
                    <a href="https://twitter.com/"><BsIcons.BsTwitter /></a>
                    <a href="https://hr-hr.facebook.com/"><FaIcons.FaFacebookF /></a>
                    <a href="https://www.instagram.com/"><BsIcons.BsInstagram /></a>
                    <a href="https://www.pinterest.com.au/autoweekusa/"><FaIcons.FaPinterestP /></a>
                </Links>
            </Top>
            <Center>
                <a>About us</a>
                <a>Newsletter</a>
                <a>Careers</a>
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
