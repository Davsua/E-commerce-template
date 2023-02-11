import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useIcon } from '../Utils/constants'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'

import CartMenu from './CartMenu'
import { Search } from './Search/Search'
import { Category } from './Category/Category'
const pages = ['Pricing', 'Blog']
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {


  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [isHover, setIsHover] = useState(false)
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // The function to view drop-down Nav Menu and User Menu were unified into a toggle logic.
  const handleToggleNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    !anchorElNav ? setAnchorElNav(event.currentTarget) : setAnchorElNav(null)
    console.log(event.currentTarget)
    console.log(useIcon)
  }

  /*
  const handleToggleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    !anchorElUser
      ? setAnchorElUser(event.currentTarget)
      : setAnchorElUser(null);
    console.log(anchorElUser);
  };
  */
  const handleToggleCategory = () =>{
    setIsHover(!isHover)
  }

  

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Text Shop when Desktop mode */}
            <Link
              style={{
                display: 'flex',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#fff',
                marginTop: 1,
              }}
              to="/"
            >
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  // fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  // color: "inherit",
                  textDecoration: 'none',
                }}
              >
              SHOP
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={() => handleToggleCategory()}
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#fff',
                  alignItems: 'center',
                }}>
               PRODUCTS  
              </Button>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleToggleNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link
                    style={{
                      display: 'flex',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: '#fff',
                      alignItems: 'center',
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>

            <Search/>
            <CartMenu />
            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleToggleUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Santo" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleToggleUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleToggleUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

            {/* The Hamburger menu displayed when Mobile view is activated */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              {/* Drop-down list */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                // Display on screen Origin
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleToggleNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleToggleNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              {/* End of drop-down menu on mobile */}
            </Box>

            <Link
              style={{
                display: 'flex',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#fff',
                alignItems: 'center',
              }}
              to="/"
            >
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  // fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  // color: "inherit",
                  textDecoration: 'none',
                }}
              >
              SHOP
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar> 
      {
        isHover ?
          <Category/>
          :''
      }
    </>
  )
}
export default ResponsiveAppBar
