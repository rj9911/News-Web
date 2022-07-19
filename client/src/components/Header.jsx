// If blue ticks are not there then i write hyphen based & lower case.But when we add CSS in object then used flex in single inverted commams


import { AppBar, Toolbar, styled} from "@mui/material";
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
  background: #fff; // white color
  height: 70px;
`

const MenuIcon = styled(Menu)`
  color: #000;
`

const Image = styled('img')({
  height: 55, // px should not be applied
  margin: 'auto', // To hv Component at the mid of the Screen
  paddingRight: 70, //Shifted towards right after applied CSS now shifted to left.

})

const Header = () => {

  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

  return (
    <StyledHeader position="static">
        <Toolbar>
          <MenuIcon />
          <Image src={url} alt="logo" />
        </Toolbar>
    </StyledHeader>
  )
}

export default Header;