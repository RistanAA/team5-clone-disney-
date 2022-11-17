import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTrending, __getMovie } from "../redux/modules/movie/movieSlice";
import Slider from "react-slick";

const Trending = (props) => {
  const movies = useSelector(selectTrending);
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Container>
      <h3>Trending</h3>
      <Content>
        <Carousel {...settings}>
          {movies.map((item, index) => {
            //console.log(item)
            return (
              <WrapContainer key={index}>
                <Link to={`/detail/` + index}>
                  <Wrap >
                    {/* {movies[key].id} */}
                    <img src={item.cardImg} alt={item.title} />
                    <DescCon>
                      <Title>{item.title}</Title>
                      <Description>{item.description}</Description>
                    </DescCon>
                  </Wrap>
                </Link>
              </WrapContainer>
            );
          })}
        </Carousel>
      </Content>
    </Container>
  );
};

const DescCon = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 60px; */
  padding: 40px 20px;
  height: 100%;
  width: 100%;
  background: rgb(4, 7, 20);
  background: linear-gradient(
    0deg,
    rgba(4, 7, 20, 0.8799894957983193) 24%,
    rgba(4, 7, 20, 0.3981967787114846) 100%
  );
  position: fixed;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
`;

const Description = styled.div`
  /* background-color: red; */
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 10px;
  z-index: 1;
`;
const Title = styled.h3`
  /* background-color: red; */
  /* font-size: 12px;
  font-weight: bold; */
  z-index: 1;
`;

const Carousel = styled(Slider)`
  /* margin-top: 20px; */
  /* padding-left: 200px; */
  /* background-color: red; */
  height: 100%;
  width: 100%;
  z-index: 3;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 20px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -60px;
    margin-top: 5px;
    width: 80px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .slick-next {
    right: -60px;
    margin-top: 5px;
    width: 80px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const Container = styled.div`
  padding: 0 0 5px;
  height: 300px;
`;

const Content = styled.div`
  display: flex;
  /* gap: 45px; */
  width: 100%;
  height: 200px;
  /* background-color: red; */
`;

const WrapContainer = styled.div`
  padding: 5px;
`;

const Wrap = styled.div`
  /* padding-top: 20px; */
  width: 100%;
  height: 200px;
  border-radius: 5px;
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
    transform: scale(1.2);
    z-index: 2;
    border: 2px;
    opacity: 1;
    div {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
`;

export default Trending;
