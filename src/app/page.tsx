"use client";
import PageTitle from "@components/PageTitle/PageTitle";
import TransfersTable from "@components/TransfersTable/TransfersTable";

import PageNavigation from "@/components/PageNavigation/PageNavigation";
import { useResize } from "@/hooks/useResize";

const Home = () => {
  const { isMobile } = useResize();

  return (
    <main className="content">
      {isMobile ? (
        <>
          <TransfersTable />
        </>
      ) : (
        <>
          <PageTitle title={"Transfers"} />
          <TransfersTable />
          <PageNavigation />
        </>
      )}
    </main>
  );
};

export default Home;
