import React from 'react'
import { Box, List, ListItem, ListIcon, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import NextLink from 'next/link'
const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)


const Playlist = () => {
  return (
    <Box height="66%" overflowY="auto" paddingY="20px">
    <List spacing={2}>
      {playlists.map((playlist) => (
        <ListItem paddingX="20px" key={playlist.id}>
          <LinkBox>
            <NextLink
              href={{
                pathname: '/playlist/[id]',
                query: { id: playlist.id },
              }}
              passHref
            >
              <LinkOverlay>{playlist.name}</LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  </Box>
  )
}

export default Playlist
