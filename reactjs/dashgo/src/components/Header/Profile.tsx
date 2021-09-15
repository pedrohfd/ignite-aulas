import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Pedro Henrique</Text>
        <Text color='gray.300' fontSize='small'>
          pedro.dedeus@luby.software
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Pedro Henrique'
        src='https://github.com/pedrohfd.png'
      />
    </Flex>
  )
}
