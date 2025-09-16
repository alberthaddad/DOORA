"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Grid, List, Heart, Share2, Star } from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const mockItems = [
  {
    id: 1,
    title: "Vintage Stussy T-Shirt",
    brand: "Stussy",
    price: 19.50,
    originalPrice: 45.00,
    condition: "Good",
    size: "M",
    seller: "RetroBox",
    rating: 4.8,
    image: "/api/placeholder/300/400",
    isLiked: false,
    category: "Clothing"
  },
  {
    id: 2,
    title: "Designer Handbag",
    brand: "Pull & Bear",
    price: 10.00,
    originalPrice: 35.00,
    condition: "Excellent",
    size: "One Size",
    seller: "FashionLover",
    rating: 4.9,
    image: "/api/placeholder/300/400",
    isLiked: true,
    category: "Accessories"
  },
  {
    id: 3,
    title: "Zara Jacket",
    brand: "Zara",
    price: 6.00,
    originalPrice: 25.00,
    condition: "Good",
    size: "S",
    seller: "StyleSeeker",
    rating: 4.7,
    image: "/api/placeholder/300/400",
    isLiked: false,
    category: "Clothing"
  },
  {
    id: 4,
    title: "Levi's Jeans",
    brand: "Levi's",
    price: 11.00,
    originalPrice: 80.00,
    condition: "Very Good",
    size: "32W",
    seller: "DenimDealer",
    rating: 4.6,
    image: "/api/placeholder/300/400",
    isLiked: false,
    category: "Clothing"
  },
  {
    id: 5,
    title: "Urban Outfitters Bag",
    brand: "Urban Outfitters",
    price: 11.00,
    originalPrice: 40.00,
    condition: "Good",
    size: "One Size",
    seller: "BagCollector",
    rating: 4.5,
    image: "/api/placeholder/300/400",
    isLiked: true,
    category: "Accessories"
  },
  {
    id: 6,
    title: "Little Liffner Handbag",
    brand: "Little Liffner",
    price: 16.00,
    originalPrice: 120.00,
    condition: "Excellent",
    size: "One Size",
    seller: "LuxuryFinds",
    rating: 4.9,
    image: "/api/placeholder/300/400",
    isLiked: false,
    category: "Accessories"
  }
];

const categories = ["All", "Clothing", "Accessories", "Shoes", "Bags", "Jewelry"];
const brands = ["All Brands", "Stussy", "Zara", "Levi's", "Urban Outfitters", "Pull & Bear"];
const conditions = ["All Conditions", "Excellent", "Very Good", "Good", "Fair"];
const sizes = ["All Sizes", "XS", "S", "M", "L", "XL", "One Size"];

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const [selectedSize, setSelectedSize] = useState("All Sizes");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesBrand = selectedBrand === "All Brands" || item.brand === selectedBrand;
    const matchesCondition = selectedCondition === "All Conditions" || item.condition === selectedCondition;
    const matchesSize = selectedSize === "All Sizes" || item.size === selectedSize;
    
    return matchesSearch && matchesCategory && matchesBrand && matchesCondition && matchesSize;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Browse Sustainable Fashion
            </h1>
            <p className="text-lg style={{color: 'oklch(0.2354 0.0041 84.59)'}} max-w-2xl mx-auto">
              Discover unique, pre-loved fashion pieces from trusted sellers. 
              Every purchase helps reduce fashion waste and supports circular economy.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 style={{color: 'oklch(0.2354 0.0041 84.59)'}}" />
            <Input
              type="text"
              placeholder="Search for items, brands, or sellers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            {/* View Mode Toggle */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Condition</label>
                  <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedBrand("All Brands");
                      setSelectedCondition("All Conditions");
                      setSelectedSize("All Sizes");
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              {filteredItems.length} Items Found
            </h2>
            <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
              {selectedCategory !== "All" && `in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Items Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">Image Placeholder</span>
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
              </div>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-foreground line-clamp-1">{item.title}</h3>
                      <p className="text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}}">{item.brand}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.condition}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-foreground">${item.price}</span>
                    <span className="text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}} line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                    <span>Size {item.size}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}}">by {item.seller}</p>
                </div>
              </CardContent>
              
              <CardFooter>
                <div className="flex gap-2 w-full">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Message Seller
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Items
          </Button>
        </div>

        {/* Sign Up CTA for Non-Authenticated Users */}
        <Separator className="my-16" />
        
        <section className="text-center bg-muted/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to See More?
          </h2>
          <p className="text-lg style={{color: 'oklch(0.2354 0.0041 84.59)'}} max-w-2xl mx-auto mb-8">
            Sign up for free to access our full marketplace, save favorites, 
            and get personalized recommendations based on your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Sign Up Free
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Already have an account?
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-4 text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'oklch(0.2354 0.0041 84.59)'}}></span>
                Free to join
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'oklch(0.2354 0.0041 84.59)'}}></span>
                Secure payments
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'oklch(0.2354 0.0041 84.59)'}}></span>
                Verified sellers
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
