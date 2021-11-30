import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  mySkills: string
}

export function SkillCard({ mySkills, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity key={mySkills} style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{mySkills}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
