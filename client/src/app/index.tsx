import './index.css'
import {Main} from "@/pages";
import {ThemeProvider, withStore} from "@/app/providers";
import {useEffect} from "react";
import {useAppDispatch} from "@/shared";
import {getPlatformsAction} from "@/entities";


function App() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getPlatformsAction())
    }, [])
  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Main/>
      </ThemeProvider>
  )
}

export default withStore(App)
