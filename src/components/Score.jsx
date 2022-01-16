import styled from "styled-components"
import calories from '../assets/images/calories-icon.svg'
import protein from '../assets/images/protein-icon.svg'
import carbs from '../assets/images/carbs-icon.svg'
import fat from '../assets/images/fat-icon.svg'

const StyledScore = styled.div`
    display: flex;
    width: 100%;
    background: #FBFBFB;
    border-radius: 5px;
    padding: 27px 0;
`

const StyledImg = styled.img`
    margin: auto 0 auto 10%;
`

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-around;
    margin-left: 10%;
`

const StyledNumber = styled.p`
    font-size: 1.2em;
    font-weight: bold;
`

const StyledUnity = styled.p`
    
`

function Score() {
    return(
        <StyledScore>
            <StyledImg src={fat} />
            <StyledDetails>
                <StyledNumber>1,930kCal</StyledNumber>
                <StyledUnity>Calories</StyledUnity>
            </StyledDetails>
        </StyledScore>
    )
}

export default Score