import NextImage from 'next/image'
import NextLink from 'next/link'
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
  import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite,
  } from 'react-icons/md'

const Sidebar =(props) => {
  return(
    <Box 
    width="100%"
    height="calc(100vh - 100px)"
    bg="black"
    paddingX="5px"
    color="gray">
      <Box paddingY="20px" height="100%">
      <Box width="120px" marginBottom="20px" paddingX="20px">
      <NextImage src="/vibe.png" height={1000} width={800} />

      </Box>
      </Box>
      


    </Box>
  );
    
}

export default Sidebar