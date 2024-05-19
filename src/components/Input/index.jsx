import { InputLayout, LabelLayout, Input as StyledInput } from "./styles";

export function Input({label, icon: Icon, ...rest}){
  return (
    <InputLayout>
      <LabelLayout htmlFor={label}>{label}</LabelLayout>
      {Icon && <Icon size={20}/>}
      <StyledInput id={label} {...rest}/>
    </InputLayout>
  )
}