import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-size: 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    background: linear-gradient(to bottom, #ff4b2b, #ff416c);
  }
`;

export const LoginImage = styled.img`
 height: 80%;

  @media screen and (max-width: 768px) {
   display:none;
  }
`;

export const ContainerItens = styled.div`
  background-color: #ffffff;
  border-top-right-radius: 70px;
  height: 80%;
  padding: 25px 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  img {
    width: 200px;
    margin: auto;
    @media screen and (max-width: 768px) {
    width: 200px;
    margin: 20px auto;

  }
  }

  h1 {
    font-weight: 500;
    font-size: 25px;
    line-height: 20px;
    color: #6d6969;
    text-align: center;
    margin-top: 2px;
  }

  form {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      position: relative;
    width: 247px;
    display: flex;
    justify-content: center;
    align-items: center;;
  }
  }

  @media screen and (max-width: 768px) {
    width: 448px;
    border-top-right-radius: 217px;
    height: 100%;

  }
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #6d6969;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const ErrorMesssage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 3px;
`;

export const Input = styled.input`
  background: #eee;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  width: 391px;
  height: 40px;
  border: ${(props) => (props.error ? '2px solid  #cc1717' : 'none')};
  padding-left: 10px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
   width: 348px;
  }
`;

export const SiginLink = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #6d6969;
  margin-top: 5px;
  margin-left: 5px;

  a {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`;
