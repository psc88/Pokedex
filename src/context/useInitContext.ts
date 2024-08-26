import { useState } from "react"

export const useInitContext = () => {
  const [valueTest, setvalueTest] = useState<boolean>(false)

  const handleSetValueTest = () => {
    setvalueTest(true)
  }

  return {
    valueTest,
    handleSetValueTest
  }
}
