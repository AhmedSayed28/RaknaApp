import { useContext } from 'react'
import { UserRoleContext } from '@/src/context/UserRoleContext'

export const useAuth = () => {
  const { role, setRole } = useContext(UserRoleContext)
  return { role, setRole }
}
