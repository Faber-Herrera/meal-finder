import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { SearchForm } from '../types';

type Props = {
  onSubmit: (data: SearchForm) => void;
  handleToggleClick: () => void;
};

function Header({ onSubmit, handleToggleClick }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container maxW='3xl' mt='1'>
      <Grid
        gap={5}
        templateColumns={{
          base: `30px 1fr`,
          sm: `30px 1fr`,
          md: `1fr`,
        }}
      >
        <IconButton
          display={['inherit', 'inherit', 'none']}
          aria-label='Menu'
          icon={<HamburgerIcon />}
          onClick={() => handleToggleClick()}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input
              mr='2'
              focusBorderColor={formState.errors.search ? 'crimson' : 'blue.400'}
              isInvalid={!!formState?.errors?.search}
              {...register('search', { required: true })}
              type='text'
              placeholder="Intenta con 'chicken' o 'beans'"
            />
            <Button type='submit' color='white' bgColor='blue.400'>
              Buscar
            </Button>
          </InputGroup>
        </form>
      </Grid>
    </Container>
  );
}

export default Header;
