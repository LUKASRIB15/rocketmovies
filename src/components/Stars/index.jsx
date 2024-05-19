import {FiStar} from "react-icons/fi"
import { StarsLayout } from "./styles"
import { useTheme } from "styled-components"

const STARS_POSITION = [1,2,3,4,5]
export function Stars({rating}){
  const {colors} = useTheme()
  return (
    <StarsLayout>
      {
        STARS_POSITION.map(starPosition=>{
          return(
            <FiStar 
              size={16} 
              key={starPosition} 
              fill={rating >= starPosition ? colors.red : "transparent"}
            />
          ) 
        })
      }
    </StarsLayout>
  )
}