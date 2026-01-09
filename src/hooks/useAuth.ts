import { useContext } from 'react'
import { UserRoleContext } from '../context/UserRoleContext'

export const useAuth = () => {
  const { role, setRole } = useContext(UserRoleContext)
  return { role, setRole }
}
