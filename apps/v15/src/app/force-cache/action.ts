"use server";

import { getHello } from "./_get-hello";

export const getHelloAction = async () => {
  return await getHello();
};
