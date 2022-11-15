import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectRecommend, __getMovie } from "../redux/modules/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommends = (props) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  const movies = useSelector(selectRecommend);
  // console.log(movies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Carousel {...settings}>
          {movies.map((item, index) => {
            return (
              <Wrap key={index}>
                {/* {movies[key].id} */}
                <Link to={`/detail/` + index}>
                  <img src={item.cardImg} alt={item.title} />
                </Link>
                <DescCon>
                <Description>Sesuatu</Description>
                </DescCon>
              </Wrap>
            );
          })}
        </Carousel>
      </Content>
    </Container>
  );
};

const DescCon = styled.div`
  display:flex;
  height:50%;
  background-color:black;
  z-index:14;
`

const Description = styled.p`
  margin-top: 30%;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6783088235294117) 100%); 100%);
  position: fixed;
  z-index:15;
`

const Carousel = styled(Slider)`
  margin-top: 20px;
  padding left: 200px;
  height: 100%;
  width:100%;
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
    left: -75px;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6783088235294117) 100%); 100%);
  }

  .slick-next {
    right: -75px;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6783088235294117) 100%);
  }
`;

const Container = styled.div`
  padding: 0 0 5px;
  height: 300px;
`;

const Content = styled.div`
  display: flex;
  gap : 25px;
  width: 100%;
  height: 250px;
`;

const Wrap = styled.div`
  padding-top: 20px;
  width: 170px;
  height: 225px;
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

