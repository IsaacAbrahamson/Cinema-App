import express, { Application, Router } from 'express'

// Import route middleware
import movieRoutes from './routes/movie.js'
import ticketRoutes from './routes/ticket.js'
import authRoutes from './routes/auth.js'
import orderRoutes from './routes/order.js'

const app: Application = express()
app.use(express.json())

app.use('/api/movie', movieRoutes)
app.use('/api/ticket', ticketRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/order', orderRoutes)

const PORT: number = Number(process.env.PORT) || 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
