import "../Card.css";
import { Card,Stack,Image,Heading,Text } from '@chakra-ui/react'

const CardDisplay = ({ src, title, description, price }) => {
  return (
    <Card maxW='md' m={2} cursor={"pointer"} className="cardD">
    <Image
      src={src}
      alt={title}
      className="image"
    />
    <Stack mt='1' spacing='3' p={2}>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='#ff385c' fontSize='xl'>
        R{price}/night
      </Text>
    </Stack>
</Card>
  );
};

export default CardDisplay;