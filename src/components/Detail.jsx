import styled from "styled-components";

const Detail = (props) => {
    return (
    <Container>
        <Background>
            <img
            alt=""
            src="/images/login-background.jpg"
            // src="https://prod-delivery.disney-plus.net/v1/variant/disey/49B92C046117E89BC9243A68EE277A3B0D551D4599F23C10BF0B8C1E98AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"
            />
        </Background> 

        <ImageTitle>
          <h1>
        Title (Belum Final)
          </h1>
        </ImageTitle>
    </Container>
    );
};

const Container = styled.div`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle=styled.div`
 align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  };
`;




export default Detail