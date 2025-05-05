import Banner from "./Banner";
import CardDisplay from "./Card";
import { SimpleGrid, Skeleton,Card,Stack,Image,Heading,Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { FetchListings } from "../features/todo/listingsSlice";
import { useEffect } from "react";
const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, error, data } = useSelector((state) => state.listings)

    useEffect(() => {
        dispatch(FetchListings())
    }, [])
    console.log(isLoading)

    if (isLoading) {
        return <>
            <Banner />
            <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                <Card maxW='md' m={2} cursor={"pointer"} className="cardD">
                    <Skeleton>
                        <Image className="image"
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/4/29/2/HUHH2015-Privacy_Chilco_1.jpg.rend.hgtvcom.1280.853.suffix/1430362328380.jpeg"
                        />
                    </Skeleton>
                    <Stack mt='1' spacing='3' p={2}>
                        <Skeleton>
                            <Heading size='md'>psps</Heading>
                        </Skeleton>
                        
                    </Stack>
                </Card>
                <Card maxW='md' m={2} cursor={"pointer"} className="cardD">
                    <Skeleton>
                        <Image className="image"
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/4/29/2/HUHH2015-Privacy_Chilco_1.jpg.rend.hgtvcom.1280.853.suffix/1430362328380.jpeg"
                        />
                    </Skeleton>
                    <Stack mt='1' spacing='3' p={2}>
                        <Skeleton>
                            <Heading size='md'>psps</Heading>
                        </Skeleton>
                        
                    </Stack>
                </Card>
                <Card maxW='md' m={2} cursor={"pointer"} className="cardD">
                    <Skeleton>
                        <Image className="image"
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/4/29/2/HUHH2015-Privacy_Chilco_1.jpg.rend.hgtvcom.1280.853.suffix/1430362328380.jpeg"
                        />
                    </Skeleton>
                    <Stack mt='1' spacing='3' p={2}>
                        <Skeleton>
                            <Heading size='md'>psps</Heading>
                        </Skeleton>
                        
                    </Stack>
                </Card>

        </SimpleGrid >
        </>
    }

return <div>
    <Banner />
    <div className="home-section" style={{ margin: "10px 20px" }}>
        <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>

            {data.map(({src,title,description,price},id)=>{
                return <CardDisplay key={id} src={src} title={title} description={description} price={price} />
            })}
        </SimpleGrid>
    </div>
</div>
}

export default Home;