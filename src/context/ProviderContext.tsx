import { FC, PropsWithChildren } from "react"
import { useInitContext } from "./useInitContext"
import { Context } from "./context"

export const ProviderContext: FC<PropsWithChildren> = ({ children }) => {
  const valuesContext = useInitContext()
  return (
    <Context.Provider value={valuesContext}>
        { children }
    </Context.Provider>
  )
}
