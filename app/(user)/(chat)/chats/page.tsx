import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chats - Doora",
  description: "View all your conversations with buyers and sellers on Doora.",
};

export default function ChatsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Your Chats
        </h1>
        <div className="bg-card rounded-lg p-6">
          <p className="text-muted-foreground">
            Your chat conversations will appear here. Start browsing items to connect with sellers!
          </p>
        </div>
      </div>
    </div>
  );
}
