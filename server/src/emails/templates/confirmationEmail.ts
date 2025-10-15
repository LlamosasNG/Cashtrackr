type EmailType = {
  name: string
  token: string
}

export const confirmationEmailTemplate = (user: EmailType): string => {
  return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirma tu cuenta - CrashTrackr</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 40px 0;">
                        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            
                            <!-- Header -->
                            <tr>
                                <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px 8px 0 0;">
                                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">CrashTrackr</h1>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 40px;">
                                    <h2 style="margin: 0 0 20px; color: #333333; font-size: 24px; font-weight: 600;">¡Bienvenido, ${
                                    user.name
                                    }! 👋</h2>
                                    
                                    <p style="margin: 0 0 20px; color: #666666; font-size: 16px; line-height: 1.6;">
                                        Tu cuenta en CrashTrackr ha sido creada exitosamente. Solo falta un paso más para comenzar.
                                    </p>
                                    
                                    <p style="margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 1.6;">
                                        Para activar tu cuenta, haz clic en el siguiente botón:
                                    </p>
                                    
                                    <!-- Button -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td align="center" style="padding: 0 0 30px;">
                                                <a href="#" style="display: inline-block; padding: 14px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                                                    Confirmar mi cuenta
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!-- Token Box -->
                                    <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 0 0 30px; border-radius: 4px;">
                                        <p style="margin: 0 0 10px; color: #333333; font-size: 14px; font-weight: 600;">
                                            Tu código de confirmación:
                                        </p>
                                        <p style="margin: 0; color: #667eea; font-size: 24px; font-weight: 700; letter-spacing: 2px; font-family: 'Courier New', monospace;">
                                            ${user.token}
                                        </p>
                                    </div>
                                    
                                    <p style="margin: 0 0 10px; color: #999999; font-size: 14px; line-height: 1.6;">
                                        Si no creaste esta cuenta, puedes ignorar este correo.
                                    </p>
                                    
                                    <p style="margin: 0; color: #999999; font-size: 14px; line-height: 1.6;">
                                        Este código expirará en 24 horas por seguridad.
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                                    <p style="margin: 0 0 10px; color: #999999; font-size: 14px;">
                                        © ${new Date().getFullYear()} CrashTrackr. Todos los derechos reservados.
                                    </p>
                                    <p style="margin: 0; color: #999999; font-size: 12px;">
                                        Este es un correo automático, por favor no responder.
                                    </p>
                                </td>
                            </tr>
                            
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
}
