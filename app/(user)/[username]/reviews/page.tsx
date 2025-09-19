import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Star, Filter, ThumbsUp } from "lucide-react";

interface UserReviewsPageProps {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata({ params }: UserReviewsPageProps): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `Reviews for @${username} - Doora`,
    description: `Read reviews and ratings for ${username} on Doora marketplace.`,
  };
}

const mockReviews = [
  {
    id: 1,
    reviewer: "fashion_lover",
    rating: 5,
    date: "2 days ago",
    comment: "Amazing seller! Item was exactly as described and shipped super fast. The vintage t-shirt is in perfect condition. Highly recommend!",
    item: "Vintage Stussy T-Shirt",
    helpful: 12,
  },
  {
    id: 2,
    reviewer: "style_seeker",
    rating: 5,
    date: "1 week ago",
    comment: "Great communication and fast shipping. The handbag is beautiful and authentic. Maya is a trusted seller!",
    item: "Designer Handbag",
    helpful: 8,
  },
  {
    id: 3,
    reviewer: "vintage_collector",
    rating: 4,
    date: "2 weeks ago",
    comment: "Good quality item, though it had a small stain that wasn't mentioned. Overall happy with the purchase.",
    item: "Zara Jacket",
    helpful: 5,
  },
  {
    id: 4,
    reviewer: "sustainable_shopper",
    rating: 5,
    date: "3 weeks ago",
    comment: "Love supporting sellers like Maya who care about sustainability. Item was packaged beautifully and arrived quickly.",
    item: "Urban Outfitters Bag",
    helpful: 15,
  },
];

export default async function UserReviewsPage({ params }: UserReviewsPageProps) {
  const { username } = await params;
  const averageRating = 4.9;
  const totalReviews = 156;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Reviews for @{username}
          </h1>
          <p className="text-muted-foreground">See what buyers are saying</p>
        </div>

        {/* Review Summary */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">{averageRating}</div>
                <div className="flex justify-center items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on {totalReviews} reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-sm w-8">{stars}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: stars === 5 ? '85%' : stars === 4 ? '10%' : '5%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8">
                      {stars === 5 ? '85%' : stars === 4 ? '10%' : '5%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Badge variant="outline">All Reviews ({totalReviews})</Badge>
            <Badge variant="outline">5 Stars (132)</Badge>
            <Badge variant="outline">4 Stars (16)</Badge>
            <Badge variant="outline">With Photos (45)</Badge>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">@{review.reviewer}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < review.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{review.comment}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Item: <span className="font-medium">{review.item}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
