import Logo from "../../assets/Header/Logo.svg"

import {
  MdPerson,
  MdShoppingBag,
  MdShoppingCart,
} from 'react-icons/md';

import { Container, HeaderIconWrapper, HeaderItem, HeaderList, HeaderListItem, HeaderLogo } from "./styles"
import { theme } from "../../styles/theme";


export const Header = () => {
  return (
    <Container>
      <HeaderLogo src={Logo} alt="logotipo urbanist" />
      <HeaderList>
        <HeaderListItem>
          <HeaderIconWrapper>

            <MdShoppingCart fill={theme.colors.text_gray} size={24} />
          </HeaderIconWrapper>
          <HeaderItem>Carrinho</HeaderItem>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderIconWrapper>
            <MdShoppingBag fill={theme.colors.text_gray} size={24} />
          </HeaderIconWrapper>
          <HeaderItem>Minhas compras</HeaderItem>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderIconWrapper>
            <MdPerson fill={theme.colors.text_gray} size={24} />
          </HeaderIconWrapper>
          <HeaderItem>Perfil</HeaderItem>
        </HeaderListItem>
      </HeaderList>
    </Container>
  )
}
