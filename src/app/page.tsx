import PageTitle from "@/components/PageTitle/PageTitle";
import TransfersTable from "@/components/TransfersTable/TransfersTable";

const Home = () => {
  return (
    <main className="content">
      <PageTitle title={"Transfers"} />
      <TransfersTable />
    </main>
  );
};

export default Home;
