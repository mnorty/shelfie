module.exports = {
  getAll: (req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_Inventory()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops that didn't work"});
        console.log(err)
      } )
  },

  addProduct: (req,res,next) => {
    const dbInstance = req.app.get('db');
    const {name,price,img} = req.body;

    dbInstance.add_inventory([name,price,img])
    .then( () => res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({errorMessage: "Oops that didn't work"});
      console.log(err)
    } )
  },

  deleteProduct:(req,res,next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;

    dbInstance.delete_item(id)
    .then( () => res.sendStatus(200))
    .catch( err => {
      res.status(500).send({errorMessage: "Oops that didn't work"});
      console.log(err)
    } );
  }
  }