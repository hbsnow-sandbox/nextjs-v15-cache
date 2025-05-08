import { getHello } from "./_get-hello";

export async function Hello() {
  const result = await getHello();
  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
