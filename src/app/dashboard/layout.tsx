async function getItems() {
  return ["item1", "item2", "item3"];
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = await getItems();
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-between">
      <header className="border border-green-500 grow">
        <h1>Welcome to the dashboard</h1>
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="border grow p-4 space-y-4">
        <p>Here&apos;s the main section</p>
        {/* This is where the page content/error will be rendered */}
        <div className="border border-red-500">{children} </div>
        <p>We can still render some content after the error boundary.</p>
      </main>

      <footer className="border border-blue-500 grow">
        <p>Footer</p>
      </footer>
    </div>
  );
}
