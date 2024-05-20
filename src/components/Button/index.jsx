import { useEffect, useState } from "react";
import { ButtonLayout } from "./styles";

export function Button({title, icon:Icon, dark=false,...rest}){
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
    <ButtonLayout $variant={dark} {...rest}>
      {Icon && <Icon size={16}/>}
      <span className={screenWidth <=425 && Icon ? 'sr-only' : ''}>{title}</span>
    </ButtonLayout>
  )
}