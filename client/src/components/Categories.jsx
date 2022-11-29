import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Pottery'
          image='https://i0.wp.com/www.maverickbird.com/wp-content/uploads/2019/05/28827321_2088915784458791_6616933066386531637_o.jpg'
        />
        <Categorie
          name='Handloom'
          image='https://www.iastoppers.com/uploads/articles/Handloom_Industry_in_India_Mains_Article.jpg'
        />
        <Categorie
          name='Carving'
          image='https://img.staticmb.com/mbcontent//images/uploads/2021/6/teak-wood-carving-doors.jpg'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Chappals'
          image='https://learn.podium.school/wp-content/uploads/2021/11/image-16.png'
        />
        <Categorie
          name='Paintings'
          image='https://miro.medium.com/max/1400/1*h7V5eSf8ub-R6GlxXoW7Zg.jpeg'
        />
      </div>
    </section>
  );
};

export default Categories;
