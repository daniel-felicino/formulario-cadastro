
function mascaraCelular(event) {
  const campoCelular = event.target
  //Obtenha o elemento onde ocorreu o evento
  campoCelular.value = mascara(campoCelular.value)
}
const mascara = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

