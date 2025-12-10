import { JSX } from 'react';
import './App.css';
import { Copyright } from './components/Copyright';

const App = (): JSX.Element => {
  return (
    <div className='min-h-screen w-full antialiased relative bg-gray-900'>
      {/* Fantasy Main background (camada inferior) */}
      {/* <div className="fixed left-[20%] top-0 h-screen w-[80%] z-10 bg-[url('/Main/fantasy-background.svg')] bg-cover bg-center pointer-events-none opacity-90" /> */}
      {/* <div className='fixed left-[20%] top-0 h-screen w-[80%] z-0 bg-cover bg-center bg-red-500 pointer-events-none' /> */}
      {/* Stars Main background (camada superior) */}
      {/* <div className="fixed left-[20%] top-0 h-screen w-[80%] z-20 bg-[url('/Main/bg-stars.svg')] bg-cover bg-center pointer-events-none" /> */}
      <div className='grid h-screen w-screen grid-cols-[1fr_4fr] relative'>
        {/* Sidebar */}
        <aside className='relative overflow-auto flex flex-col h-full border-r border-white/10 p-5'>
          {/* Sidebar background */}
          <div className="absolute inset-0 -z-10 bg-[url('/Main/bg-moon.png')] bg-no-repeat bg-bottom bg-cover" />
          <div className='flex-1 relative z-10'>
            {/* <Sidebar /> */}
            <ul>
              {Array.from({ length: 30 }).map((_, i) => (
                <li key={i}>Menu {i + 1}</li>
              ))}
            </ul>
          </div>
          <Copyright />
        </aside>

        {/* Main */}
        <section className='overflow-auto flex flex-col h-full p-8'>
          <h1 className='text-3xl font-bold mb-4'>
            Bem-vindo à Darktower RPG Wiki
          </h1>
          <p>Escolha um menu à esquerda para começar.</p>
          {/* Exemplo de conteúdo longo */}
          <ul>
            {Array.from({ length: 60 }).map((_, i) => (
              <li key={i}>Menu {i + 1}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
