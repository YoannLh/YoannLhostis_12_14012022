import styled from 'styled-components'
import logo from '../assets/images/logo.svg'

const StyledHeader = styled.div`
    display: flex;
    height: 91px;
    width: 100%;
    align-items: center;
    background: #020203;
    box-shadow: 10px 0 10px black;
`

const StyledLogo = styled.img`
    margin-left: 2%;
`

const StyledNav = styled.nav`
    display: flex;
    width: 80%;
    margin-left: 5%;
    justify-content: space-between;
`

const StyledLi = styled.li`
    margin: auto;
    list-style-type: none;
    text-decoration: none;
    color: white;
    font-size: 1.5em;
`

function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={logo} />
            <StyledNav>
                <StyledLi>Accueil</StyledLi>
                <StyledLi>Profil</StyledLi>
                <StyledLi>Réglages</StyledLi>
                <StyledLi>Communauté</StyledLi>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header