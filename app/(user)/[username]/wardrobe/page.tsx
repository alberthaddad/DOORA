import { Metadata } from "next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Share2, Star, Search, Filter, Grid, List } from "lucide-react";

interface UserWardrobePageProps {
  params: {
    username: string;
  };
}

export function generateMetadata({ params }: UserWardrobePageProps): Metadata {
  return {
    title: `@${params.username}'s Wardrobe - Doora`,
    description: `Browse ${params.username}'s collection of fashion items for sale on Doora.`,
  };
}

const mockItems = [
  {
    id: 1,
    title: "Vintage Stussy T-Shirt",
    brand: "Stussy",
    price: 19.50,
    originalPrice: 45.00,
    condition: "Good",
    size: "M",
    rating: 4.8,
    isLiked: false,
    category: "Clothing",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Designer Handbag",
    brand: "Pull & Bear",
    price: 10.00,
    originalPrice: 35.00,
    condition: "Excellent",
    size: "One Size",
    rating: 4.9,
    isLiked: true,
    category: "Accessories",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Zara Jacket",
    brand: "Zara",
    price: 6.00,
    originalPrice: 25.00,
    condition: "Good",
    size: "S",
    rating: 4.7,
    isLiked: false,
    category: "Clothing",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Urban Outfitters Bag",
    brand: "Urban Outfitters",
    price: 11.00,
    originalPrice: 40.00,
    condition: "Good",
    size: "One Size",
    rating: 4.5,
    isLiked: true,
    category: "Accessories",
    isAvailable: true,
  },
];

export default function UserWardrobePage({ params }: UserWardrobePageProps) {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            @{params.username}&apos;s Wardrobe
          </h1>
          <p className="text-muted-foreground">Browse their collection of fashion items</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search items..."
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Filter Toggle */}
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {/* View Mode Toggle */}
            <div className="flex border rounded-lg">
              <Button
                variant="default"
                size="sm"
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge className="bg-primary">All Items ({mockItems.length})</Badge>
          <Badge variant="outline">Clothing (2)</Badge>
          <Badge variant="outline">Accessories (2)</Badge>
          <Badge variant="outline">Available ({mockItems.filter(item => item.isAvailable).length})</Badge>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Image Placeholder</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className={`h-4 w-4 ${item.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary">
                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                </Badge>
                {!item.isAvailable && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-sm">
                      Sold
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-foreground line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.condition}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-foreground">${item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Size {item.size}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <div className="flex gap-2 w-full">
                  {item.isAvailable ? (
                    <>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Message Seller
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full" disabled>
                      Sold
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline">
            Load More Items
          </Button>
        </div>

        {/* Back to Profile */}
        <div className="text-center mt-8">
          <Button variant="ghost">
            ← Back to @{params.username}&apos;s Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
