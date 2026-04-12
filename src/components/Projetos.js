function Projetos() {

  const projetos = [
    {
      nome: "Manutenção de Impressora",
      descricao: "Manutenção e limpeza de impressoras Epson e HP"
    },
    {
      nome: "Redes",
      descricao: "Configuração de IP e organização de redes"
    },
    {
      nome: "Portfólio Web",
      descricao: "Site criado com HTML, CSS e JavaScript"
    }
  ];

  return (
    <div>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}

    </div>
  );
}

export default Projetos;