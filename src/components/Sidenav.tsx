import { Heading, Link, SkeletonText, VStack } from '@chakra-ui/react';
import { Category } from '../types';

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: 'blue.400',
  color: 'white',
  fontWeight: 'bold',
};

function Sidenav({ categories, selectedCategory, setSelectedCategory, loading }: Props) {
  return loading ? (
    <SkeletonText noOfLines={8} mt='1' spacing='6' skeletonHeight='2' />
  ) : (
    <>
      <Heading color='blue.400' fontSize={12} fontWeight='bold' mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align='stretch'>
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            px={2}
            py={1}
            borderRadius={5}
            key={c.strCategory}
            _hover={{ textDecoration: 'none' }}
            {...(selectedCategory.strCategory === c.strCategory && selectedProps)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default Sidenav;
