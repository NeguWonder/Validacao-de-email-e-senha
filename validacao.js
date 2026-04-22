const validarEmail = document.getElementById("email");
const mensagemE = document.getElementById("mensagemE");

validarEmail.addEventListener("input", function () {
  const emailDigitado = this.value;

  const testRegex = /[^\s@]@+[^\s@]+\.[^\s@]+$/;

  if (emailDigitado === "") {
    mensagemE.textContent = "O campo precisa ser preenchido!";
    mensagemE.style.color = "red";
  } else if (!testRegex.test(emailDigitado)) {
    mensagemE.textContent = "E-mail inválido!";
    mensagemE.style.color = "red";
  } else if (emailDigitado === "test@gmail.com") {
    mensagemE.textContent = "não pode ser igual ao exemplo";
    mensagemE.style.color = "orange";
  } else {
    mensagemE.textContent = "E-mail válido!";
    mensagemE.style.color = "green";
    style.backgroundColor = "blue";
  }
});

const validarSenha = document.getElementById("senha");
const mensagemS = document.getElementById("mensagem");

validarSenha.addEventListener("input", function () {
  const senhaDigitado = this.value;

  if (senhaDigitado.length < 8) {
    mensagemS.textContent = "senha deve conter 8 digitos.";
    mensagemS.style.color = "red";
  } else if (!/[a-z]/.test(senhaDigitado)) {
    mensagemS.textContent = "deve conter 1 minusculo";
    mensagemS.style.color = "red";
  } else if (!/[A-Z]/.test(senhaDigitado)) {
    mensagemS.textContent = "Deve conter 1 maiúsculo";
    mensagemS.style.color = "red";
  } else if (!/[0-9]/.test(senhaDigitado)) {
    mensagemS.textContent = "Deve conter um numero";
    mensagemS.style.color = "red";
  } else if (!/[!@#$%^&*()_+\-+=\[\]{};':"\\|,.<>\/?~]/.test(senhaDigitado)) {
    mensagemS.textContent = "deve conter caracter especial";
    mensagemS.style.color = "red";
  } else {
    mensagemS.textContent = "Senha forte!";
    mensagemS.style.color = "green";
  }
});
