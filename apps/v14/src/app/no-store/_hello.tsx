const getHello = async () => {
  const res = await fetch("http://localhost:3010/api/hello", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = res.json();

  return result;
};

export async function Hello() {
  const result = await getHello();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
