import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ItemElement from './ItemElement.jsx'

const ItemList = () => (
  <Grid relaxed columns={4}>
    <Grid.Column>
      <ItemElement />
    </Grid.Column>
    <Grid.Column>
      <ItemElement />
    </Grid.Column>
    <Grid.Column>
      <ItemElement />
    </Grid.Column>
    <Grid.Column>
      <ItemElement />
    </Grid.Column>
    <Grid.Column>
      <ItemElement />
    </Grid.Column>
    <Grid.Column>
      <ItemElement />
    </Grid.Column>     
  </Grid>
)

export default ItemList;

// const ItemList = () => (
//   <Grid relaxed columns={4}>
//     <Grid.Column>
//       <Image src='http://semantic-ui.com/images/wireframe/image.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='http://semantic-ui.com/images/wireframe/image.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='http://semantic-ui.com/images/wireframe/image.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='http://semantic-ui.com/images/wireframe/image.png' />
//     </Grid.Column>
//    <Grid.Column>
//       <Image src='http://semantic-ui.com/images/wireframe/image.png' />
//     </Grid.Column>  
//   </Grid>
// )

// export default ItemList