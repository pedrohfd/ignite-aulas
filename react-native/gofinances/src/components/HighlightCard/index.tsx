import React from 'react'
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from './styles'

interface CardProps {
  title: string
  amount: string
  lastTransaction: string
  type: 'income' | 'outcome' | 'total'
}

const icon = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
  total: 'dollar-sign',
}

export function HighlightCard({
  title,
  amount,
  lastTransaction,
  type,
}: CardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>

        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}
