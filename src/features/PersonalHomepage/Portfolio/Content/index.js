import Loading from "./Loading";
import Error from "./Error";
import Repositories from "./Repositories";

const Content = ({ status, repositories }) => {
  
  if(status === "error") {
    return (
      <Error />
    )
  }

  if(status === "pending") {
    return (
      <Loading />
    )
  }

  if(status === "succes") {
    return (
      <Repositories repositories={repositories} />
    )
  }
};

export default Content;