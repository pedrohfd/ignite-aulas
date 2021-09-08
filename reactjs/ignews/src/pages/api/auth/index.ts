import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Laura' },
    { id: 3, name: 'Murilo' },
  ]

  return response.json(users)
}
