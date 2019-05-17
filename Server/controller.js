module.exports = {
  getAll: (req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_Inventory()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } )
  }
  }