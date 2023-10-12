
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import { Home } from "./components/pages/home/Home";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";



function App() {
 
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Navbar />
          <Home/>

          <AppRouter />
          
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;






    



