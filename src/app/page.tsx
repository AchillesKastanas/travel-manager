import PageTitle from "@components/PageTitle/PageTitle";
import TransfersTable from "@components/TransfersTable/TransfersTable";

import PageNavigation from "@/components/PageNavigation/PageNavigation";

const Home = () => {
  return (
    <main className="content">
      <PageTitle title={"Transfers"} />
      <TransfersTable />
      <PageNavigation />
    </main>
  );
};

export default Home;
