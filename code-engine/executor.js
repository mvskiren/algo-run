const { spawn, exec } = require("child_process");

/**
 * This class excutes code
 * FIXME: Currently only for C++
 */
class Executor {
  constructor(fid, sourcepath, outputpath) {
    this.fid = fid;
    this.sourcepath = sourcepath;
    this.outputpath = outputpath;
  }

  compile(callback) {
    let cmp = exec(
      `g++ ${this.sourcepath} -std=c++17 -o ${this.outputpath}/${this.fid}.out`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(stderr);
          return;
        }
        console.log(`File Complied`);
        callback();
      }
    );
  }

  run() {
    let cpprun = exec(
      `cd ${this.outputpath} && ./${this.fid}.out`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(stderr);
          return;
        }
        console.log(stdout);
      }
    );
  }
}

module.exports = Executor;
