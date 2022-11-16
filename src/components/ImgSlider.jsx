import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <hero>
          <text> Example</text>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1710/1401710-h-d5b5b38f351d" alt=""></img>
        </hero>
      </Wrap>

      <Wrap>
        <hero>
          <text> This is Example text</text>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4166/764166-h" alt=""></img>
        </hero>
      </Wrap>

      {/* <Wrap>
        <a>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4324/1404324-h-99edfa90363d" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9962/1409962-h-c25ae6aa178a" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5460/1355460-h-5d64b6c3362f" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5799/1375799-h-5b1d33cc0f0f" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6460/1396460-h-8e67db6c9630" alt="" />
        </a>
      </Wrap> */}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  height: 500px;

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

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 500px;
  z-index:4;

  hero {
    width: 100%;
    height: 500px;
    background-size:cover;
    background-position:center;
    position:relative;
    background-image:img;
  }

  
  text {
    margin-top: 15px;
    margin-right: 15px;
    width: 30em;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6783088235294117) 100%); 100%);
  }

    img {
      width: 100%;
      height: 100%;
      z-index: 5;
      padding-left:30%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
