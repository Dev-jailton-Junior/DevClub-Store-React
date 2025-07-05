import { ContainerHeader, HeaderLogo, Lista, Nav, NavLink } from "./style";

function Cabecalho() {
  return (
    <ContainerHeader>
      <HeaderLogo>DevClub Store</HeaderLogo>
      <Nav>
        <Lista>
          <NavLink>Home</NavLink>
          <NavLink>Produtos</NavLink>
          <NavLink>Contatos</NavLink>
        </Lista>
      </Nav>
    </ContainerHeader>
  );
}

export default Cabecalho;
