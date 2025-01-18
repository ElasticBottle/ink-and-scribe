interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: MarketingLayoutProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {children}
    </main>
  );
}
