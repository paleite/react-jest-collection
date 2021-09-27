import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";

type IndexPageProps = {
  title: string;
};

const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => ({
  props: { title: await Promise.resolve("this is a server-side prop") },
});

const IndexPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ title }) => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <main>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <article>title from server: {title}</article>
    </main>
  </div>
);

export default IndexPage;
export { getServerSideProps };
