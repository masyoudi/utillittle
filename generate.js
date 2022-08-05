import fs from "fs";
import path from "path";

try {
  const toCamelCase = (str) => {
    let arr = str.split("-").map((val, i) => {
      if (i !== 0) val = val.charAt(0).toUpperCase().concat(val.slice(1));
      return val;
    });
    return arr.join("");
  };

  let fileNames = fs.readdirSync(path.join(__dirname, "/src"));
  let filtered = fileNames.filter(
    (file) => file.split(".").pop() === "ts" && file !== "index.ts"
  );

  let funcNames = [];
  let templates = [];
  filtered.forEach((file) => {
    file = file.replace(".ts", "");
    funcNames.push(toCamelCase(file));
    templates.push(`import ${toCamelCase(file)} from "./${file}";\n`);
  });
  templates.push(`export {\n  ${funcNames.join(",\n  ")}\n};\n`);

  let filePath = path.resolve(__dirname, "./src/index.ts");
  fs.writeFileSync(filePath, templates.join(""));
  console.info("Index file has been generated");
} catch {
  console.warn("Failed to generate index file");
}
