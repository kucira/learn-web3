import { Container, useMediaQuery } from "@chakra-ui/react";
import HomeMobile from "~/features/home/ui/HomeMobile";

export default function Index() {
    const [isDesktop] = useMediaQuery("(min-width: 1280px)");

    if (isDesktop) {
        return <Container maxW={"container.xl"}>Desktop Mode</Container>;
    }

    return (
        <Container maxW={"container.sm"}>
            <HomeMobile />
        </Container>
    );
}
