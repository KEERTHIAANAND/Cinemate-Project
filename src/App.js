import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import{Header,Footer} from "./components/";

export default function App() {
  return (
    <div>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

