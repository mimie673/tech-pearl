import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventRegistrationProps {
  eventTitle?: string;
  eventDate?: string;
  eventLocation?: string;
}

const EventRegistration = ({
  eventTitle = "Upcoming Workshop",
  eventDate = "TBA",
  eventLocation = "Lilongwe",
}: EventRegistrationProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+265|0)?[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      program: "",
      experience: "",
    };

    let isValid = true;

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Malawian phone number (e.g., 0991234567 or +265991234567)";
      isValid = false;
    }

    if (!formData.program) {
      newErrors.program = "Please select a program";
      isValid = false;
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: `You're registered for ${eventTitle}. Check your email for details.`,
    });
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      experience: "",
      agreeTerms: false,
    });
    setErrors({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      experience: "",
    });
  };

  return (
    <Card className="border-none shadow-soft max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Event Registration</CardTitle>
        <div className="flex flex-col gap-2 mt-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{eventDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{eventLocation}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Limited spots available</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                setErrors({ ...errors, fullName: "" });
              }}
              required
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
              required
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+265 XXX XXX XXX or 0991234567"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setErrors({ ...errors, phone: "" });
              }}
              required
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="program">Select Program *</Label>
            <Select
              value={formData.program}
              onValueChange={(value) => {
                setFormData({ ...formData, program: value });
                setErrors({ ...errors, program: "" });
              }}
            >
              <SelectTrigger className={errors.program ? "border-red-500" : ""}>
                <SelectValue placeholder="Choose a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coding-workshop">Coding Workshop</SelectItem>
                <SelectItem value="mentorship">Tech Mentorship</SelectItem>
                <SelectItem value="leadership">Leadership Program</SelectItem>
                <SelectItem value="hackathon">Hackathon</SelectItem>
              </SelectContent>
            </Select>
            {errors.program && (
              <p className="text-sm text-red-500">{errors.program}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level *</Label>
            <Select
              value={formData.experience}
              onValueChange={(value) => {
                setFormData({ ...formData, experience: value });
                setErrors({ ...errors, experience: "" });
              }}
            >
              <SelectTrigger className={errors.experience ? "border-red-500" : ""}>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner - No prior experience</SelectItem>
                <SelectItem value="intermediate">Intermediate - Some coding knowledge</SelectItem>
                <SelectItem value="advanced">Advanced - Professional experience</SelectItem>
              </SelectContent>
            </Select>
            {errors.experience && (
              <p className="text-sm text-red-500">{errors.experience}</p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, agreeTerms: checked as boolean })
              }
            />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions and understand that my
              information will be used to contact me about the event.
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Complete Registration
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EventRegistration;
