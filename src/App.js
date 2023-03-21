import {useState} from 'react'
import {Container,Heading,Span,Para,Button} from './styledComponents';


const App=()=>{
  const [count,setCount]=useState(0);

  const onClickCount=()=>{
    setCount(prevState=>(prevState+1))
  }

  return(
    <Container>
      <Heading>The Button has been clicked <Span>{count} </Span> times</Heading>
      <Para>Click the button to increase the count!</Para>
      <Button onClick={onClickCount}>Click Me!</Button>
    </Container>
  )
}

export default App;
