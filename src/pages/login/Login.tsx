import { Input, VStack } from "@chakra-ui/react";
import LoginLayout from "@/components/pageComponents/LoginLayout";

const Login = () => {
  return (
    <LoginLayout>
      <VStack padding={8} width="75%">
        <Input placeholder="Email" variant="subtle" />
        <Input placeholder="Password" variant="outline" />
      </VStack>
    </LoginLayout>
  );
};

export default Login;
