// import logo from './logo.svg';
import './App.css';
// import Welcome from './less1/components/comp1';
// import TheGalerry from './les2/components/comp1'
// import PizzaYammy from './les3/components/comp1';
import About from './les4/components/about';
import MyHome from './les4/components/home';
import Services from './les4/components/services';
import Contact from './les4/components/contact';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Show from './Todos_les5.js/Todos';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Todoss from './Todos_les5.js/Todos';
import { Recycle } from './redux/reducers/RecycleBin';
import RecycleBin from './les6_recycle/RecycleBin';
import { HocPrintProps } from './les8/HocPrintProps';
import Wow from './less1/components/comp2';



function App() {
  const WowHocPrintProps = HocPrintProps(Wow);
  return (
    <>
      <Provider store={store}>
        {/* { <div className="App">
      <header className="App-header">
        <Welcome></Welcome>
        <TheGalerry></TheGalerry>
        <PizzaYammy></PizzaYammy>       
      </header>
    </div> } */}
        {/* <nav> */}
          {/* <Link to="/">Home </Link>
          <Link to="/Contact"> contact </Link>
          <Link to="/About"> about </Link>
          <Link to="/Services"> services </Link> */}
          {/* <button  type="button" class="btn btn-secondary btn-sm" onClick={()=>translate('he')} >He</button>
      <button  type="button" class="btn btn-secondary btn-sm" onClick={()=>translate('en')} >En</button> */}
        {/* </nav> */}
        {/* <Show>Show&&&&&&&&&&&</Show>  */}
        {/* <Routes>
          <Route path="/" element={<MyHome></MyHome>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/Services" element={<Services></Services>}></Route>
        </Routes> */}
        <Todoss></Todoss>
        <RecycleBin></RecycleBin>

        <WowHocPrintProps name="ELI7"></WowHocPrintProps>


      </Provider>
    </>
  );
}

export default App;
