import Loading from "./Loading";
import Error from "./Error";
import Repositories from "./Repositories";

const Content = ({ status, repositories }) => {
  
  switch (status) {
    case "pending":
      return <Loading />

    case "error":
      return <Error />

    case "succes":
      return <Repositories repositories={repositories} />
  }
};

export default Content;