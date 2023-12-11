import { NextApiRequest, NextApiResponse } from 'next'

interface Response {
  mailSent: string
}

export default function SendMail(req: NextApiRequest, res: NextApiResponse<Response>) {
  const { nombre } = JSON.parse(req.body)
  const mailSent = `El mail se envio con exito a ${nombre}!`

  res.status(200).json({ mailSent })
}
