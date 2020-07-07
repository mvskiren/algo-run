const { spawn, execFile } = require("child_process");
const fs = require("fs");

/**
 * File Handler
 * This class takes in file id, extension such as cpp, java, txt etc, path and source code
 * This class creates and delete files
 * 
 * TODO: Re write file for better maintainance
 */
class FileHanlder {
  isCreated = false; // to check if the file is created

  constructor(fid, ext, dir, sourceCode) {
    this.fid = fid;
    this.ext = ext;
    this.dir = dir;
    this.sourceCode = sourceCode;
  }

  createSourceFile = (callback) => {
    const filePath = `${this.dir}/${this.fid}.${this.ext}`;
    fs.writeFile(filePath, this.sourceCode, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Created file at location : ${filePath}`);
      this.filePath = filePath;
      this.isCreated = true;
      callback(filePath);
    });
  };

  deleteFile = () => {
    if(!this.isCreated){
      console.log('File not created');
      return;
    }
    fs.unlink(this.filePath, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Deleted file at location : ${this.filePath}`);
      this.isCreated = false;
    });
  };
}

module.exports = FileHanlder;


