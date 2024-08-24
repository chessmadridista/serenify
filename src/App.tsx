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
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          position: 'fixed',
          bottom: 0,
          right: 0,
        }}
        alt="Serenify logo."
        src={logo}
      />
    </>
  )
}

export default App
