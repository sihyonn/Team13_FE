import { useRef } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@/assets/SearchIcon.jsx";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import routes from "@/constants/routes.js";

const Styled = {
  Container: styled.div`
    position: relative;

    padding: 0 1rem;
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border: 1.5px solid ${({ theme }) => theme.color.subBlack};
    border-radius: 0.25rem;

    background-color: ${({ theme }) => theme.color.white};
  `,
  Input: styled.input`
    margin-left: 1rem;
    width: calc(100% - 2rem - 36px - 4rem);
    height: 100%;

    border: none;
    font-size: 1.5rem;
    font-weight: 500;
  `,
};

/** 검색바 컴포넌트
 * @param {string} placeholder input의 placeholder
 * @param {string} uri 검색 uri [routes.fund, routes.celebrity]
 * @param {any} props 기타
 */

function SearchBar({ placeholder, uri, ...props }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  const navigateToKeyword = (input) => {
    const keyword = input?.replace(/(\s*)/g, "");
    if (keyword === "") return;

    navigate({
      pathname: uri,
      search: `?keyword=${keyword}`,
    });
  };

  const handleEnterKeyPress = (event) => {
    if (event.key !== "Enter") return;

    navigateToKeyword(inputRef.current.value);
  };

  return (
    <Styled.Container {...props}>
      <SearchIcon />
      <Styled.Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onKeyPress={handleEnterKeyPress}
      />
      <Button
        isHoverStyle={false}
        styleType={BUTTON_TYPE.TERTIARY}
        style={{ position: "absolute", right: "1rem" }}
        onClick={() => navigateToKeyword(inputRef.current.value)}
      >
        검색
      </Button>
    </Styled.Container>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  uri: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "검색어를 입력하세요",
  uri: routes.fund,
};

export default SearchBar;
