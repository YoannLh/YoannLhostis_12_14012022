import styled from "styled-components"
import calories from '../assets/images/calories-icon.svg'
import protein from '../assets/images/protein-icon.svg'
import carbs from '../assets/images/carbs-icon.svg'
import fat from '../assets/images/fat-icon.svg'

const StyledScore = styled.div`
    display: flex;
    width: 200px;
    padding: 15px;
    background: #FBFBFB;
    border-radius: 5px;
`

const StyledImg = styled.img`
    margin: auto;
`

const StyledDetails = styled.div`
    margin: auto;
`

function Score() {
    return(
        <StyledScore>
            <StyledImg src={fat} />
            <div style={{"flex":"display; flex-direction: column;"}}>
                <StyledDetails>{1000}</StyledDetails>
                <p>calories</p>
            </div>
        </StyledScore>
    )
}

export default Score