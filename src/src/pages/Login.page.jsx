import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import styled from "styled-components";

import Button from "@/components/common/button/Button.jsx";
import Form from "@/components/common/form/Form.jsx";

import FORM_INFO from "@/constants/FORM_INFO.js";
import FORM_DEFAULT from "@/constants/FORM_DEFAULT.js";
import { Title } from "@/styles/CommonStyle.js";

const Styled = {
  LoginContainer: styled.div`
    margin-top: 4rem;
    padding: 0 calc((100vw - 22rem) / 2 - (100vw - 70rem) / 2 + 2rem);
    @media (max-width: 70rem) {
      padding: 0 calc((100vw - 22rem) / 2 - 2rem);
    }
  `,
  LoginTitle: styled(Title)`
    text-align: left;
    margin-bottom: 0.5rem;
  `,
  SignUpMsg: styled.div`
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    padding: 0.75rem;

    & span {
      color: ${({ theme }) => theme.color.mainRed};
      display: block;
      margin-left: 0.25rem;
      cursor: pointer;
    }
  `,
};

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Styled.LoginContainer>
      <Styled.LoginTitle>로그인</Styled.LoginTitle>
      <Form
        onSubmit={(data) => console.log(data)}
        onError={(err) => console.log(err)}
        inputInformations={FORM_INFO.SIGN_IN}
        defaultValues={FORM_DEFAULT.SIGN_IN}
      />
      <Button
        style={{
          width: "100%",
          padding: "1rem",
          margin: "0.375rem 0",
        }}
      >
        로그인
      </Button>
      <Button
        style={{
          width: "100%",
          padding: "1rem",
          margin: "0.375rem 0",
          backgroundColor: "#FFEB02",
          color: "#000000",
          fontWeight: "bold",
        }}
        isHoverStyle={false}
      >
        카카오 간편 로그인
      </Button>
      <Styled.SignUpMsg>
        아직 펀더링 계정이 없으신가요?
        <span onClick={() => navigate(routes.signUp)}>회원가입</span>
      </Styled.SignUpMsg>
    </Styled.LoginContainer>
  );
}

export default LoginPage;