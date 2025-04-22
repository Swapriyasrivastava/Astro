
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, FileText, Star, User } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

// Sample data
const sampleKundlis = [
  { id: 1, name: "Raj Sharma", birthDate: "1990-05-15", birthTime: "14:30", birthPlace: "Mumbai, India", status: "completed", date: "2025-04-01" },
  { id: 2, name: "Priya Patel", birthDate: "1985-10-22", birthTime: "08:45", birthPlace: "Delhi, India", status: "completed", date: "2025-03-28" },
  { id: 3, name: "Amit Kumar", birthDate: "1992-02-10", birthTime: "23:15", birthPlace: "Bangalore, India", status: "pending", date: "2025-04-05" },
  { id: 4, name: "Maya Singh", birthDate: "1988-12-03", birthTime: "11:20", birthPlace: "Kolkata, India", status: "in-progress", date: "2025-04-07" },
  { id: 5, name: "Vikram Joshi", birthDate: "1979-07-18", birthTime: "16:50", birthPlace: "Chennai, India", status: "completed", date: "2025-03-20" },
];

const sampleCustomers = [
  { id: 1, name: "Raj Sharma", email: "raj.sharma@example.com", phone: "+91 98765 43210", registeredDate: "2025-01-15", orders: 3 },
  { id: 2, name: "Priya Patel", email: "priya.patel@example.com", phone: "+91 87654 32109", registeredDate: "2025-02-08", orders: 1 },
  { id: 3, name: "Amit Kumar", email: "amit.kumar@example.com", phone: "+91 76543 21098", registeredDate: "2025-02-22", orders: 2 },
  { id: 4, name: "Maya Singh", email: "maya.singh@example.com", phone: "+91 65432 10987", registeredDate: "2025-03-03", orders: 1 },
  { id: 5, name: "Vikram Joshi", email: "vikram.joshi@example.com", phone: "+91 54321 09876", registeredDate: "2025-03-18", orders: 4 },
];

const KundliManager = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("kundli-list");
  const [viewKundli, setViewKundli] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewKundli = (kundli) => {
    setViewKundli(kundli);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="cosmic-glass bg-cosmic-dark/40 border-cosmic-light/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-cosmic-light">Kundli Manager</CardTitle>
          <CardDescription className="text-cosmic-light/80">
            Manage kundli readings and registered customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-cosmic-dark/30">
              <TabsTrigger value="kundli-list" className="data-[state=active]:bg-cosmic-accent/20">
                <FileText className="h-4 w-4 mr-2" />
                Ordered Kundli List
              </TabsTrigger>
              <TabsTrigger value="customers" className="data-[state=active]:bg-cosmic-accent/20">
                <User className="h-4 w-4 mr-2" />
                Registered Customers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="kundli-list" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow className="border-cosmic-light/10 hover:bg-cosmic-dark/30">
                    <TableHead className="text-cosmic-light/80">Name</TableHead>
                    <TableHead className="text-cosmic-light/80">Birth Date</TableHead>
                    <TableHead className="text-cosmic-light/80">Birth Time</TableHead>
                    <TableHead className="text-cosmic-light/80">Birth Place</TableHead>
                    <TableHead className="text-cosmic-light/80">Status</TableHead>
                    <TableHead className="text-cosmic-light/80">Date</TableHead>
                    <TableHead className="text-cosmic-light/80">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleKundlis.map((kundli) => (
                    <TableRow key={kundli.id} className="border-cosmic-light/10 hover:bg-cosmic-dark/30">
                      <TableCell className="font-medium text-cosmic-light">{kundli.name}</TableCell>
                      <TableCell className="text-cosmic-light">{kundli.birthDate}</TableCell>
                      <TableCell className="text-cosmic-light">{kundli.birthTime}</TableCell>
                      <TableCell className="text-cosmic-light">{kundli.birthPlace}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          kundli.status === "completed" ? "bg-green-500/20 text-green-300" : 
                          kundli.status === "in-progress" ? "bg-blue-500/20 text-blue-300" :
                          "bg-amber-500/20 text-amber-300"
                        }`}>
                          {kundli.status.charAt(0).toUpperCase() + kundli.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell className="text-cosmic-light">{kundli.date}</TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 text-cosmic-light hover:text-cosmic-accent"
                          onClick={() => handleViewKundli(kundli)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="customers" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow className="border-cosmic-light/10 hover:bg-cosmic-dark/30">
                    <TableHead className="text-cosmic-light/80">Name</TableHead>
                    <TableHead className="text-cosmic-light/80">Email</TableHead>
                    <TableHead className="text-cosmic-light/80">Phone</TableHead>
                    <TableHead className="text-cosmic-light/80">Registered Date</TableHead>
                    <TableHead className="text-cosmic-light/80">Orders</TableHead>
                    <TableHead className="text-cosmic-light/80">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleCustomers.map((customer) => (
                    <TableRow key={customer.id} className="border-cosmic-light/10 hover:bg-cosmic-dark/30">
                      <TableCell className="font-medium text-cosmic-light">{customer.name}</TableCell>
                      <TableCell className="text-cosmic-light">{customer.email}</TableCell>
                      <TableCell className="text-cosmic-light">{customer.phone}</TableCell>
                      <TableCell className="text-cosmic-light">{customer.registeredDate}</TableCell>
                      <TableCell className="text-cosmic-light">{customer.orders}</TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 text-cosmic-light hover:text-cosmic-accent"
                          onClick={() => toast({
                            title: "Customer Details",
                            description: `Viewing details for ${customer.name}`
                          })}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {viewKundli && (
          <DialogContent className="cosmic-glass bg-cosmic-dark/40 max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-cosmic-light">Kundli Details</DialogTitle>
              <DialogDescription className="text-cosmic-light/80">
                Viewing kundli information for {viewKundli.name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-cosmic-light/70">Name</h3>
                  <p className="text-cosmic-light">{viewKundli.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-cosmic-light/70">Birth Date</h3>
                  <p className="text-cosmic-light">{viewKundli.birthDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-cosmic-light/70">Birth Time</h3>
                  <p className="text-cosmic-light">{viewKundli.birthTime}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-cosmic-light/70">Birth Place</h3>
                  <p className="text-cosmic-light">{viewKundli.birthPlace}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 border-2 border-cosmic-light/30 rotate-45"></div>
                  <div className="absolute inset-0 border-2 border-cosmic-light/30"></div>
                  <div className="absolute top-1/2 left-0 w-full border-t border-cosmic-light/30"></div>
                  <div className="absolute top-0 left-1/2 h-full border-l border-cosmic-light/30"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Star className="h-12 w-12 text-cosmic-accent/60" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-sm font-medium text-cosmic-light/70 mb-2">Chart Interpretation</h3>
              <p className="text-cosmic-light/90">
                The planetary positions at the time of birth indicate strong influences from Jupiter and Venus, 
                suggesting prosperity and harmony in relationships. The ascendant in {viewKundli.name.split(' ')[0]}'s chart 
                points to natural leadership abilities and creative talents.
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default KundliManager;
