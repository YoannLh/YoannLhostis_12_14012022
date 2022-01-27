import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { ThemeContext } from '../context/Context'
import Score from './Score'

const StyledScores = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 23.5%;
`
/**
 * Component
 * Render StyledScores containing 4 Score
 */
function Scores() {
    const { value } = useContext(ThemeContext)
    const [calorie, setCalorie] = useState()
    const [carbohydrate, setCarbohydrate] = useState()
    const [lipid, setLipid] = useState()
    const [protein, setProtein] = useState()

    useEffect(() => {
        if(!value.keyData) return
        const getData = async () => {
            setCalorie(await value.keyData.calorieCount)
            setCarbohydrate(await value.keyData.carbohydrateCount)
            setLipid(await value.keyData.lipidCount)
            setProtein(await value.keyData.proteinCount)
        }
        getData();
    }, [value])

    console.log("value : ", value)
    
    return(
        <StyledScores>
            <Score type={"calorie"} value={calorie} unity={"Calories"} unit={"kCal"}/>
            <Score type={"proteine"} value={protein} unity={"Proteines"} unit={"g"} />
            <Score type={"carbohydrate"} value={carbohydrate} unity={"Glucides"} unit={"g"}/>
            <Score type={"lipide"} value={lipid} unity={"Lipides"} unit={"g"} />
        </StyledScores>
    )
}

export default Scores