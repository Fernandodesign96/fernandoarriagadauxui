import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BancoEstado from './pages/BancoEstado'
import BCNGlobal from './pages/BCNGlobal'
import GhaliKombucha from './pages/GhaliKombucha'
import LaEspecieria from './pages/LaEspecieria'
import Pharmafy from './pages/Pharmafy'
import Findies from './pages/Findies'
import GoodMeal from './pages/GoodMeal'

function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Router basename="/fernandoarriagadauxui">
                    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-200">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/work/banco-estado" element={<BancoEstado />} />
                            <Route path="/work/bcn-global" element={<BCNGlobal />} />
                            <Route path="/work/ghali-kombucha" element={<GhaliKombucha />} />
                            <Route path="/work/la-especieria" element={<LaEspecieria />} />
                            <Route path="/work/pharmafy" element={<Pharmafy />} />
                            <Route path="/work/findies" element={<Findies />} />
                            <Route path="/work/goodmeal" element={<GoodMeal />} />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    )
}

export default App
