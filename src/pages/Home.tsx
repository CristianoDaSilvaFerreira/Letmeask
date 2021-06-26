import { useHistory } from 'react-router';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { auth, firebase } from '../services/firebase';

// Importanto os estilos
import '../style/auth.scss';

export function Home() {
  // const history = useHistory();

  function handleCreatRoom() {
    // Autenticação do usuário
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    })

    // history.push('/rooms/new');
  }

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
          <button onClick={handleCreatRoom} className="create-room">
            <img src={googleIconImg} alt="Logo da Google" />
            Crie sua salar com a Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
          
        
      </main>
    </div>
  )
}