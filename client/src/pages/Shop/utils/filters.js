export const handleFilter = (allProducts, tags, allTags) => {
  
  let dataFiltered = [...allProducts];
  tags.forEach((tag) => {
    dataFiltered = dataFiltered.filter((p) =>
      p.filterTags.find((t) => t.id === Number(tag))
    );
  });

  return dataFiltered;
};

//===============CREATE VALIDATORS===============================

export function validateName(input) {
  let regxp = /^([a-zA-Z0-9_-\s]){1,25}$/;
  return regxp.test(input);
}

export function validateURL(url) {
  let regxp = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg|bmp)$/;
  return regxp.test(url);
}

export function validatePrice(input) {
  console.log(input);
  if (input < 5000) return false;
  return true;
}

export function validateDescription(input) {
  let regxp = /^([a-zA-Z0-9_-\s]){5,200}$/;
  return regxp.test(input);
}

export function validatePaymentTerm(input) {
  if (input > 180) return false;
  return true;
}


export function validateAll(e, errors, setErrors){
  if (e.target.name === "name") {
    if (!validateName(e.target.value)) {
      setErrors({...errors, name:"Nombre inválido, solo se permite hasta un máximo de 30 caracteres alfanumericos"})
    }else {
      let aux= errors;
      delete aux[e.target.name];
      setErrors(aux);

    }
  }

  if (e.target.name === "image") {
    if (!validateURL(e.target.value)) {
      setErrors({...errors, image:"Debe introducir una url con extension válida de imagen"})
    }else {
      let aux= errors;
      delete aux[e.target.name];
      setErrors(aux);
  }
}

  if (e.target.name === "price") {
    if (!validatePrice(e.target.value)) {
      setErrors({...errors, price: "Debe introducir solo valores numericos a partir de 5000" });
    }else {
      let aux= errors;
      delete aux[e.target.name];
      setErrors(aux);
    }
  }

  if (e.target.name === "description") {
    if (!validateDescription(e.target.value)) {
      setErrors({...errors, description:"Este campo debe tener un mínimo de 5 caracteres y un máximo de 200 caracteres"});
    }else {
      let aux= errors;
      delete aux[e.target.name];
      setErrors(aux);
    }
  }

  if (e.target.name === "paymentTerm") {
    if (!validatePaymentTerm(e.target.value)) {
      setErrors({...errors, paymentTerm:"Debe introducir solo valores numericos. Valor máximo 180" });
    }else {
      let aux= errors;
      delete aux[e.target.name];
      setErrors(aux);
    }
  }
}