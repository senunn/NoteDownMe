import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import PopUp from "@/components/pageComponents/PopUp";

const Classes = () => {
  const [classData, setClassData] = useState([
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
      Title: "Grade 10",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    
  ]);

  

  const handleAddClass = ({ name, description }: { name: string; description: string }) => {
  setClassData(prev => [...prev, { Title: name, Description: description }]);
};

  const myButton = (
    <Button colorPalette="teal" variant="outline">
      Add Class <RiAddBoxFill />
    </Button>
  );

  return (
    <>
      <Flex justify="space-between" paddingX="5" paddingY="4">
        <HStack>
          <Text color="teal.500" paddingX="5" textStyle="4xl">
            Class Set
          </Text>
        </HStack>

        <PopUp ButtonComponent={myButton}  addClass={handleAddClass}/>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} paddingX={5} paddingY={4}>
        {classData.map((item) => (
          <Card.Root
            flexDirection="row"
            overflow="hidden"
            maxW="xl"
            marginY="5"
          >
            <Box>
              <Card.Body>
                <Card.Title mb="2" color="teal.500" textStyle="2xl">
                  {item.Title}
                </Card.Title>
                <Card.Description>{item.Description}</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Button colorPalette="teal">Edit</Button>
                <Button colorPalette="red" variant="outline">
                  Delete
                </Button>
              </Card.Footer>
            </Box>
          </Card.Root>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Classes;
