import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import{ BrowserRouter,Routes,Route} from "react-router"
import './index.css'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { TaskProvider } from './contexts/TaskContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    
    <Theme>
      <TaskProvider>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      </TaskProvider>
      
    </Theme>
    </BrowserRouter>
  </StrictMode>,
)
