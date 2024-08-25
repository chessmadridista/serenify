import './App.css'
import TrashRoom from './components/trash room/TrashRoom';
import logo from './assets/logo.png'
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <TrashRoom />
      <Box
        component="img"
        sx={{
          maxWidth: { xs: 120, md: 200 },
          position: 'fixed',
          bottom: 0,
          right: 0,
          zIndex: 1,
        }}
        alt="Serenify logo."
        src={logo}
      />
    </>
  )
}

export default App
