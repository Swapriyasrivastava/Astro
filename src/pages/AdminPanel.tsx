
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Bell, Mail, Sun, Globe, Package, Users, 
  CreditCard, BarChart3, Wallet, GraduationCap, 
  Gamepad, Heart, Activity, ShoppingCart, Brain
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, 
  SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, 
  SidebarMenuButton, SidebarFooter, SidebarInset } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import AdminDashboard from '@/components/admin/AdminDashboard';

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <div className="flex items-center justify-center rounded-full overflow-hidden bg-cosmic-accent/20 w-10 h-10">
                <span className="text-xl font-bold animate-float">✨</span>
              </div>
              <span className="ml-2 text-lg font-bold text-sidebar-foreground">Astral Admin</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <BarChart3 className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="AI">
                      <Brain className="h-4 w-4" />
                      <span>AI</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="CRM">
                      <Users className="h-4 w-4" />
                      <span>CRM</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="eCommerce">
                      <ShoppingCart className="h-4 w-4" />
                      <span>eCommerce</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Services</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Cryptocurrency">
                      <CreditCard className="h-4 w-4" />
                      <span>Cryptocurrency</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Investment">
                      <Wallet className="h-4 w-4" />
                      <span>Investment</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="LMS">
                      <GraduationCap className="h-4 w-4" />
                      <span>LMS</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="NFT & Gaming">
                      <Gamepad className="h-4 w-4" />
                      <span>NFT & Gaming</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Medical">
                      <Heart className="h-4 w-4" />
                      <span>Medical</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Analytics">
                      <Activity className="h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="POS & Inventory">
                      <Package className="h-4 w-4" />
                      <span>POS & Inventory</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Applications</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Email">
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="p-2">
              <Button
                onClick={logout}
                variant="outline"
                className="w-full justify-start text-sidebar-foreground"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          {/* Navbar */}
          <nav className="cosmic-glass border-b border-cosmic-light/20 sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-cosmic-light text-glow">Dashboard</span>
                  <div className="ml-4 relative">
                    <Input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-60 bg-cosmic-dark/30 border-cosmic-light/20 text-cosmic-light"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" className="relative animate-fade-in hover:bg-cosmic-accent/20">
                    <Globe className="text-cosmic-light" />
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="relative animate-fade-in hover:bg-cosmic-accent/20">
                    <Bell className="text-cosmic-light" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="animate-fade-in hover:bg-cosmic-accent/20">
                    <Mail className="text-cosmic-light" />
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="animate-fade-in hover:bg-cosmic-accent/20">
                    <Sun className="text-cosmic-light" />
                  </Button>
                  
                  <div className="relative group">
                    <Avatar className="h-8 w-8 transition-transform hover:scale-110">
                      <AvatarFallback className="bg-cosmic-accent/20 text-cosmic-light">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="absolute right-0 mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                      <div className="cosmic-glass py-2 rounded-md shadow-xl">
                        <div className="px-4 py-2 text-sm text-cosmic-light">{user.username}</div>
                        <div className="border-t border-cosmic-light/20"></div>
                        <button
                          onClick={logout}
                          className="w-full text-left px-4 py-2 text-sm text-cosmic-light hover:bg-cosmic-accent/20 transition-colors"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-6">
            <AdminDashboard />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminPanel;
