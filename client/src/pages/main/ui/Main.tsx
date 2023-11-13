import {Filters, Header} from "@/widgets";
import {Container} from "@/shared";
import {SkinTable} from "@/widgets/skinTable";


export const Main = () => {
    return (
        <>
            <Header/>
            <Container>
                <Filters/>
                <SkinTable/>
            </Container>
        </>
    );
};

