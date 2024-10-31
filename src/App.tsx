import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RecipeModal from './components/RecipeModal';
import Sidenav from './components/Sidenav';
import useHttpData from './hooks/UseHttpData';
import { Category, Meal, SearchForm } from './types';

const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;

const makeMealUrlByName = (search: string) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

const defaultCategory = {
  strCategory: 'Beef',
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { loading, data } = useHttpData<Category>(url);
  const { loading: loadingMeal, data: dataMeal } = useHttpData<Meal>(makeMealUrl(defaultCategory));
  const { loading: loadingByMealName, data: dataByMealName } = useHttpData<Meal>(
    makeMealUrlByName(searchTerm)
  );

  const hanldeOnSubmit = ({ search }: SearchForm) => setSearchTerm(search);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateAreas={`"header header"
                          "nav main"`}
        gridTemplateRows={'60px 1fr'}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        <GridItem
          boxShadow='lg'
          zIndex='1'
          pos='sticky'
          top='0'
          left='0'
          pt='2'
          area='header'
          bg='white'
        >
          <Header onSubmit={hanldeOnSubmit} />
        </GridItem>
        <GridItem
          pos='sticky'
          top='60px'
          left='0'
          p='5'
          area={'nav'}
          h='calc(100vh - 60px)'
          overflowY='auto'
        >
          <Sidenav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>
        <GridItem p='4' area={'main'} bg='gray.100'>
          <MainContent
            meals={dataByMealName ? dataByMealName : dataMeal}
            loading={loadingByMealName || loadingMeal}
            openRecipe={onOpen}
          />
        </GridItem>
      </Grid>

      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
