import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './contexts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
