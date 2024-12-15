import { spawn } from "child_process";

const calcPath = (start_loc, end_loc) => {
  return new Promise((resolve, reject) => {
    const pyScript = spawn('python', ['../../scripts/shortestPathComputation.py', 'mukesh']);

    const data = JSON.stringify({ start_loc, end_loc });
    console.log(data);

    // pyScript.stdin.write(data);
    // pyScript.stdin.end();

    // let result = '';

    pyScript.stdout.on("data", (data) => {
      console.log(`output : ${data}`);
    });

    pyScript.stderr.on("data", (data) => {
      console.log(`output : ${data}`);
    });

    pyScript.on("close", (code) => {
      if (code === 0) {
        resolve(JSON.parse("everything is fine"));
      } else {
        reject("pyScript execution failed");
      }
    });

    console.log("fine till here");

    // pyScript.stdout.on('data',(data)=>{
    //     result += data.toString();
    //     console.log(result);
    // })

    // pyScript.stderr.on('data', (err)=>{
    //     reject(`pyScript error: ${err}`);
    // })

    // pyScript.on('close', (code) =>{
    //     if(code === 0){
    //         resolve(JSON.parse(result));
    //     }
    //     else{
    //         reject('pyScript execution failed')
    //     }
    // })
  });
};

export { calcPath };
