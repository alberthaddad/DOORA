import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Star, UserCheck, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Following - Doora",
  description: "View and manage the sellers and users you follow on Doora.",
};

const followingUsers = [
  {
    id: 1,
    username: "retro_finds",
    name: "Maya's Vintage",
    location: "Beirut, Lebanon",
    rating: 4.9,
    reviews: 156,
    items: 23,
    isVerified: true,
    bio: "Curating unique vintage pieces from the 80s and 90s",
  },
  {
    id: 2,
    username: "luxury_closet",
    name: "Luxury Closet",
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: 342,
    items: 67,
    isVerified: true,
    bio: "Pre-owned luxury fashion and accessories",
  },
  {
    id: 3,
    username: "sustainable_style",
    name: "Nour's Sustainable Style",
    location: "Amman, Jordan",
    rating: 4.7,
    reviews: 89,
    items: 15,
    isVerified: false,
    bio: "Eco-friendly fashion choices for conscious consumers",
  },
  {
    id: 4,
    username: "street_style_lb",
    name: "Lebanese Street Style",
    location: "Beirut, Lebanon",
    rating: 4.6,
    reviews: 234,
    items: 45,
    isVerified: true,
    bio: "Modern streetwear and contemporary fashion",
  },
];

export default function FollowingPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Following</h1>
          <p className="text-muted-foreground">Sellers and users you follow</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search following..."
              className="pl-10"
            />
          </div>
        </div>

        {followingUsers.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <UserCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Not following anyone yet</h3>
              <p className="text-muted-foreground mb-4">
                Discover amazing sellers and follow them to stay updated with their latest items
              </p>
              <Button>Discover Sellers</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Following {followingUsers.length} sellers
              </p>
            </div>

            <div className="grid gap-4">
              {followingUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-8 w-8 text-primary" />
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{user.name}</h3>
                          {user.isVerified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-1">@{user.username}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{user.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{user.rating} ({user.reviews} reviews)</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">{user.bio}</p>

                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-foreground font-medium">{user.items} items</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground">
                          Unfollow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">
                Load More
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
