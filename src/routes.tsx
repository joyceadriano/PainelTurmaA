import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Produto from './pages/Produto'
import PaginaDeExemplo from './pages/PaginaDeExemplo'
import Usuarios from './pages/Usuarios'
import GerenciarUsuarios from './pages/Usuarios/Gerenciar'
import Voluntarios from './pages/Voluntarios'

export const Rotas = () => {
    
    return(
        <BrowserRouter>
            <Routes>

                <Route 
                    path='/'
                    element={<Login />}
                />
                <Route 
                    path='/dashboard'
                    element={<Dashboard />}
                />

                <Route 
                    path='/usuarios'
                    element={<Usuarios />}
                />
                <Route 
                    path='/usuarios/:id'
                    element={<GerenciarUsuarios />}
                />



                <Route 
                    path='/produto/:id'
                    element={<Produto />}
                />
                <Route
                    path='/exemplo'
                    element={<PaginaDeExemplo />}
                />

                <Route
                    path='/voluntarios'
                    element={<Voluntarios />}
                />

            </Routes>
        </BrowserRouter>
    )
}