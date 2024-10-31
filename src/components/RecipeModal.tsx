import { Button, Modal, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { MealDetails } from '../types';
import RecipeModalContent from './RecipeModalContent';
import RecipeModalSkeleton from './RecipeModalSkeleton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  mealDetails: MealDetails | undefined;
};

function RecipeModal({ isOpen, onClose, loading, mealDetails }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {loading ? (
          <RecipeModalSkeleton />
        ) : (
          mealDetails && <RecipeModalContent mealDetails={mealDetails} />
        )}

        {/* <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Hola papu</ModalBody> */}
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RecipeModal;
