import colors from 'colors'
import express, { Express } from 'express'
import morgan from 'morgan'
import { db } from './config/db'
import budgetRoutes from './routes/budgetRoutes'

async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.blue.bold('Successfully connected to the database'))
  } catch (error) {
    console.log(colors.red.bold('Connection to the database failed'))
  }
}
connectDB()
const app: Express = express()
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/budgets', budgetRoutes)

export default app
