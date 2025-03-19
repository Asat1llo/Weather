import styled from "styled-components";

export const WeatherBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const WeatherDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 40px;
  border-radius: 20px;
  background: ${({ bg }) => bg};
  box-shadow: 0px 34px 101px 0px rgba(9, 0, 63, 0.38);
  transition: background 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px;
    gap: 30px;
  }
`;

export const WeatherGradusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const WeatherImg = styled.img`
  width: 82px;
  height: 82px;
  transform: translateY(${({ transform }) => (transform ? "0" : "-70%")});
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${({ transform }) => (transform ? "1" : "0.5")};

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const WeatherGradusDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const WeatherGradusNumber = styled.span`
  display: flex;
  gap: 5px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 64px;
  color: ${({ hours }) => (hours ? "#8497C9" : "#296399")};
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

export const WeatherGradusText = styled.span`
  color: #658CAF;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const WeatherDescBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const WeatherDescBoxItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const WeatherDescBoxItemsImg = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const WeatherDescBoxItemsText = styled.span`
  color: #668CAF;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const WeatherRoll = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 6px solid #91B3D2;
  background-color: transparent;
`;

export const WeatherForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const WeatherFormInput = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-size: 16px;
  padding-top: 10px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #296399;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

export const WeatherFormSubmit = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #296399;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 250px;
    font-size: 18px;
  }
`;

export const WeatherTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #296399;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
