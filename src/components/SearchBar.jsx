import { TextField, Stack, Button } from '@mui/material'

export default function SearchBar({ inputId, onInputChange, onSearch }) {
  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Digite um ID ou uma URL"
        value={inputId}
        onChange={onInputChange}
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
        <Button variant="contained" disableElevation onClick={onSearch}>
          Pesquisa Google
        </Button>
        <Button variant="contained" disableElevation onClick={onSearch}>
          Estou com sorte
        </Button>
      </Stack>
    </>
  )
}
