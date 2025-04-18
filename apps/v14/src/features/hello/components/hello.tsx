import { getHello } from "../api/get-hello";

export async function Hello() {
  const result = await getHello();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
