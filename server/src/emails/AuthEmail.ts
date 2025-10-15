import { transport } from '@/config/nodemailer'
import { confirmationEmailTemplate } from './templates/confirmationEmail'

type EmailType = {
  name: string
  email: string
  token: string
}

export class AuthEmail {
  static sendConfirmationEmail = async (user: EmailType) => {
    const email = await transport.sendMail({
      from: 'CashTrackr <admin@cashtrackr.com>',
      to: user.email,
      subject: 'CashTrackr - Confirma tu cuenta',
      html: confirmationEmailTemplate({
        name: user.name,
        token: user.token,
      }),
    })
    console.log('Mensaje enviado correctamente', email.messageId)
  }
}
