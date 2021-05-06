import styled from 'styled-components'
import ArrowRight from '../Icon/ArrowRight'
interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string
  width?: string
}
export default function ButtonTwo({ children, width }: ButtonProps) {
  return <ContainerButton width={width}>{children}</ContainerButton>
}

interface ContainerButtonProps {
  width: string
}
const ContainerButton = styled.button<ContainerButtonProps>`
  width: ${({ width }) => width || '317px'};
  font-size: 28px;
  font-weight: 400;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 7px;
  border-color: #a77c3a73;
  background: -webkit-linear-gradient(#8f0101 3%, #7f0101 5%, #520001 100%);
  background: -o-linear-gradient(#8f0101 3%, #7f0101 5%, #520001 100%);
  background: gradient(#8f0101 3%, #7f0101 5%, #520001 100%);
  border: 1px solid #000;
  cursor: pointer;
  display: inline-block;
  text-shadow: 0 2px 0 #810101;
  color: #ffe5e5 !important;
`
