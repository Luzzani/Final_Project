export const validateForm = (userInput) => {
  let error = "";
  if (userInput.name.trim().length < 1) return (error = "name");
  if (userInput.typeDoc.trim().length < 1) return (error = "typeDoc");
  if (userInput.document.trim().length < 1) return (error = "document");
  if (userInput.years.trim().length < 1) return (error = "years");
  if (userInput.birthDate.trim().length < 1) return (error = "birthDate");
  if (userInput.cell.trim().length < 1) return (error = "cell");
  if (userInput.emergencyName.trim().length < 1)
    return (error = "emergencyName");
  if (userInput.emergencyRel.trim().length < 1) return (error = "emergencyRel");
  if (userInput.emergencyContact.trim().length < 1)
    return (error = "emergencyContact");
  if (userInput.bloodType.trim().length < 1) return (error = "bloodType");
  if (userInput.health.trim().length < 1) return (error = "health");
  if (userInput.specialConditions.trim().length < 1)
    return (error = "specialConditions");
  if (userInput.bloodType.trim().length < 1) return (error = "bloodType");
  return error;
};
