import styled from '@emotion/styled'
import { List } from '@mui/material'

export const StyledSearchResult = styled(List)({
  border: '1px solid red',
  position: 'absolute',
  zIndex: 100,
  ul:{
    background: '#fff',
    overflowY: 'scroll',
    height: '350px'
  },
  img:{
    width: '150px',
    height: '150px',
    objectFit: 'cover'
  }
})