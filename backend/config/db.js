import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex : true
        })
        console.log(`MONGO-DB connected : ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit()
    }
}

export default connectDB