import { Button, Card, CardBody, CardFooter, Heading, Image, Text } from '@chakra-ui/react';
import { Meal } from '../types';

type Props = {
  meal: Meal;
  onClick: () => void;
};

function MealCard({ meal, onClick }: Props) {
  return (
    <Card boxShadow='lg'>
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius='lg' />
        <Heading size='md' color='blue.400'>
          <Text mt='4'>{meal.strMeal}</Text>
        </Heading>
      </CardBody>
      <CardFooter pt='0'>
        <Button color='white' bgColor='blue.400' onClick={onClick}>
          Ver receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;
