import { Container, useMediaQuery } from "@chakra-ui/react";
import { useLoaderData } from "remix";
import HomeMobile from "~/features/home/ui/HomeMobile";
import { loadNfts } from "~/shared/api/fetch/nfts";

// export const loader = async () => {
//     return loadNfts();
// }

export default function Index() {
    // const [isDesktop] = useMediaQuery("(min-width: 1280px)");
    const data = useLoaderData();

    // if (isDesktop) {
    //     return <Container maxW={"container.xl"}>Desktop Mode</Container>;
    // }

    return (
        <Container maxW={"container.sm"}>
            <HomeMobile data={data || []}/>
        </Container>
    );
}
