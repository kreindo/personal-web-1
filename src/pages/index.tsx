import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const Home: NextPage = () => {
  return (
    <Layout>
      <Maintenance />
      <SimplePortfolio />
    </Layout>
  );
};

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ahmadsan</title>
        <meta name="description" content="Ahmadsan's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </>
  );
};

const SimplePortfolio = () => {
  return (
    <div className="flex h-screen flex-col bg-yellow-500 text-slate-800">
      <div className="flex justify-center p-10">
        <h1 className="text-center text-2xl font-bold">My Works</h1>
      </div>
      <div className="flex grow flex-row flex-wrap items-center justify-center gap-5 p-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex h-52 w-52 items-center justify-center rounded-md border border-slate-800 bg-red-500">
      hello
    </div>
  );
};

const Maintenance = () => {
  return (
    <div className="h-screen bg-slate-900 text-white">
      <div className="flex h-full items-center justify-center">
        <div className="flex h-24 w-56 items-center justify-center rounded-md border border-yellow-500 bg-slate-900 shadow-md">
          <h2 className="font-semibold text-yellow-500">
            🚧 Under maintenance 🚧
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
