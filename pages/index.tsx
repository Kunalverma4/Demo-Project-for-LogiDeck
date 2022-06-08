import tw from 'tailwind-styled-components'
import { Text } from '../Components/Text'

const App = () => {
  const DivContainer = tw.div` flex gap-2`
  const Container = tw.div`
  flex-1
   border-2
  text-4xl
  h-60
  w-60
  border-2`
  return (
    <DivContainer>
      <Container className='bg-blue-500 '>
        <Text id='Next' />
      </Container>
      <Container className='bg-blue-600 '>
        <Text id='Styles' />
      </Container>
      <Container className='bg-blue-800 '>
        <Text id='Locale' />
      </Container>
    </DivContainer>
  )
}
export default App
