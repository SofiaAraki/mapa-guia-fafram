function mostrarPersonagem(destino){
  const el = document.getElementById("character");
  if (!el) return;

  const especiais = {
    biblioteca:"📚",
    entrada:"🚪",
    portaria:"🛡️",
    atendimento:"🧑‍💼",
    cozinha:"🍽️",
    banheiroFeminino:"🚻",
    banheiroMasculino:"🚻",
    salaoNobre:"🏛️",
    labEngenharia:"⚙️"
  };

  el.textContent = especiais[destino] || "🧑‍🎓";
}
