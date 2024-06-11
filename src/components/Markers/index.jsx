import { FiPlus, FiX } from "react-icons/fi";
import { MarkersLayout } from "./styles";

export function Markers({newMarker=false, onTap, ...rest}){
  return (
    <MarkersLayout $newmarker={newMarker}>
      <input readOnly={!newMarker} {...rest}/>
      <button onClick={onTap}>
        {
          newMarker ? <FiPlus size={16}/> : <FiX size={16}/> 
        }
      </button>
    </MarkersLayout>
  )
}