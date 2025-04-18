export const getHello = async () => {
  const res = await fetch("http://localhost:3010/api/hello");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = res.json();

  return result;
};
