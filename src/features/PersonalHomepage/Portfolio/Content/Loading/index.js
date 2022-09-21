import { Spinner, Wrapper } from "./styled";

const Loading = () => {
  return(
    <Wrapper>
      Please wait, projects are being loaded...
      <Spinner />
    </Wrapper>
  )
};

export default Loading;