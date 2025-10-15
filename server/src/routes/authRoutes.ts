import { limiter } from '@/config/limiter'
import { AuthController } from '@/controllers/AuthController'
import { handleInputErrors } from '@/middleware/validation'
import { Router } from 'express'
import { body } from 'express-validator'

const router: Router = Router()

router.use(limiter)
router.post(
  '/create-account',
  body('name').notEmpty().withMessage('El nombre no puede ir vacío'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('El password es muy corto, mínimo son 8 caracteres '),
  body('email').isEmail().withMessage('E-mail no válido'),
  handleInputErrors,
  AuthController.createAccount
)

router.post(
  '/confirm-account',
  body('token')
    .notEmpty()
    .isLength({ min: 6, max: 6 })
    .withMessage('Token no válido'),
  handleInputErrors,
  AuthController.confirmAccount
)

router.post(
  '/login',
  body('email').isEmail().withMessage('E-mail no válido'),
  body('password').notEmpty().withMessage('El password es obligatorio'),
  handleInputErrors,
  AuthController.login
)
export default router
