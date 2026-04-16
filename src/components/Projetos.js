function Projetos() {
  const projetos = [
    {
      nome: "Manutenção de Impressora",
      descricao: "Manutenção e limpeza de impressoras"
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
    <section className="projetos-secao">
      <h2>Meus Projetos</h2>

      <div className="projetos-container">
        {projetos.map((projeto, index) => (
          <div key={index} className="projeto-card">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;