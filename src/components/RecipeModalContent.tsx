import {
  Heading,
  Image,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import { MealDetails } from '../types';

type Props = {
  mealDetails: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  const ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];

    if (ingredient && measure) ingredients.push(`${ingredient} - ${measure}`);
  }

  return ingredients;
};

function RecipeModalContent({ mealDetails }: Props) {
  const ingredients = joinIngredients(mealDetails);
  return (
    <>
      <ModalHeader>{mealDetails.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width='100%'
          borderRadius='lg'
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
        />
        <Heading mt='4' mb='4' size='md'>
          Ingredientes
        </Heading>
        <OrderedList>
          {ingredients.map((i) => (
            <ListItem key={i}>{i}</ListItem>
          ))}
        </OrderedList>
        <Text mt='4' whiteSpace='pre-line'>
          {mealDetails.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
