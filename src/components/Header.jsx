import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  __getUserLogin,
} from "../redux/modules/user/userSlice";

const Header = ({ handleClickLogin }) => {
  const handleLogin = () => {
    handleClickLogin();
  };
  // const dispatch = useDispatch()
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  

  useEffect(() => {
    // console.log(userName);
  }, [userName]);
  // const getUserLogin = () => {
  //   dispatch(__getUserLogin())
  // }
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={() => handleLogin()}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="Home" />
              <span>HOME</span>
            </Link>
            <Link to="/">
              <img src="/images/search-icon.svg" alt="Search" />
              <span>SEARCH</span>
            </Link>
            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto}></UserImg>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      pad: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: white;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        content: "";
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
