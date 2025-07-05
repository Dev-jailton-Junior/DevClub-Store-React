import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0f0f1e 0%, #1f1f3a);
  padding-top: 100px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;

export const Lista = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 60px 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Produtos = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  opacity: 0;
  transform: translateX(100vw);
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;

  &.active {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
    gap: 20px;
  }
`;

export const ImagemProduto = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
    filter: drop-shadow(0 0 30px rgba(0, 247, 255, 0.15));
    transition: transform 0.5s ease;
  }

  img:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    img {
      max-height: 160px;
    }
  }
`;

export const Conteudo = styled.div`
  flex: 1;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  p,
  h2 {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 0;
    align-items: center;
  }
`;

export const Tag = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  color: #00f7ff;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const Nome = styled.p`
  font-size: 3rem;
  font-family: "Orbitron", sans-serif;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Descricao = styled.p`
  font-size: 1.1rem;
  color: #b8b8d0;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Botao = styled.button`
  padding: 12px 24px;
  background: linear-gradient(90deg, #00f7ff, #0066ff);
  border-radius: 30px;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;
