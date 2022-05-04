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
host
host_port
mail_user
mail_pass
access_pass
from_label
```

### yandex
```
  host=smtp.yandex.ru
  host_port=465
```

### gmail
```
  host=smtp.gmail.com
  host_port=465
```