import React from 'react'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'
import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  Title,
  TransactionList,
  Transactions,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from './styles'

const data = [
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020',
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020',
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020',
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020',
  },
]

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/62259990?v=4',
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='Entrada'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='income'
        />
        <HighlightCard
          title='Saída'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
          type='outcome'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
