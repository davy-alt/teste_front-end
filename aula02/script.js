document.getElementById("registro").addEventListener("click",
  function(){

  const email = document.querySelector("#email")
  const senha = document.querySelector("#password")
  const nome = document.querySelector("#nome")
  const nick = document.querySelector("#nick")

  //Extrair valor digitado pelo usuario no campo de input

  const emailValue = email.value;
  const senhaValue = email.value;
  const nomeValue = email.value;
  const nickValue = email.value;

  if (emailValue === "") {
    email.classList.add("erro");
  }

  if (senhaValue === "") {
    senha.classList.add("erro");
  }

  if (nomeValue === "") {
    nome.classList.add("erro");
  }

  if (nickValue === "") {
    nick.classList.add("erro");
  }
})
