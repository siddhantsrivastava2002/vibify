import React from 'react'
import NextLink from 'next/link'
import {
    Box,
    List,
    ListItem,
    ListIcon,
    LinkBox,
    LinkOverlay,
  } from '@chakra-ui/layout'
  import {
    MdPlaylistAdd,
    MdFavorite,
  } from 'react-icons/md'
 
  const musicMenu = [
    {
      name: 'Create Playlist',
      icon: MdPlaylistAdd,
      route: '/',
    },
    {
      name: 'Favorites',
      icon: MdFavorite,
      route: '/favorites',
    },
  ]
const Usermenu = () => {
  return (
    
       <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
   
  )
}

export default Usermenu
