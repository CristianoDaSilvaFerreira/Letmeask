import { useContext } from 'react';
import { Link } from 'react-router-dom';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

// Importanto os estilos
import '../style/auth.scss';
import { AuthContext } from '../App';

export function NewRoom() {
  const { user } = useContext(AuthContext);

  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração simbolizadno perguntas e respostas" />
        <strong>Crie sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua auduência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text" 
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
          
        
      </main>
    </div>
  )
}