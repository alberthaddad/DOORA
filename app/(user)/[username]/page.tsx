import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, Calendar, Star, Heart, MessageCircle, UserPlus } from "lucide-react";

interface UserProfilePageProps {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata({ params }: UserProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `@${username} - Doora`,
    description: `View ${username}'s profile, items, and reviews on Doora marketplace.`,
  };
}

const mockItems = [
  {
    id: 1,
    title: "Vintage Stussy T-Shirt",
    price: 19.50,
    condition: "Good",
    image: "/api/placeholder/300/300",
  },
  {
    id: 2,
    title: "Designer Handbag",
    price: 10.00,
    condition: "Excellent",
    image: "/api/placeholder/300/300",
  },
];

export default async function UserProfilePage({ params }: UserProfilePageProps) {
  const { username } = await params;
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar & Basic Info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-16 w-16 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold text-foreground mb-1">Maya&apos;s Vintage</h1>
                  <p className="text-muted-foreground mb-2">@{username}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Beirut, Lebanon</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Joined March 2024</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9 (156 reviews)</span>
                    <Badge className="ml-2">Verified</Badge>
                  </div>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">23</div>
                    <div className="text-sm text-muted-foreground">Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">156</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">89</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorite Seller
                  </Button>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Curating unique vintage pieces from the 80s and 90s. 
                    All items are carefully selected and authenticity guaranteed. 
                    Fast shipping within Lebanon!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="items" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="items">Items ({mockItems.length})</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (156)</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="items" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Image Placeholder</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground line-clamp-1">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-foreground">${item.price}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.condition}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-foreground">@buyer_{i + 1}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          &ldquo;Amazing seller! Item was exactly as described and shipped super fast. 
                          Highly recommend!&rdquo;
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About @{username}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Seller Story</h3>
                  <p className="text-muted-foreground">
                    Maya started collecting vintage pieces in college and turned her passion into 
                    a sustainable fashion business. Every item is hand-picked for quality and style.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Specializes In</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Vintage Clothing</Badge>
                    <Badge>80s Fashion</Badge>
                    <Badge>90s Streetwear</Badge>
                    <Badge>Designer Pieces</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Policies</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Ships within 1-2 business days</p>
                    <p>• 7-day return policy</p>
                    <p>• Authenticity guaranteed</p>
                    <p>• Careful packaging included</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
