import { Box, Typography,styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  background: '#f44336', // Red Color
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  height: 40,
  marginBottom: 30, // To hv Container Down
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));   

const Image = styled('img')({
    height: 34,
    '&:last-child': {
      margin: '0 50px 0 20px', //Top Right Bottom
    }
})

const Text = styled(Typography)`
   font-size: 14px;
   font-weight: 300;
   margin-left: 50px; 
`

export const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

  return (
    <Container>
        <Text>
          For the best experience use inshorts app on your smartphone
        </Text>
        <Box style={{display: 'flex',marginLeft: 'auto'}}>
            <Image src={appleStore} alt="appleStore" />
            <Image src={googleStore} alt="googleStore" />
        </Box>
    </Container>
  );
}
