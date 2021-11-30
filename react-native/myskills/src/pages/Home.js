import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
  }

  useEffect(() => {}, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Pedro</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        placeholder='New skill'
        placeholderTextColor='#555'
        style={styles.input}
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => <SkillCard mySkills={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: '#fff',
  },
})
