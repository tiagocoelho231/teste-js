function palindromo(texto) {
  const textoEmMinusculo = texto.toLowerCase();
  const textoSemEspacos = textoEmMinusculo.split(" ").join("");

  if (textoSemEspacos.length <= 1) {
    return true;
  }

  for (let i = 0; i <= textoSemEspacos.length / 2; i++) {
    if (
      textoSemEspacos[i] !== textoSemEspacos[textoSemEspacos.length - i - 1]
    ) {
      return false;
    }
  }
  return true;
}
