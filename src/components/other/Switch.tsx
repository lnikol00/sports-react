import styled from "styled-components"
import * as BiIcons from "react-icons/bi"
import * as FiIcons from "react-icons/fi"
import { useState } from "react"

type Props = {
    toggle: boolean;
}

type PassingProps = {
    toggleTheme: any;
    isDarkTheme: boolean;
}

const MainContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 70px;
`

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    gap: 20px;
`
const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;

    input{
        opacity: 0;
        width: 0;
        height:0;
    }
`


const Slider = styled.span<Props>`
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 16px;
    background-color: #ccc;

    &::before{
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 3.5px;
        background-color: ${(props) => (props.theme.toggle)};
        border-radius: 16px;
        transform: translateX(${(props) => (props.toggle ? "24px" : "0")});
        transition: all 0.5s ease;
    }
`

function Switch({ toggleTheme, isDarkTheme }: PassingProps) {

    const [isToggled, setIsToggled] = useState(isDarkTheme)

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme();
    }

    return (
        <MainContainer>
            <Icon>
                <BiIcons.BiSun />
            </Icon>
            <Label>
                <input type="checkbox" onChange={onToggle} checked={isToggled} />
                <Slider toggle={isToggled} />
            </Label>
            <Icon>
                <FiIcons.FiMoon />
            </Icon>
        </MainContainer>
    )
}

export default Switch
