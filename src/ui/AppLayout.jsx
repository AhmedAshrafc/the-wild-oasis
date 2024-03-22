import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { styled } from "styled-components";

// This is what will carry the whole application! Our grid container! By convention you name like this!
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  /* So the sidebar and header don't move and only the 'Main' part/space moves/scroll! */
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      {/* These components will ALWAYS be displayed no matter what path you go to! Since it is the parent of all the other child routes! */}
      <Header />
      <Sidebar />
      <Main>
        <Container>
          {/* All the child routes of AppLayout will be displayed/injected in this space! Of course, based on the current path! */}
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
