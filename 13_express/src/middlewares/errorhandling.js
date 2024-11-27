const error = (error, req, res, next)=>{
    res.status(400).send(
        // if there is an error message, send it on the response
        // otherwise send an empty string
        {message: error.message || '', route:req.path} // the || means 'or'
    )
}

export default error