import React, { createContext, useState } from 'react'

type ContextShape = {
  role: string
  setRole: (r: string) => void
}

export const UserRoleContext = createContext<ContextShape>({
  role: 'guest',
  setRole: () => {},
})

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<string>('guest')
  return <UserRoleContext.Provider value={{ role, setRole }}>{children}</UserRoleContext.Provider>
}
