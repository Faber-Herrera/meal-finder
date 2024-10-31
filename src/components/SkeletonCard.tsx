import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function SkeletonCard() {
  return (
    <Card boxShadow='lg'>
      <CardBody>
        <Skeleton mt='1' height={'17vh'} />
        <SkeletonText noOfLines={2} mt='4' spacing='4' skeletonHeight='2' />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
