import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectRecommend } from "../features/movie/movieSlice";

const Originals = (props) => {
//   const movies = useSelector(selectRecommend);
//   console.log(movies, ":🛢️");

  return (
    <Container>
      <h4>Original</h4>
      <Content>
        {/* {movies &&
          movies.map((movie, key) => ( */}
            {/* <Wrap key={key}> */}
            <Wrap>
              {/* {movie.id} */}
              {/* <Link to={`/detail/` + movie.id}> */}
              <Link to = "/">
                {/* <img src={movie.cardImg} alt={movie.title} /> */}
                <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fhu_tao_hd_genshin_impact_6-1600x900.jpg&f=1&nofb=1&ipt=a6db8ff94dd0fcae0b2a773f7134ae555096e8adb6439f1f81547dca0543d8c6&ipo=images" alt = "" />
              </Link>
            </Wrap>
          {/* ))} */}

          <Wrap>
              {/* {movie.id} */}
              {/* <Link to={`/detail/` + movie.id}> */}
              <Link to = "/">
                {/* <img src={movie.cardImg} alt={movie.title} /> */}
                <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fhu_tao_hd_genshin_impact_6-1600x900.jpg&f=1&nofb=1&ipt=a6db8ff94dd0fcae0b2a773f7134ae555096e8adb6439f1f81547dca0543d8c6&ipo=images" alt = "" />
              </Link>
            </Wrap>

            <Wrap>
              {/* {movie.id} */}
              {/* <Link to={`/detail/` + movie.id}> */}
              <Link to = "/">
                {/* <img src={movie.cardImg} alt={movie.title} /> */}
                <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fhu_tao_hd_genshin_impact_6-1600x900.jpg&f=1&nofb=1&ipt=a6db8ff94dd0fcae0b2a773f7134ae555096e8adb6439f1f81547dca0543d8c6&ipo=images" alt = "" />
              </Link>
            </Wrap>

            <Wrap>
              {/* {movie.id} */}
              {/* <Link to={`/detail/` + movie.id}> */}
              <Link to = "/">
                {/* <img src={movie.cardImg} alt={movie.title} /> */}
                <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fhu_tao_hd_genshin_impact_6-1600x900.jpg&f=1&nofb=1&ipt=a6db8ff94dd0fcae0b2a773f7134ae555096e8adb6439f1f81547dca0543d8c6&ipo=images" alt = "" />
              </Link>
            </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Originals;
