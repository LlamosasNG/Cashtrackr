import Expense from '@/models/Expense'
import { Request, Response } from 'express'

export class ExpenseController {
  static createExpense = async (req: Request, res: Response) => {
    try {
      const expense = new Expense(req.body)
      expense.budgetId = req.budget.id
      expense.save()
      res.status(201).send('Gastos agregado correctamente')
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' })
    }
  }
  static getExpenseById = async (req: Request, res: Response) => {
    res.json(req.expense)
  }
  static updateExpenseById = async (req: Request, res: Response) => {
    await req.expense.update(req.body)
    res.send('Se actualizó correctamente el gasto')
  }
  static deleteExpenseById = async (req: Request, res: Response) => {
    await req.expense.destroy()
    res.send('Gasto eliminado correctamente')
  }
}
