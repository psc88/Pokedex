import { ProviderContext } from "./context"
import { AppRouter } from "./routes/AppRouter"

function App() {
  return (
    <ProviderContext>
      <AppRouter />
    </ProviderContext>
  )
}

export default App
