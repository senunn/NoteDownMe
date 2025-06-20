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
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [editTarget, setEditTarget] = useState<null | {
    id: number;
    Title: string;
    Description: string;
  }>(null);
  const [showEditPopUp, setShowEditPopUp] = useState(false);
  const [classData, setClassData] = useState([
    {
      id: 1,
      Title: "Grade 6",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      id: 2,
      Title: "Grade 7",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      id: 3,
      Title: "Grade 8",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      id: 4,
      Title: "Grade 9",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
    {
      id: 5,
      Title: "Grade 10",
      Description:
        "Grade 6 Mathematics SipMadura Saturday 4.00 p.m to 6.00 p.m",
    },
  ]);

  const navigate = useNavigate();

  const handleAddClass = ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    setClassData((prev) => [
      ...prev,
      { id: Date.now(), Title: name, Description: description },
    ]);
  };

  const handleEdit = ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    setClassData((prev) =>
      prev.map((item) =>
        item.id === editTarget?.id
          ? { ...item, Title: name, Description: description }
          : item
      )
    );
    setEditTarget(null);
    setShowEditPopUp(false);
  };

  const handleDelete = (id: number) => {
    setClassData((prev) => prev.filter((item) => item.id !== id));
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

        {!showEditPopUp && <PopUp ButtonComponent={myButton} addClass={handleAddClass} />}

        {showEditPopUp && editTarget && (
          <PopUp
            ButtonComponent={<></>} 
            initialData={{
              name: editTarget.Title,
              description: editTarget.Description,
            }}
            mode="edit"
            addClass={handleEdit}
            forceOpen={true}
          />
        )}
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} paddingX={5} paddingY={4}>
        {classData.map((item) => (
          <Card.Root
            key={item.id}
            onClick={() =>
              navigate(`/Classes/${item.Title.replace(/\s+/g, "")}`)
            }
            _hover={{
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(80, 50, 150, 0.6)",
            }}
            flexDirection="row"
            overflow="hidden"
            maxW="md"
            marginY="5"
            marginX="10"
            boxShadow="2xl"
          >
            <Box>
              <Card.Body>
                <Card.Title mb="2" color="teal.500" textStyle="2xl">
                  {item.Title}
                </Card.Title>
                <Card.Description>{item.Description}</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Button
                  colorPalette="teal"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditTarget(item);
                    setShowEditPopUp(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  colorPalette="red"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                >
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
