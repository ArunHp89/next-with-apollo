import { getApolloClient } from "../../apollo-client";
import HomePages from "./components/HomePages";
import { GET_HOME } from "../../lib/queryes/HomePage";

export async function getStaticProps() {
  const client = getApolloClient();

  const { data } = await client.query({
    query: GET_HOME,
  });

  const res = {
    home: data.page.homeacf,
  };
  return {
    props: {
      data: res,
    },
    revalidate: 1,
  };
}
export default function Home({ data }) {
  return (
    <div>
      <HomePages props={data} />
    </div>
  );
}
