
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import userRouter from './routes/userRoutes.js'
import chatRouter from './routes/chatRoutes.js'

const app = express()

// Connect to Database
await connectDB();

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send("Hello from QuickGPT server")
})

app.use('/api/user', userRouter)
app.use("/api/chat", chatRouter)

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

