import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Stethoscope, MapPin, Star, Phone, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultDoctor = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");

  const locations = ["all", "New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle"];

  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Clinical Psychologist", location: "New York", rating: 4.9, experience: "15 years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop", available: "Mon-Fri, 9AM-5PM", phone: "+1 (555) 123-4567" },
    { name: "Dr. Michael Chen", specialty: "Psychiatrist", location: "Los Angeles", rating: 4.8, experience: "12 years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop", available: "Mon-Sat, 10AM-6PM", phone: "+1 (555) 234-5678" },
    { name: "Dr. Emily Williams", specialty: "Child Psychologist", location: "Chicago", rating: 4.9, experience: "10 years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop", available: "Tue-Sat, 9AM-4PM", phone: "+1 (555) 345-6789" },
    { name: "Dr. James Brown", specialty: "Therapist", location: "Houston", rating: 4.7, experience: "8 years", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop", available: "Mon-Fri, 8AM-4PM", phone: "+1 (555) 456-7890" },
    { name: "Dr. Lisa Martinez", specialty: "Clinical Psychologist", location: "Miami", rating: 4.8, experience: "14 years", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop", available: "Mon-Thu, 10AM-7PM", phone: "+1 (555) 567-8901" },
    { name: "Dr. Robert Taylor", specialty: "Psychiatrist", location: "Seattle", rating: 4.9, experience: "20 years", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop", available: "Mon-Fri, 9AM-5PM", phone: "+1 (555) 678-9012" },
    { name: "Dr. Amanda White", specialty: "Counselor", location: "New York", rating: 4.6, experience: "6 years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop", available: "Wed-Sun, 11AM-7PM", phone: "+1 (555) 789-0123" },
    { name: "Dr. David Kim", specialty: "Neuropsychologist", location: "Los Angeles", rating: 4.8, experience: "11 years", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop", available: "Mon-Fri, 8AM-3PM", phone: "+1 (555) 890-1234" },
    { name: "Dr. Jennifer Lee", specialty: "Family Therapist", location: "Chicago", rating: 4.7, experience: "9 years", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop", available: "Tue-Sat, 10AM-6PM", phone: "+1 (555) 901-2345" }
  ];

  const filteredDoctors = selectedLocation === "all" 
    ? doctors 
    : doctors.filter(doc => doc.location === selectedLocation);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Stethoscope className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consult a Doctor
          </h1>
          <p className="text-xl md:text-2xl text-primary italic max-w-3xl mx-auto">
            "Professional help is just a click away. Find the right mental health expert for your journey."
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-foreground">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-medium">Filter by Location:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <Button
                  key={location}
                  variant={selectedLocation === location ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLocation(location)}
                  className="capitalize"
                >
                  {location === "all" ? "All Locations" : location}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="container mx-auto">
          <p className="text-muted-foreground mb-6">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
            {selectedLocation !== "all" && ` in ${selectedLocation}`}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-primary">{doctor.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-foreground">{doctor.rating}</span>
                      <span className="text-muted-foreground">• {doctor.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.available}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  Book Appointment
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultDoctor;
