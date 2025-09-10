import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Calendar, Star, Package, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "My Profile - Doora",
  description: "Manage your Doora profile, view your stats, and edit your information.",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your profile and view your activity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Info */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-12 w-12 text-primary" />
              </div>
              <CardTitle>Sarah Ahmed</CardTitle>
              <p className="text-sm text-muted-foreground">@sarah_ahmed</p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
                <MapPin className="h-4 w-4" />
                <span>Beirut, Lebanon</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Joined March 2024</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full mb-4">Edit Profile</Button>
              <div className="flex justify-center items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.8 (124 reviews)</span>
              </div>
            </CardContent>
          </Card>

          {/* Stats & Activity */}
          <div className="md:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Package className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <div className="text-sm text-muted-foreground">Items Sold</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-4">
                  <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">156</div>
                  <div className="text-sm text-muted-foreground">Favorites</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-4">
                  <User className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">89</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-4">
                  <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Sold: Vintage Denim Jacket</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                    <Badge>Completed</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Listed: Designer Handbag</p>
                      <p className="text-sm text-muted-foreground">5 days ago</p>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Purchased: Summer Dress</p>
                      <p className="text-sm text-muted-foreground">1 week ago</p>
                    </div>
                    <Badge>Delivered</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
