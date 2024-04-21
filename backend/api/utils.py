from email.message import EmailMessage
import ssl
import smtplib

def enviar_correo(correo, subject, body):
    password="sezh qrhb mjsd pktz"
    emailSender = "javiluciomartin@gmail.com"
    emailReciver= correo
    em = EmailMessage()
    em["From"] = emailSender
    em["To"] = emailReciver
    em["Subject"] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com",465 ,context=context) as smtp:
        smtp.login(emailSender, password)
        smtp.sendmail(emailSender, emailReciver, em.as_string())
