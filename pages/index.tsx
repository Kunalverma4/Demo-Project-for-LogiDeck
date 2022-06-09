import tw from 'tailwind-styled-components'
import { Text } from '../Components/Text'
import { Button } from '../Components/Button/index'
// import BeatLoader

const App = () => {
  const DivContainer = tw.div` grid grid-cols-3 gap-1`
  const Container = tw.div` 
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
      <Container className='bg-blue-900'>
        <Button loading={true} className='bg-blue-600 h-20 w-12' />
      </Container>
    </DivContainer>
  )
}
export default App
