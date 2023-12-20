// Недостаточная информация о типе данных

function wrongScriptAt(s: any): number {
  return s.indexOf("Script");
}

// Уточненная информация о типе

function scriptAt(s: string): number {
  return s.indexOf("Script");
}

console.log(wrongScriptAt("TypeScript"));
console.log(scriptAt(42));
