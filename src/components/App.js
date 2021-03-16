import React from 'react';

import Accordion from './Accordion';
import Search from './Search';

const items = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit[1].',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat similique nobis natus ex eaque rem ratione iste iure sequi nesciunt repudiandae dolores exercitationem voluptatum rerum laudantium a, in nam.'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit[2].',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat similique nobis natus ex eaque rem ratione iste iure sequi nesciunt repudiandae dolores exercitationem voluptatum rerum laudantium a, in nam.'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit[3].',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat similique nobis natus ex eaque rem ratione iste iure sequi nesciunt repudiandae dolores exercitationem voluptatum rerum laudantium a, in nam.'
  }
]

const App = () => {
  return (
    <div>
      <br />
      <Search />
      <br />
      <Accordion items={items}/>
    </div>
  );
}
 
export default App;