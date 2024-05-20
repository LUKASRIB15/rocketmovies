import { FiPlus, FiX } from "react-icons/fi";
import { MarkersLayout } from "./styles";

export function Markers({newMarker=false, ...rest}){
  return (
    <MarkersLayout $newmarker={newMarker}>
      <input readOnly={!newMarker} {...rest}/>
      {
        newMarker ? <FiPlus size={16}/> : <FiX size={16}/> 
      }
    </MarkersLayout>
  )
}