const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected!'))
.catch(err => console.log(err));

module.exports = mongoose;