async function getMockData() {
  throw new Error("Mock data fetch failed");
}

export default async function Dashboard() {
  const data = await getMockData();
  return (
    <>
      <h1>This is the dashboard page where we&apos;ll throw the error</h1>

      <pre>{JSON.stringify(data, null)}</pre>
    </>
  );
}
