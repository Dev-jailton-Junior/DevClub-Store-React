import { useEffect, useState } from "react";
import Watch from "../../assets/apple-watch.png";
import airpods from "../../assets/air-pods.png";
import vision from "../../assets/vision-pro.png";
import {
  Botao,
  Container,
  Conteudo,
  Descricao,
  ImagemProduto,
  Lista,
  Nome,
  Produtos,
  Tag,
} from "./style";

const produtos = [
  {
    imagem: Watch,
    tag: "Novo Lançamento",
    nome: "Apple Watch Series 10",
    descricao:
      "O Apple Watch Series 10 combina desempenho rápido, recursos essenciais de saúde e segurança, além de um design estiloso. Um smartwatch perfeito para manter sua rotina ativa e conectada com eficiência e praticidade.",
  },
  {
    imagem: airpods,
    tag: "Som Premium",
    nome: "Apple AirPods Max",
    descricao:
      "Mergulhe em uma experiência sonora incomparável com os AirPods Max. Equipados com cancelamento ativo de ruído, áudio espacial dinâmico e um design elegante em alumínio anodizado, eles proporcionam qualidade sonora e conforto premium para o seu dia a dia.",
  },
  {
    imagem: vision,
    tag: "Alta Perfomance",
    nome: "Apple Vision Pro",
    descricao:
      "Transforme sua maneira de interagir com o mundo digital. O Apple Vision Pro une realidade aumentada e virtual com altíssima definição, entregando uma experiência imersiva e revolucionária em produtividade, entretenimento e conectividade.",
  },
];
function ListaDeProdutos() {
  const [ativo, setAtivo] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAtivo((anterior) => (anterior + 1) % produtos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Lista>
        {produtos.map((produto, index) => (
          <Produtos key={index} className={index === ativo ? "active" : ""}>
            <ImagemProduto>
              <img src={produto.imagem} alt={produto.nome} />
            </ImagemProduto>
            <Conteudo>
              <Tag>{produto.tag}</Tag>
              <Nome>{produto.nome}</Nome>
              <Descricao>{produto.descricao}</Descricao>
              <Botao>Saiba Mais</Botao>
            </Conteudo>
          </Produtos>
        ))}
      </Lista>
    </Container>
  );
}
export default ListaDeProdutos;
