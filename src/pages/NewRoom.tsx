import { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/userAuth';

// Importanto os estilos
import '../style/auth.scss';
import { useState } from 'react';
import { database } from '../services/firebase';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  // Função para cirar sala
  async function handleCreateRoom(event: FormEvent) {
    // prefinindo o evento padrão do Form do HTML de recarrega a página
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    // Criando a referencia ao dado do banco de dados
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    // Criando a roda da sala
    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Nome da sala"
              // aualizando o valor do estado do Form quando há alteração nele
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
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