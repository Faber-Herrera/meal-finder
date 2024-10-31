import { Container, SkeletonText } from '@chakra-ui/react';

function RecipeModalSkeleton() {
  return (
    <Container>
      <SkeletonText mt='4' mb='5' noOfLines={1} skeletonHeight={8}></SkeletonText>
      <SkeletonText noOfLines={1} skeletonHeight={280}></SkeletonText>
      <SkeletonText mt='4' noOfLines={5} spacing={4}></SkeletonText>
    </Container>
  );
}

export default RecipeModalSkeleton;
