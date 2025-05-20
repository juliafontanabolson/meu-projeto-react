import { Typography } from '@mui/material'

export default function Result({ result }) {
  if (!result.title) return null

  return (
    <div>
      <Typography variant="h6">{result.title}</Typography>
      <Typography variant="body1">{result.body}</Typography>
    </div>
  )
}
