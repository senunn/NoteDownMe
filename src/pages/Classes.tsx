import { Box, Button, Card, Flex, Grid, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { RiAddBoxFill } from "react-icons/ri";

const Classes = () => {
  const classDetails = [
    {
      Title: "Grade 6",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      Title: "Grade 7",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      Title: "Grade 8",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      Title: "Grade 9",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      Title: "Grade 9",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
  ];
  return (
    <>
    <Flex justify="space-between" paddingX="5" paddingY="4">
        <HStack>
            <Text colorPalette="teal" paddingX="5" textStyle="2xl">
                Class Set
            </Text>
        </HStack>
        <Button colorPalette="teal" variant="outline">
        Add Class <RiAddBoxFill />
      </Button>
    </Flex>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} paddingX={5} paddingY={4}>
          {classDetails.map((item) => (
            <Card.Root
              flexDirection="row"
              overflow="hidden"
              maxW="xl"
              marginY="5"
            >
              <Box>
                <Card.Body>
                  <Card.Title mb="2">{item.Title}</Card.Title>
                  <Card.Description>{item.Description}</Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </Card.Footer>
              </Box>
            </Card.Root>
          ))}
      </SimpleGrid>

    </>
  );
};

export default Classes;
