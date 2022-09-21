import { Descripiton, Link, LinkRow, LinksWrapper, LinkValue, List, ProjectName, TileItem } from "./styled";

const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
    <TileItem key={id}>
      <ProjectName>{name}</ProjectName>
      <Descripiton>{description}</Descripiton>
      <LinksWrapper>
        {!!homepage && (
          <LinkRow>
            <dt>Demo:</dt>
            <LinkValue>
              <Link
                target="_blank"
                rel="noreferrer"
                href={homepage}
              >
                {homepage}
              </Link>
            </LinkValue>
          </LinkRow>
        )}
        <LinkRow>
          <dt>Code:</dt>
          <LinkValue>
            <Link
              target="_blank"
              rel="noreferrer"
              href={html_url}
            >
              {html_url}
            </Link>
          </LinkValue>
        </LinkRow>
      </LinksWrapper>
    </TileItem>
    ))}
  </List>
);

export default Repositories;
  
