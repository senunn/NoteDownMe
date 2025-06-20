import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/login/Login";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Classes from "./pages/Classes";
import Details from "./pages/classes/Details";
import type { ReactNode } from "react";
import GlassyBackground from "./components/pageComponents/GlassyBackground";
import ProtectedRoute from "./components/ServiceComponents/ProtectedRoute";

function Layout({ children }: any) {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      templateColumns={{ lg: "200px 1fr" }}
      templateRows={{ base: "auto 1fr", lg: "auto 1fr" }}
      minH="100vh"
    >
      <GridItem area="nav" bg="teal.500" p={4}>
        Nav
      </GridItem>
      <GridItem area="main" bg="black" p={4}>
        {children}
      </GridItem>
    </Grid>
  );
}

function LayoutNew({
  children,
  px = [4, 8, 12],
}: {
  children: ReactNode;
  px?: number[];
}) {
  return (
    <Box position="relative" bg="#0a0f0d" minH="100vh" overflow="hidden">
      <GlassyBackground/>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"main"`,
        }}
        templateColumns={{ base: "1fr", lg: "1fr" }}
        minH="100vh"
      >
        <GridItem area="main" p={4}>
          <Container maxW="6xl" px={px}>
            {children}
          </Container>
        </GridItem>
      </Grid>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <ProtectedRoute>
            <Layout>
              <About />
            </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Classes"
          element={
            <ProtectedRoute>
            <Layout>
              <Classes />
            </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Classes/test"
          element={
            <ProtectedRoute>
            <LayoutNew>
              <Classes />
            </LayoutNew>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Classes/:classes"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
