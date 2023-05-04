import styled from "styled-components"
import * as BiIcons from "react-icons/bi"
import * as FiIcons from "react-icons/fi"
import { useState } from "react"

type Props = {
    toggle: boolean;
}

const MainContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 70px;
`

const Text = styled.div`
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-size: 18px;
    }
`
const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;

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
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 16px;
        transform: translateX(${(props) => (props.toggle ? "28px" : "0")});
        transition: all 0.5s ease;
    }
`

function Switch() {

    const [isToggled, setIsToggled] = useState<boolean>(false)

    const onToggle = () => {
        setIsToggled(!isToggled)
    }


    return (
        <MainContainer>
            <Text>
                {isToggled ?
                    <div>
                        <FiIcons.FiMoon />
                        <span>Dark Mode</span>
                    </div> :
                    <div>
                        <BiIcons.BiSun />
                        <span>Light Mode</span>
                    </div>}
            </Text>
            <Label>
                <input type="checkbox" onChange={onToggle} checked={isToggled} />
                <Slider toggle={isToggled} />
            </Label>
        </MainContainer>
    )
}

export default Switch
