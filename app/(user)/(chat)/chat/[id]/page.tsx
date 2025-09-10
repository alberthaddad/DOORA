import { Metadata } from "next";

interface ChatPageProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Chat - Doora",
  description: "Chat with sellers and buyers on Doora marketplace.",
};

export default function ChatPage({ params }: ChatPageProps) {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Chat {params.id}
        </h1>
        <div className="bg-card rounded-lg p-6">
          <p className="text-muted-foreground">
            Chat functionality will be implemented here. Chat ID: {params.id}
          </p>
        </div>
      </div>
    </div>
  );
}
