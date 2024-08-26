import { useContext } from "react"
import { Context } from "./context"

export const useConsumerContext = () => {
  return useContext(Context)
}
