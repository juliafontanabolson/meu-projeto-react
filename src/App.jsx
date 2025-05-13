import {
  Box,
  Button,
  Container,
  TextField,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'

function App() {
  const [result, setResult] = useState({title: "", userID: 1, id:2,  body:3})
  const [inputId, setInputId] = useState('')

  const handleFetch = async (id) => {
    console.log('Buscando dados para o ID:', id) 
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json()
      console.log(data,'ggg')
      setResult(data)
    } 
   

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputId(value)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        py: 8,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box
          component="img"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          sx={{ width: 272, height: 92 }}
        />

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Digite um ID ou uma URL"
          value={inputId}
          onChange={handleInputChange}
          sx={{
            maxWidth: 600,
            backgroundColor: '#fff',
            borderRadius: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              paddingLeft: 2,
              paddingRight: 2,
            },
          }}
        />

        <Stack direction="row" spacing={3} justifyContent="center">
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleFetch(inputId)}
          >
            Pesquisa Google
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleFetch(inputId)}
          >
            Estou com sorte
          </Button>
        </Stack>

        {result.title && (
          <div
         
          >
            <Typography variant="h6">{result.title}</Typography>
            <Typography variant="p">{result.body}</Typography>
          </div>
        )}
      </Container>
    </Box>
  )
}

export default App
