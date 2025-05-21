import { Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import teachImage from "@/assets/TeachTrack.png";

function LoginLayout({ children }: any) {
  return (
    <Grid
      templateAreas={{
        base: `"left"`,
        lg: `"left right"`,
      }}
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      minH="100vh"
      minW="full"
    >
      <GridItem area="left">
        <Flex height="100%" justify="center" align="center" p={8}>
          {children}
        </Flex>
      </GridItem>

      <GridItem area="right" display={{ base: "none", lg: "block" }}>
        <Flex height="100%" justify="flex-start" align="center" px={10} py={7}>
          <Image
            src={teachImage}
            alt="TeachTrack"
            objectFit="cover"
            height="70%"
            width="70%"
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default LoginLayout;
