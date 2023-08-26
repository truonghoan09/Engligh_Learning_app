import AppProvider from "./provider/appProvider/indexAppProvider"
import AppRoutes from "./route/AppRoutes/indexAppRoutes"

function App() {

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
