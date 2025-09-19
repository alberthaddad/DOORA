import { Metadata } from "next";

interface ChatPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: "Chat - Doora",
  description: "Chat with sellers and buyers on Doora marketplace.",
};

export default async function ChatPage({ params }: ChatPageProps) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Chat {id}
        </h1>
        <div className="bg-card rounded-lg p-6">
          <p className="text-muted-foreground">
            Chat functionality will be implemented here. Chat ID: {id}
          </p>
        </div>
      </div>
    </div>
  );
}
