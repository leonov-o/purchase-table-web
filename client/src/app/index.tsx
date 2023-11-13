import './index.css'
import {Main} from "@/pages";
import {ThemeProvider, withStore} from "@/app/providers";


function App() {


  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Main/>
      </ThemeProvider>
  )
}

export default withStore(App)
