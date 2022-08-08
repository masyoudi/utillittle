import fs from "fs";
import path from "path";

try {
  const toPascalCase = (str) => {
    let arr = str.split("-").map((val, i) => {
      if (i !== 0) val = val.toUpperCase();
      return val;
    });
    return arr.join("");
  };
  const toCamelCase = (str) => {
    let arr = str.split("-").map((val, i) => {
      if (i !== 0) val = val.charAt(0).toUpperCase().concat(val.slice(1));
      return val;
    });
    return arr.join("");
  };
  const transformWord = (str) => {
    const pascalCase = ["is-uuid"];
    const isPascal = pascalCase.indexOf(str) !== -1;
    return isPascal ? toPascalCase(str) : toCamelCase(str);
  };

  let fileNames = fs.readdirSync(path.join(__dirname, "/src"));
  let filtered = fileNames.filter(
    (file) => file.split(".").pop() === "ts" && file !== "index.ts"
  );

  let funcNames = [];
  let templates = [];
  filtered.forEach((file) => {
    file = file.replace(".ts", "");
    funcNames.push(transformWord(file));
    templates.push(`import ${transformWord(file)} from "./${file}";\n`);
  });
  templates.push(`export {\n  ${funcNames.join(",\n  ")}\n};\n`);

  let filePath = path.resolve(__dirname, "./src/index.ts");
  fs.writeFileSync(filePath, templates.join(""));
  console.info("Index file has been generated");
} catch {
  console.warn("Failed to generate index file");
}
