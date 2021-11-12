const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/poder-judicial',{
    useNewUrlParser:true
});



/*mongoose.connect('mongodb://mongo/poder-judicial')
    .then(db=>console.log('DB ide connected to',db.connection.host))
    .catch(err=>console.error(err));*/
