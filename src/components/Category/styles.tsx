import styled from '@emotion/styled';
import { List, ListItemText } from '@mui/material';

export const StyledListItemTextCategory = styled(ListItemText)({
  color: '#ffff',
  margin: '0.2rem',
  opacity: 0.7,
  '&:hover': {
    cursor: 'pointer',
    opacity: 1,
  },
}) as typeof ListItemText;

export const StyledListCategory = styled(List)({
  background: '#151875',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  margin: '0 auto',
  padding: '1rem',
  msOverflowStyle: 'none',
  overflowX: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
}) as typeof List;
