import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "Excellent service and professional staff. The diagnostic tests were thorough and results were explained clearly. Highly recommend MDC for anyone needing medical testing.",
      service: "Comprehensive Health Package"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Quick and efficient blood work. No waiting time and very clean facilities. The staff made me feel comfortable throughout the entire process.",
      service: "Blood Tests"
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 5,
      comment: "Professional team and state-of-the-art equipment. My X-ray results were ready within hours. Great experience overall!",
      service: "X-Ray Imaging"
    },
    {
      id: 4,
      name: "Vikash Singh",
      rating: 5,
      comment: "Outstanding service from booking to results. The technicians were knowledgeable and the facilities are top-notch. Will definitely return for future tests.",
      service: "Cardiac Screening"
    },
    {
      id: 5,
      name: "Kavitha Reddy",
      rating: 5,
      comment: "Very impressed with the professionalism and accuracy. The staff took time to explain everything and made sure I was comfortable.",
      service: "Women's Health Package"
    },
    {
      id: 6,
      name: "Arjun Gupta",
      rating: 5,
      comment: "Fast, reliable, and professional. The online booking system is convenient and the results portal is easy to navigate.",
      service: "Executive Health Check"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who have experienced our
            professional medical diagnostic services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.rating}.0
                  </span>
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {review.service}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-2">
              <div className="flex space-x-1 mr-2">
                {renderStars(5)}
              </div>
              <span className="text-lg font-bold text-foreground">5.0</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on 200+ patient reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;