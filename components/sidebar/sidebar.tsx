import NextImage from 'next/image'
import NextLink from 'next/link'
import Navmenu from './navmenu'
import Usermenu from './usermenu'
import Playlist from './playlist'
import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
  } from '@chakra-ui/layout'
  

const Sidebar =() => {
  return(
    <Box 
    width="100%"
    height="calc(100vh - 100px)"
    bg="black"
    paddingX="5px"
    color="gray">
      <Box paddingY="20px" height="100%">
      <Box width="120px" marginBottom="20px" paddingX="20px">
      <NextImage src="/logo.svg" height={60} width={120} />
      </Box>
      <Navmenu/>
      <Usermenu/>
      <Divider color="gray.800" />
       <Playlist/>  
      </Box>
      


    </Box>
  );
    
}

export default Sidebar