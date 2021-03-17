import { v4 as uuidv4 } from "uuid";

// FAKE DB
let users = [];

export const createUser = (res, req) => {
  // Get the data from the request
  const newUser = req.body;

  // Add the user to the array
  users.push({ ...newUser, id: uuidv4() });
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserID = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((users) => users.id === id);

  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  // Get the correct user to update
  const user = users.find((user) => user.id === id);

  // Update the data from the user
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((userToDelete) => userToDelete.id !== id);
};
