interface AppContentProps {
  children: React.ReactNode;
}

/**
 * Simple wrapper for page content
 * Server-side rendered for SEO
 */
export default function AppContent({ children }: AppContentProps) {
  return (
    <main className="pt-16">
      {children}
    </main>
  );
}
