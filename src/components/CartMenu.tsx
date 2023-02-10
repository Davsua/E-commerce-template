import ShoppingBag from '@mui/icons-material/ShoppingBag'
import { Box, IconButton } from '@mui/material'
import { useContext } from 'react'
import Badge from '@mui/material/Badge'

// Custom stiles provided by Material UI
// import { styled } from "@mui/material/styles";

import { ShoppingContext } from '../context/Shopping/ShoppingContext'

/*
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
*/

const CartMenu = () => {
  const { state } = useContext(ShoppingContext)
  const handleToggleCart = () => {}
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        size="large"
        aria-label="cart"
        onClick={handleToggleCart}
        color="inherit"
      >
        <Badge
          badgeContent={!state.cart ? 0 : state.cart.length}
          color="secondary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ShoppingBag />
        </Badge>
      </IconButton>
    </Box>
  )
}

export default CartMenu
