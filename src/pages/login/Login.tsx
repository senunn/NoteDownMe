import { Button, Input, VStack } from "@chakra-ui/react";
import LoginLayout from "@/components/pageComponents/LoginLayout";
import { login } from "@/services/userServices";
import { useState } from "react";

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try{
      const response = await login({email, password});
      console.log("login success: ", response.data)
    }catch(err: any){
      setError(err.response?.data?.message || "login failed")
    } finally {
      setLoading(false);
    }
  }
  return (
    <LoginLayout>
      <VStack padding={8} width="75%">
        <Input placeholder="Email" variant="subtle" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="Password" variant="outline"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button loading={loading} onClick={handleLogin} colorScheme="teal">
          Login
        </Button>
      </VStack>
    </LoginLayout>
  );
};

export default Login;
