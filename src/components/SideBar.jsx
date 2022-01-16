import styled from "styled-components";
import yoga from '../assets/images/yoga.svg'
import swimming from '../assets/images/swimming.svg'
import bike from '../assets/images/bike.svg'
import weights from '../assets/images/weights.svg'

const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 117px;
    align-items: center;
    background: #020203;
    z-index: -1;
`

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 210px auto;
    height: 310px;
`

const StyledImg = styled.img`
    margin: auto;
`

const StyledCopyright = styled.p`
    position: relative;
    top: -150px;
    width: 200px;
    transform: rotate(270deg);
    color: white;
`

function SideBar() {
    return(
        <StyledSideBar>
            <StyledNav>
                <StyledImg src={yoga} />
                <StyledImg src={swimming} />
                <StyledImg src={bike} />
                <StyledImg src={weights} />
            </StyledNav>
            <StyledCopyright>Copyright, SportSee 2020</StyledCopyright>
        </StyledSideBar>
    )
}

export default SideBar