
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we have a root element to mount the app
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure there is a div with id='root' in index.html");
}

createRoot(rootElement).render(<App />);
