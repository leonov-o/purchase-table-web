import './index.css'
import {Main} from "@/pages";
import {ThemeProvider} from "@/app/providers";


function App() {


  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Main/>
      </ThemeProvider>
  )
}

export default App
