import { spawn } from "child_process";
// import path from "path";
import fs from "fs";

const calcPath = (start_loc, end_loc) => {
  return new Promise((resolve, reject) => {
    const absolutePath =
      "C:/Users/admin/Desktop/Google Map Clone/backend/scripts/shortestPathComputation.py";
    // console.log(absolutePath);

    // Path validation
    if (fs.existsSync(absolutePath)) {
      console.log("file found");
    } else {
      console.log("file not found");
    }

    // triggering the .py script
    const pyScript = spawn("python", [absolutePath]);

    const data = JSON.stringify({ start_loc, end_loc });
    // console.log(data);

    // providing the received data {from req.body} to pyScript
    pyScript.stdin.write(data);
    pyScript.stdin.end();

    let result = "";

    // response handling
    pyScript.stdout.on("data", (data) => {
      result += data.toString();
      console.log("result from pyScript",result);
    });

    // error handling
    pyScript.stderr.on("data", (err) => {
      reject(`pyScript error: ${err}`);
    });

    // triggered while closing
    pyScript.on("close", (code) => {
      if (code === 0) {
        resolve(JSON.parse(result));
      } else {
        reject("pyScript execution failed");
      }
    });
  });
};

export { calcPath };
