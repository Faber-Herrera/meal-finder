import { SimpleGrid } from '@chakra-ui/react';
import { Meal } from '../types';
import MealCard from './MealCard';
import SkeletonCard from './SkeletonCard';

type Props = {
  meals: Meal[];
  loading: boolean;
  toggleSidenav: boolean;
  openRecipe: (meal: Meal) => void;
};

function MainContent({ meals, loading, toggleSidenav, openRecipe }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={{ base: toggleSidenav ? 1 : 2, sm: 2, md: 3 }} spacing='20px'>
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loading &&
        meals.map((m) => <MealCard key={m.idMeal} meal={m} onClick={() => openRecipe(m)} />)}
    </SimpleGrid>
  );
}

export default MainContent;
