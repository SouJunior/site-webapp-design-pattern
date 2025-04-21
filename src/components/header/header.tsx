import { useState } from "react"
import { Nav, NavLinks, HeaderContainer, MenuButton, NavItem, NavLink } from "./header.styles"
import LogoSrc from '../../assets/logo@2x.png'
import { CtaButton } from '@components/cta-button'

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer>
        <img src={LogoSrc} style={{height: 24.67, width: 164}} alt="SouJunior Logo" />

      <MenuButton onClick={toggleMenu}>{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</MenuButton>

      <Nav isOpen={isMenuOpen}>
        <NavLinks>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sobre">Sobre Nós</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projetos">Iniciativas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Depoimentos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contato"><CtaButton label='Faça Parte'/></NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}