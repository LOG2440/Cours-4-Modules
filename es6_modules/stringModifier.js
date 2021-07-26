// Non-accessible à l'extérieur du fichier
function getFirstLetter(word) {
  return word[0];
}


// Accessible à travers import
export function splitBySpace(word) {
  return word.split(" ");
}

export default function capitalizeInput(word) {
  const words = splitBySpace(word);
  const capitalizedWords = words.map(
    (x) => getFirstLetter(x).toUpperCase() + x.slice(1)
  );
  const reconstructedInput = capitalizedWords.join(" ");
  return reconstructedInput;
}
