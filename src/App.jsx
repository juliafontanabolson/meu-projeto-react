import { Box, Container } from '@mui/material'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Result from './components/Result'

function App() {
  const [result, setResult] = useState({ title: '', userID: 1, id: 2, body: 3 })
  const [inputId, setInputId] = useState('')

  const handleFetch = async (id) => {
    console.log('Buscando dados para o ID:', id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    console.log(data, 'ggg')
    setResult(data)
  }

  const handleInputChange = (event) => {
    setInputId(event.target.value)
  }

  const handleSearch = () => {
    if (inputId) handleFetch(inputId)
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
        <Header />
        <SearchBar
          inputId={inputId}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />
        <Result result={result} />
      </Container>
    </Box>
  )
}

export default App
