import {createRoot} from "react-dom/client";
import App from './App';
import './style.css'

const pacote = document.getElementById('root');
const root = createRoot(pacote);

root.render(<App/>);