const FileHandler = require("./fileHandler");
const Executor = require("./executor");

const tempPath = "../temp/";
const srcPath = tempPath + "src";
const binPath = tempPath + "bin";

const run = (fid, sourceCode) => {
  let fh = new FileHandler(fid, "cpp", srcPath, sourceCode);
  fh.createSourceFile((filePath) => {
    let executor = new Executor(fid, filePath, binPath);
    executor.compile(() => executor.run());
  });
  setTimeout(() => fh.deleteFile(), 10 * 1000);
};

let fid = "154";
let sc =
  "#include<iostream>\nusing namespace std;\nint main(){\ncout<<1+2;\nreturn 0;\n}\n";
run(fid, sc);
