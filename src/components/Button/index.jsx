import { useEffect, useState } from "react";
import { ButtonLayout } from "./styles";

export function Button({title, icon:Icon,...rest}){
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setScreenWidth(window.innerWidth)
    })

    return ()=>{
      window.removeEventListener('resize', ()=>{
        setScreenWidth(window.innerWidth)
      })
    }
  }, [])

  return (
    <ButtonLayout {...rest}>
      {Icon && <Icon size={16}/>}
      <span className={screenWidth <=425 ? 'sr-only' : ''}>{title}</span>
    </ButtonLayout>
  )
}