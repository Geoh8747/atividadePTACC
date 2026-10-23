import { useState } from "react";

// COMPONENTE PRINCIPAL
function App() {
  const [temaAtual, atualizarTema] = useState("azul");
  const listaMensagens = ["Você tem um aviso"];

  return(
    <main style={{ padding: "20px" }}>
      <h1>Atividades React</h1>
      <section>
        <h2>Exercício 1</h2>
        <Notificacao mensagens={listaMensagens} />
      </section>
      <hr />

      <section>
        <h2>Exercício 2</h2>
        <p>{rotuloDoStatus("pendente")}</p>
        <p>{rotuloDoStatus("enviado")}</p>
        <p>{rotuloDoStatus("entregue")}</p>
        <p>{rotuloDoStatus("invalido")}</p>
      </section>
      <hr />

      <section>
        <h2>Exercício 3</h2>
        <SeletorTema alterarTema={atualizarTema} />
        <MostraTema tema={temaAtual} />
      </section>
    </main>
  );
}

// EXERCÍCIO 1 - Notificações
function Notificacao({ mensagens }) {
  return(
    <div>
      {mensagens.length === 0 ? (
        <p>Nenhuma notificação nova.</p>
      ) : (
        <p>
          Você tem {mensagens.length}{" "}
          {mensagens.length > 1
            ? "notificações"
            : "notificação"}.
        </p>
      )}
    </div>
  )
}

// EXERCÍCIO 2 - Status do pedido
function rotuloDoStatus(status) {
  const nomes = {
    pendente: "Pendente",
    enviado: "Enviado",
    entregue: "Entregue",
    cancelado: "Cancelado"
  }

  return nomes[status] ?? "Status desconhecido"
}


// EXERCÍCIO 3 - Compartilhamento de estado
function SeletorTema({ alterarTema }) {
  return(
    <div>
      <p>Selecione uma cor para o tema:</p>

      <button onClick={() => alterarTema("azul")}>
        Azul
      </button>

      <button onClick={() => alterarTema("verde")}>
        Verde
      </button>
    </div>
  )
}

function MostraTema({ tema }) {
  const aparencia = {
    backgroundColor: tema === "azul" ? "lightblue" : "lightgreen",
    color: "#222",
    padding: "15px",
    marginTop: "10px"
  }

  return(
    <div style={aparencia}>
      <p>Tema escolhido: {tema}</p>
    </div>
  )
}


export default App;