import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import{ BrowserRouter,Routes,Route} from "react-router"
import './index.css'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { TaskProvider } from './contexts/TaskContext.tsx';
import Tree from './components/Tree.tsx';
import Puzzle from './components/Puzzle.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    
    <Theme>
      <TaskProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
      </TaskProvider>
      
    </Theme>
    </BrowserRouter>
  </StrictMode>,
)
