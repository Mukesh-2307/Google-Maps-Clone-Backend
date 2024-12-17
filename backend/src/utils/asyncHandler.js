// this is a basic wrapper that handles async and await situations as we constantly interact with the servers and this interaction sometimes may take some time

const asyncHandler = (requestHandler) => {
    return(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}