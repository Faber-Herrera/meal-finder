import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Meal } from '../types';

type Props = {
  meals: Meal[];
  loading: boolean;
};

function MainContent({ meals, loading }: Props) {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing='20px'>
      {meals.map((m) => (
        <Card boxShadow='lg' key={m.idMeal}>
          <CardBody>
            <Image src={m.strMealThumb} alt={m.strMeal} borderRadius='lg' />
            <Heading size='md' color='blue.400'>
              <Text mt='4'>{m.strMeal}</Text>
            </Heading>
          </CardBody>
          <CardFooter pt='0'>
            <Button color='white' bgColor='blue.400'>
              Ver receta
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
