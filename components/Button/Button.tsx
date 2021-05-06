import styled from 'styled-components'
import ArrowRight from '../Icon/ArrowRight'
interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string
  width?: string
}
export default function Button({ children, width }: ButtonProps) {
  return (
    <ContainerButton width={width}>
      <ArrowRight />
      {children}
    </ContainerButton>
  )
}

interface ContainerButtonProps {
  width: string
}
const ContainerButton = styled.button<ContainerButtonProps>`
  width: ${({ width }) => width || '317px'};
  background: transparent;
  border: solid #f8f9fa5e 2px;
  border-radius: 6px;
  padding: 8px 25px;
  text-align: left;
  transition: all 500ms;
  color: white;
  &:hover {
    border: solid white 2px;
    padding-left: 20px;
  }
`
