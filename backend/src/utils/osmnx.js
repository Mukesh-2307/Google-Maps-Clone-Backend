import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import {apiErrorHandler} from "./apiErrorHandler.js"

const calcPath = (start_loc, end_loc) => {
  return new Promise((resolve, reject) => {
    // const absolutePath = "C:/Users/admin/Desktop/Google Map Clone/backend/scripts/shortestPathComputation.py";

    try {
      if (!start_loc || !end_loc) {
        throw new apiErrorHandler(400, "locations not received properly.");
      }

      const __dirname = path.dirname(new URL(import.meta.url).pathname);
      // console.log(__dirname)

      const absolutePath = path.join(
        __dirname,
        "../../scripts/shortestPathComputation.py"
      );
      // console.log("resolved path:",absolutePath);

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
      try {
        pyScript.stdin.write(data);
        pyScript.stdin.end();
      } catch (error) {
        throw new apiErrorHandler(
          400,
          `Error writing to pyScript stdin: ${error.message}`
        );
      }

      let result = "";

      // response handling
      pyScript.stdout.on("data", (data) => {
        result += data.toString();
        console.log("result from pyScript (stdout)", result);
      });

      // error handling
      pyScript.stderr.on("data", (err) => {
        console.log("pyScript stdErr",err.toString())
        reject(`pyScript error: ${err}`);
      });

      // triggered while closing
      pyScript.on("close", (code) => {
        if (code === 0) {
          try {
            resolve(JSON.parse(result));
          } catch (error) {
            throw new apiErrorHandler(
              400,
              `Error parsing Python script output: ${JSON.parse(error.message)}`
            );
          }
        } else {
          reject(`pyScript exited with code ${code}`);
        }
      });

      pyScript.on("error", (err) => {
        console.error("failed to start the pyScript:",err)
        reject(new Error(`Failed to start Python script: ${err.message}`));
      });
    } catch (error) {
      reject(new Error(`Error in calcPath function: ${err.message}`));
    }
  });
};

export { calcPath };
