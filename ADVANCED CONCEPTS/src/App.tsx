import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null)
  return <main> 
 <Container as={Button} >Clickme </Container>
 <Input label="name" id="name" ref={input}></Input>
  </main>
}

export default App;
