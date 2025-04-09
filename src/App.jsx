import { useState } from 'react'
import './index.css'
import Button from './components/common/Button'; // ajustá la ruta si cambia

function App() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">¡TailwindCSS listo!</h1>
      </div>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Button onClick={() => alert('¡Click!')}>Haz clic aquí</Button>
      </div>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">Elemento 1</div>
          <div className="bg-white p-6 rounded-lg shadow">Elemento 2</div>
          <div className="bg-white p-6 rounded-lg shadow">Elemento 3</div>
          <div className="bg-white p-6 rounded-lg shadow">Elemento 4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
