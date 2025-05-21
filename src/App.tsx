import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/login/Login";
import { Grid, GridItem } from "@chakra-ui/react";
import Classes from "./pages/Classes";

function Layout({ children }:any) {
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
      <GridItem area="nav" bg="coral" p={4}>
        Nav
      </GridItem>
      <GridItem area="main" bg="black" p={4}>
        {children}
      </GridItem>
    </Grid>
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
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Classes"
          element={
            <Layout>
              <Classes />
            </Layout>
          }
        />
        <Route
          path="/Login"
          element={
              <Login />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
