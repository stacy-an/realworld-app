import { generateString } from "../helpers/data-helper.mjs";

export const validUser = {
  id: "t45AiwidW",
  uuid: "6383f84e-b511-44c5-a835-3ece1d781fa8",
  firstName: "Edgar",
  lastName: "Johns",
  username: "Katharina_Bernier",
  password: "s3cret",
  email: "Norene39@yahoo.com",
  phoneNumber: "625-316-9882",
  avatar: "https://cypress-realworld-app-svgs.s3.amazonaws.com/t45AiwidW.svg",
  defaultPrivacyLevel: "public",
  balance: 168137,
};

export const newRandomUser = {
  firstName: generateString(7),
  lastName: generateString(7),
  username: generateString(7),
  password: generateString(7),
};

export const updatedUser = {
  firstName: "Edgar",
  lastName: "Johns",
  email: "afterupdate@yahoo.com",
  phoneNumber: "625-316-1111",
};

export const defaultApiUser = {
  id: "qywYp6hS0U",
  firstName: "Arely",
  lastName: "Kertzmann",
  username: "Tavares_Barrows",
  email: "Aniya_Powlowski36@hotmail.com",
  phoneNumber: "537-041-4355",
};
