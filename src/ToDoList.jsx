/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ToDoList.css";
import Icone from "./assets/item.svg";
function ToDoList() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  function adicionaItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById("input-entrada").focus();
  }
  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }
  function deleteDaLista(index){
    const listaAux = [...lista];
    listaAux.splice(index,1);
    setLista(listaAux);
  }
  function deletarTodos(){
    setLista([]);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          type="text"
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Adicionar
        </button>
      </form>
      <div className="listaTarefas">
        <div style={{ textAlign: "center" }}>
          {lista.length < 1 ? (
            <img className="icone-central" src={Icone} />
          ) : (
            lista.map((item, index) => (
              <div
                key={index}
                className={item.isCompleted ? "itemCompleto" : "item"}
              >
                <span
                  onClick={() => {
                    clicou(index);
                  }}
                >
                  {item.text}
                </span>
                <button onClick={() => {deleteDaLista(index)}} className="delete">Deletar</button>
              </div>
            ))
          )}
        </div>
        <button onClick={()=>{deletarTodos()}} className="delTodos">Deletar Todos</button>
      </div>
    </div>
  );
}
export default ToDoList;
