// name: "",
// price: 0,
// description: "",
// image: "",
// modifiers: [],
// FilterTags: [],
// isOrder: true,
// stock: 0,
// state: true,
// paymentTerm: 0,

export function validate(newProduct) {
  let error = "";
  if (newProduct.name.trim().length === 0) {
    error = "El nombre no puede estar vacío";
    return error;
  }
  if (newProduct.price === 0) {
    error = "El precio no puede ser 0";
    return error;
  }
  if (
    newProduct.description === "" &&
    newProduct.description.trim().length <= 180
  ) {
    error =
      "La descripcion debe tener menos de 180 caracteres y no debe estar vacío";
    return error;
  }
  if (newProduct.modifiers.length === 0) {
    error = "Debe haber al menos un modificador";
    return error;
  }
  if (newProduct.image === "") {
    error = "Debe cargar una imagen";
    return error;
  }
  if (newProduct.FilterTags.length === 0) {
    error = "Debe haber al menos una etiqueta";
    return error;
  }
  return error;
}
