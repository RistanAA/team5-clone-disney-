import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// import { useSelector } from "react-redux";
// import { selectRecommend } from "../features/movie/movieSlice";

const Recommends = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8
  }
  //   const movies = useSelector(selectRecommend);
  //   console.log(movies, ":🛢️");

  return (
    <Container>
      <h3>Pilihan Top Untukmu</h3>
      {/* <Content> */}
        <Carousel {...settings}>
          {/* {movies &&
          movies.map((movie, key) => ( */}
          {/* <Wrap key={key}> */}
          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6625/746625-v" alt="" />
            </Link>
          </Wrap>
          {/* ))} */}

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8258/1328258-v-d286a921a890" alt="" />
            </Link>
          </Wrap>

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7610/1387610-v-eeeb3062aa0b" alt="" />
            </Link>
          </Wrap>

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7288/817288-v" alt="" />
            </Link>
          </Wrap>

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7288/817288-v" alt="" />
            </Link>
          </Wrap>

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7288/817288-v" alt="" />
            </Link>
          </Wrap>

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7288/817288-v" alt="" />
            </Link>
          </Wrap>

          <Wrap>
            {/* {movie.id} */}
            {/* <Link to={`/detail/` + movie.id}> */}
            <Link to="/">
              {/* <img src={movie.cardImg} alt={movie.title} /> */}
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7288/817288-v" alt="" />
            </Link>
          </Wrap>
        </Carousel>
      {/* </Content> */}
    </Container>

  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  padding left: 200px;
  height: 200px;
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
      font-size: 10px;
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
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Container = styled.div`
  padding: 0 0 5px;
  height: 300px;
`;

// const Content = styled.div`
//   display: flex;
//   gap : 7px;
//   width: 100%;
//   height: 100%;
// `;

const Wrap = styled.div`
  padding-top: 30px;
  width: 150px;
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
    border:2px;
    opacity: 0.9;
  }
`;

export default Recommends;
