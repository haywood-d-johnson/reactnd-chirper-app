export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    typr: RECEIVE_USERS,
    users,
  };
}
