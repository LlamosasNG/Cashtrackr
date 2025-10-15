import Budget from '@models/Budget'
import Expense from '@models/Expense'
import type { Request, Response } from 'express'

export class BudgetController {
  static createBudget = async (req: Request, res: Response) => {
    try {
      const budget = new Budget(req.body)
      await budget.save()
      res.status(201).send('Presupuesto creado correctamente')
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' })
    }
  }

  static getAllBudgets = async (req: Request, res: Response) => {
    try {
      const budgets = await Budget.findAll({
        order: [['createdAt', 'DESC']],
      })
      // TODO: Filtrar presupuestos por usuario autenticado
      res.json(budgets)
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' })
    }
  }

  static getBudgetById = async (req: Request, res: Response) => {
    const budget = await Budget.findByPk(req.budget.id, {
      include: [Expense],
    })
    res.json(budget)
  }

  static updateBudgetById = async (req: Request, res: Response) => {
    await req.budget.update(req.body)
    res.send('Presupuesto actualizado correctamente')
  }

  static deleteBudgetById = async (req: Request, res: Response) => {
    await req.budget.destroy()
    res.send('Presupuesto eliminado correctamente')
  }
}
