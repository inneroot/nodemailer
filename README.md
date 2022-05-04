# Private mailing service

## Fastify + Nodemailer

send Post on /sendmail
```
{
  "access": "access password"
  "to": "example@gmail.com",
  "subject": "Hello ✔",
  "text": "Hello from 🤖",
  "html": "<b>Hello world? 🤖</b>"
}
```
## ENV
```
HOST
HOSTPORT
mail_user
mail_pass
access_pass
from_label
```