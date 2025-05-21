import {
  Box,
  Button,
  Portal,
  Stack,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

type PopUpProps = {
  ButtonComponent: React.ReactElement;
  addClass: (data: { name: string; description: string }) => void;
};

const PopUp = ({ ButtonComponent, addClass }: PopUpProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || description.trim() === "") return;

    addClass({ name, description });
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <>
      <span onClick={onOpen}>{ButtonComponent}</span>

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
            onClick={(e) => e.stopPropagation()}
          >
            <Stack>
              <Text fontSize="xl" fontWeight="bold">
                Add Class
              </Text>

              <Box>
                <Text mb="1">Class Name</Text>
                <Input
                  placeholder="Enter class name..."
                  color="black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>

              <Box>
                <Text mb="1">Class Description</Text>
                <Textarea
                  placeholder="Enter class description..."
                  color="black"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>

              <Button colorScheme="blue" onClick={handleSubmit}>
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
