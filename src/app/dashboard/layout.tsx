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
    <div className="min-h-screen flex flex-col justify-between">
      <header className="border grow">
        <h1>Welcome to the dashboard</h1>
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="border grow">
        <p>Here&apos;s the main section</p>
        {/* This is where the page content/error will be rendered */}
        <div className="border border-red-500">{children} </div>
      </main>

      <footer className="border grow">
        <p>Footer</p>
      </footer>
    </div>
  );
}
