import {
  Box,
  Button,
  Portal,
  Stack,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

type PopUpProps = {
  ButtonComponent: React.ReactElement;
};

const PopUp = ({ ButtonComponent }: PopUpProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen}>
        {ButtonComponent}
      </span>

      {open && (
        <Portal>
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="blackAlpha.700"
            backdropFilter="blur(4px)"
            zIndex="1000"
            onClick={onClose}
          />

          {/* Modal content */}
          <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="white"
            p="6"
            borderRadius="md"
            boxShadow="xl"
            zIndex="1001"
            width="90%"
            maxW="500px"
          >
            <Stack>
              <Text fontSize="xl" fontWeight="bold">
                Add Class
              </Text>

              <Box>
                <Text mb="1">Class Name</Text>
                <Input placeholder="Enter class name..." color="black"/>
              </Box>

              <Box>
                <Text mb="1">Class Description</Text>
                <Textarea placeholder="Enter class description..." color="black"/>
              </Box>

              <Button colorScheme="blue" onClick={onClose}>
                Submit
              </Button>
            </Stack>
          </Box>
        </Portal>
      )}
    </>
  );
};

export default PopUp;
