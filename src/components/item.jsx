import { Card, CardHeader, CardBody, CardFooter, Button, Stack, Heading, Divider, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const item = ({id, imagen, nombre, descripcion}) => {
  return (
    <>
    <div key={id}>
    <Card maxW='sm'>
        <CardBody>
            <Image borderRadius='lg' src={imagen} />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{nombre}</Heading>
            </Stack>
        </CardBody>
    <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'> Comprar ahora! </Button>
                <Link to="/item/:id">
                <Button variant='ghost' colorScheme='blue'>  Descripcion: {descripcion} </Button>
                </Link>
            </ButtonGroup>
        </CardFooter>
    </Card>
    </div>
</>
  )
}

export default item;