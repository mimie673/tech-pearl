import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  Calendar,
  Mail,
  FileText,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  X,
  LogOut,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Record<string, unknown> | null>(null);
  const [itemType, setItemType] = useState<"registration" | "event" | "blog" | null>(null);
  const [eventImagePreview, setEventImagePreview] = useState<string | null>(null);
  const [blogImagePreview, setBlogImagePreview] = useState<string | null>(null);
  const [editImagePreview, setEditImagePreview] = useState<string | null>(null);

  const stats = [
    { title: "Total Members", value: "248", icon: Users, color: "text-blue-600" },
    { title: "Upcoming Events", value: "5", icon: Calendar, color: "text-green-600" },
    { title: "Newsletter Subscribers", value: "432", icon: Mail, color: "text-purple-600" },
    { title: "Blog Posts", value: "12", icon: FileText, color: "text-orange-600" },
  ];

  const [registrations] = useState([
    { id: 1, name: "Grace Banda", email: "grace@example.com", program: "Coding Workshop", date: "2024-11-05", status: "Confirmed" },
    { id: 2, name: "Mercy Phiri", email: "mercy@example.com", program: "Tech Mentorship", date: "2024-11-04", status: "Pending" },
    { id: 3, name: "Linda Kachale", email: "linda@example.com", program: "Leadership Program", date: "2024-11-03", status: "Confirmed" },
  ]);

  const [events] = useState([
    { id: 1, title: "Web Development Bootcamp", date: "2024-11-15", attendees: 45, status: "Upcoming" },
    { id: 2, title: "Tech Career Workshop", date: "2024-11-20", attendees: 30, status: "Upcoming" },
    { id: 3, title: "Hackathon 2024", date: "2024-12-01", attendees: 60, status: "Open" },
  ]);

  const [blogPosts] = useState([
    { id: 1, title: "Breaking Barriers: Success Story", author: "TechPearl Team", date: "2024-11-01", status: "Published" },
    { id: 2, title: "5 Essential Tips for Women in Tech", author: "Mercy Phiri", date: "2024-10-28", status: "Published" },
    { id: 3, title: "Our Latest Hackathon", author: "TechPearl Team", date: "2024-10-20", status: "Draft" },
  ]);

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Event Created",
      description: "New event has been added successfully with image.",
    });
    setIsAddEventOpen(false);
    setEventImagePreview(null);
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Blog Post Created",
      description: "New blog post has been published successfully with image.",
    });
    setIsAddBlogOpen(false);
    setBlogImagePreview(null);
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setPreview: (preview: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleView = (item: Record<string, unknown>, type: "registration" | "event" | "blog") => {
    setSelectedItem(item);
    setItemType(type);
    setViewDialogOpen(true);
  };

  const handleEdit = (item: Record<string, unknown>, type: "registration" | "event" | "blog") => {
    setSelectedItem(item);
    setItemType(type);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    toast({
      title: "Changes Saved",
      description: `${itemType} has been updated successfully.`,
    });
    setEditDialogOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = (id: number, type: string) => {
    toast({
      title: "Deleted",
      description: `${type} has been removed successfully.`,
      variant: "destructive",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage TechPearl MW content and data</p>
            </div>
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Website
                </Button>
              </Link>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="registrations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <CardTitle>Event Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell>{reg.name}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.program}</TableCell>
                        <TableCell>{reg.date}</TableCell>
                        <TableCell>
                          <Badge variant={reg.status === "Confirmed" ? "default" : "secondary"}>
                            {reg.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleView(reg, "registration")}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleEdit(reg, "registration")}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Events</CardTitle>
                <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Event</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddEvent} className="space-y-4">
                      <div>
                        <Label htmlFor="event-title">Event Title</Label>
                        <Input id="event-title" placeholder="Enter event title" required />
                      </div>
                      <div>
                        <Label htmlFor="event-date">Date</Label>
                        <Input id="event-date" type="date" required />
                      </div>
                      <div>
                        <Label htmlFor="event-location">Location</Label>
                        <Input id="event-location" placeholder="Event location" required />
                      </div>
                      <div>
                        <Label htmlFor="event-description">Description</Label>
                        <Textarea id="event-description" placeholder="Event description" rows={4} required />
                      </div>
                      <div>
                        <Label htmlFor="event-image">Event Image</Label>
                        <Input 
                          id="event-image" 
                          type="file" 
                          accept="image/*"
                          className="cursor-pointer"
                          onChange={(e) => handleImageChange(e, setEventImagePreview)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload an image for this event (JPG, PNG, or GIF)
                        </p>
                        {eventImagePreview && (
                          <div className="mt-3 relative">
                            <img 
                              src={eventImagePreview} 
                              alt="Preview" 
                              className="w-full h-40 object-cover rounded-md"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setEventImagePreview(null)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <Button type="submit" className="w-full">Create Event</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Attendees</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.attendees}</TableCell>
                        <TableCell>
                          <Badge>{event.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleEdit(event, "event")}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDelete(event.id, "Event")}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Blog Posts</CardTitle>
                <Dialog open={isAddBlogOpen} onOpenChange={setIsAddBlogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Blog Post</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddBlog} className="space-y-4">
                      <div>
                        <Label htmlFor="blog-title">Post Title</Label>
                        <Input id="blog-title" placeholder="Enter post title" required />
                      </div>
                      <div>
                        <Label htmlFor="blog-author">Author</Label>
                        <Input id="blog-author" placeholder="Author name" required />
                      </div>
                      <div>
                        <Label htmlFor="blog-category">Category</Label>
                        <Input id="blog-category" placeholder="Category" required />
                      </div>
                      <div>
                        <Label htmlFor="blog-content">Content</Label>
                        <Textarea id="blog-content" placeholder="Blog post content" rows={6} required />
                      </div>
                      <div>
                        <Label htmlFor="blog-image">Featured Image</Label>
                        <Input 
                          id="blog-image" 
                          type="file" 
                          accept="image/*"
                          className="cursor-pointer"
                          onChange={(e) => handleImageChange(e, setBlogImagePreview)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload a featured image for this blog post (JPG, PNG, or GIF)
                        </p>
                        {blogImagePreview && (
                          <div className="mt-3 relative">
                            <img 
                              src={blogImagePreview} 
                              alt="Preview" 
                              className="w-full h-40 object-cover rounded-md"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setBlogImagePreview(null)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <Button type="submit" className="w-full">Publish Post</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell>
                          <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleEdit(post, "blog")}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDelete(post.id, "Blog Post")}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="TechPearl MW" />
                </div>
                <div>
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea 
                    id="site-description" 
                    defaultValue="Empowering Girls and Women in Technology"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" type="email" defaultValue="techpearlmw1@gmail.com" />
                </div>
                <div>
                  <Label htmlFor="social-facebook">Facebook URL</Label>
                  <Input id="social-facebook" defaultValue="https://web.facebook.com/techpearlmw" />
                </div>
                <div>
                  <Label htmlFor="social-twitter">Twitter URL</Label>
                  <Input id="social-twitter" defaultValue="https://x.com/techpearlmw?t=Rjjqg49BEbM_pGaHV3y4Lg&s=08" />
                </div>
                <div>
                  <Label htmlFor="social-instagram">Instagram URL</Label>
                  <Input id="social-instagram" defaultValue="https://www.instagram.com/techpearlmw/" />
                </div>
                <div>
                  <Label htmlFor="social-linkedin">LinkedIn URL</Label>
                  <Input id="social-linkedin" defaultValue="https://www.linkedin.com/in/techpearl-malawi-405682201" />
                </div>
                <div>
                  <Label htmlFor="social-youtube">YouTube URL</Label>
                  <Input id="social-youtube" defaultValue="https://www.youtube.com/@techpearlmalawi7099" />
                </div>
                <Button>
                  <Settings className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>View {itemType === "registration" ? "Registration" : itemType === "event" ? "Event" : "Blog Post"} Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {selectedItem && Object.entries(selectedItem).map(([key, value]) => (
                key !== "id" && (
                  <div key={key}>
                    <Label className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                    <p className="text-sm mt-1">{String(value)}</p>
                  </div>
                )
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit {itemType === "registration" ? "Registration" : itemType === "event" ? "Event" : "Blog Post"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {selectedItem && Object.entries(selectedItem).map(([key, value]) => (
                key !== "id" && (
                  <div key={key}>
                    <Label htmlFor={`edit-${key}`} className="capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Label>
                    <Input
                      id={`edit-${key}`}
                      defaultValue={String(value)}
                      className="mt-1"
                    />
                  </div>
                )
              ))}
              {(itemType === "event" || itemType === "blog") && (
                <div>
                  <Label htmlFor="edit-image">
                    {itemType === "event" ? "Event Image" : "Featured Image"}
                  </Label>
                  <Input 
                    id="edit-image" 
                    type="file" 
                    accept="image/*"
                    className="cursor-pointer mt-1"
                    onChange={(e) => handleImageChange(e, setEditImagePreview)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload a new image to replace the current one (JPG, PNG, or GIF)
                  </p>
                  {editImagePreview && (
                    <div className="mt-3 relative">
                      <img 
                        src={editImagePreview} 
                        alt="Preview" 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setEditImagePreview(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              )}
              <Button onClick={handleSaveEdit} className="w-full">
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminDashboard;
