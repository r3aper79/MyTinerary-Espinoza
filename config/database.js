//ODM
const mongoose = require('mongoose')


//me conecto a la base de datos de mongo
//process.env.MONGO_URL
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//lo anterior devuelve una promesa
.then(()=> console.log("Database connected"))
.catch(error => console.log(error))