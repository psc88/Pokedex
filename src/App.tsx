import { ProviderContext } from "./context"
import { AppRouter } from "./routes/AppRouter"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <ProviderContext>
      <AppRouter />
    </ProviderContext>
  )
}

export default App
