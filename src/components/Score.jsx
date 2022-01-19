import styled from "styled-components"
import calorie from '../assets/images/calories-icon.svg'
import protein from '../assets/images/protein-icon.svg'
import carbohydrate from '../assets/images/carbs-icon.svg'
import lipid from '../assets/images/fat-icon.svg'

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

function Score(props) {
    return(
        <StyledScore>
            <StyledImg 
                src={
                    props.type === "calorie" ? calorie : null ||
                    props.type === "carbohydrate" ? carbohydrate : null ||
                    props.type === "proteine" ? protein : null ||
                    props.type === "lipide" ? lipid : null
                } 
            />
            <StyledDetails>
                <StyledNumber>{props.value}{props.unit}</StyledNumber>
                <StyledUnity>{props.unity}</StyledUnity>
            </StyledDetails>
        </StyledScore>
    )
}

export default Score