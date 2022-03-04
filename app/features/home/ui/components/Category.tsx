import { Box, Link } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'

type Props = {
  currentMenu: string;
}

const Category = ({ currentMenu }: Props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem>
        <Link fontWeight="bold">
          Concept
          <Box borderRadius={6} w={25} h={1} bg="#1DA154" />
        </Link>
      </GridItem>
      <GridItem>
        <Link>
          Popular
        </Link>
      </GridItem>
      <GridItem>
        <Link>
          New
        </Link>
      </GridItem>
    </Grid>
  )
}

export default Category;