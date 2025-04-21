
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Users, DollarSign, ShoppingCart, FileEdit, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Sample data - in a real app, this would come from your backend
const revenueData = [
  { name: 'Jan', revenue: 18000, expense: 12000 },
  { name: 'Feb', revenue: 14000, expense: 15000 },
  { name: 'Mar', revenue: 12000, expense: 11000 },
  { name: 'Apr', revenue: 22000, expense: 15000 },
  { name: 'May', revenue: 44000, expense: 32000 },
  { name: 'Jun', revenue: 18000, expense: 19000 },
  { name: 'Jul', revenue: 28000, expense: 12000 },
  { name: 'Aug', revenue: 24000, expense: 11000 },
  { name: 'Sep', revenue: 12000, expense: 10000 },
  { name: 'Oct', revenue: 48000, expense: 36000 },
  { name: 'Nov', revenue: 18000, expense: 14000 },
  { name: 'Dec', revenue: 21000, expense: 15000 }
];

const customerData = [
  { name: 'Male', value: 20000, color: '#1EAEDB' },
  { name: 'Female', value: 25000, color: '#FF9966' }
];

const recentOrders = [
  { id: '#6352148', user: 'Dianne Russell', item: 'Tarot Reading (Premium)', qty: 2, amount: '$159.00', status: 'Paid' },
  { id: '#6352149', user: 'Wade Warren', item: 'Astrology Chart', qty: 1, amount: '$89.00', status: 'Pending' },
  { id: '#6352150', user: 'Jane Cooper', item: 'Monthly Horoscope', qty: 3, amount: '$49.00', status: 'Processing' },
  { id: '#6352151', user: 'Robert Fox', item: 'Birth Chart Analysis', qty: 1, amount: '$199.00', status: 'Paid' },
];

const transactions = [
  { id: 1, name: 'Paypal', details: 'Client Payment', amount: '+$800', type: 'income' },
  { id: 2, name: 'Stripe', details: 'Service Fee', amount: '-$300', type: 'expense' },
  { id: 3, name: 'Paytm', details: 'Subscription', amount: '-$20', type: 'expense' },
];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [dateRange, setDateRange] = useState('Yearly');

  // Handle order status change
  const handleStatusChange = (orderId, newStatus) => {
    // In a real app, you would make an API call here
    toast({
      title: "Order Status Updated",
      description: `Order ${orderId} status changed to ${newStatus}`,
      duration: 3000,
    });
  };

  // Filter orders based on search input
  const filteredOrders = recentOrders.filter(order => 
    order.id.toLowerCase().includes(filterValue.toLowerCase()) || 
    order.user.toLowerCase().includes(filterValue.toLowerCase()) ||
    order.item.toLowerCase().includes(filterValue.toLowerCase())
  );

  // Handle date range change for charts
  const handleDateRangeChange = (range) => {
    setDateRange(range);
    toast({
      title: "Date Range Changed",
      description: `Data now showing for ${range} period`,
      duration: 2000,
    });
    // In a real app, you would fetch new data based on the selected range
  };

  // Handle order view/edit/delete
  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    // In a real app, this would open an edit form
    toast({
      title: "Edit Order",
      description: `Editing order ${order.id}`,
      duration: 2000,
    });
  };

  const handleDeleteOrder = (orderId) => {
    // In a real app, you would make an API call here
    toast({
      title: "Order Deleted",
      description: `Order ${orderId} has been deleted`,
      variant: "destructive",
      duration: 3000,
    });
  };

  // Handle transaction management
  const handleTransactionAction = (transaction, action) => {
    setSelectedTransaction(transaction);
    toast({
      title: `Transaction ${action}`,
      description: `${action} transaction ${transaction.id}`,
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cosmic-glass hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-cosmic-light text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-cosmic-accent animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cosmic-light">300</div>
            <p className="text-xs text-cosmic-light/70 mt-1">
              <span className="text-emerald-500">+200</span> this week
            </p>
            <Button variant="link" className="text-cosmic-accent p-0 mt-2 text-xs" onClick={() => toast({ title: "Products Dashboard", description: "Opening products management view" })}>
              Manage Products
            </Button>
          </CardContent>
        </Card>
        <Card className="cosmic-glass hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-cosmic-light text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-cosmic-accent animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cosmic-light">50,000</div>
            <p className="text-xs text-cosmic-light/70 mt-1">
              <span className="text-red-500">-5k</span> this week
            </p>
            <Button variant="link" className="text-cosmic-accent p-0 mt-2 text-xs" onClick={() => toast({ title: "Customer Management", description: "Opening customer analytics view" })}>
              View Customer Analytics
            </Button>
          </CardContent>
        </Card>
        <Card className="cosmic-glass hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-cosmic-light text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-cosmic-accent animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cosmic-light">1,500</div>
            <p className="text-xs text-cosmic-light/70 mt-1">
              <span className="text-emerald-500">+1k</span> this week
            </p>
            <Button variant="link" className="text-cosmic-accent p-0 mt-2 text-xs" onClick={() => toast({ title: "Order Management", description: "Opening full order list" })}>
              View All Orders
            </Button>
          </CardContent>
        </Card>
        <Card className="cosmic-glass hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-cosmic-light text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-cosmic-accent animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cosmic-light">$25,000,000.00</div>
            <p className="text-xs text-cosmic-light/70 mt-1">
              <span className="text-emerald-500">+$10k</span> this week
            </p>
            <Button variant="link" className="text-cosmic-accent p-0 mt-2 text-xs" onClick={() => toast({ title: "Financial Reports", description: "Generating detailed revenue report" })}>
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Report & Customer Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="cosmic-glass lg:col-span-2 hover:shadow-cosmic transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-cosmic-light">Revenue Report</CardTitle>
              <select 
                className="bg-cosmic-dark/30 border-cosmic-light/20 text-cosmic-light rounded-md p-1 text-xs"
                value={dateRange}
                onChange={(e) => handleDateRangeChange(e.target.value)}
              >
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>
            <div className="flex space-x-4 text-xs mt-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#1EAEDB] mr-1"></div>
                <span className="text-cosmic-light/70">Revenue: $500,000,000.00</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#FF9966] mr-1"></div>
                <span className="text-cosmic-light/70">Expense: $20,000.00</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1EAEDB" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1EAEDB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF9966" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF9966" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #333', borderRadius: '6px' }} 
                    itemStyle={{ color: '#ddd' }}
                    labelStyle={{ color: '#ddd' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#1EAEDB" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                    animationDuration={1000}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="expense" 
                    stroke="#FF9966" 
                    fillOpacity={1} 
                    fill="url(#colorExpense)" 
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-end">
              <Button 
                size="sm" 
                className="bg-cosmic-accent/30 text-cosmic-light hover:bg-cosmic-accent/40"
                onClick={() => toast({ title: "Revenue Analysis", description: "Downloading revenue analysis report..." })}
              >
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-glass hover:shadow-cosmic transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-cosmic-light">Customer Statistics</CardTitle>
              <select 
                className="bg-cosmic-dark/30 border-cosmic-light/20 text-cosmic-light rounded-md p-1 text-xs"
                onChange={(e) => toast({ title: "Customer View Changed", description: `Now showing ${e.target.value} statistics` })}
              >
                <option>Yearly</option>
                <option>Monthly</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[230px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                    animationDuration={1200}
                    animationBegin={300}
                  >
                    {customerData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #333', borderRadius: '6px' }} 
                    itemStyle={{ color: '#ddd' }}
                    labelStyle={{ color: '#ddd' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-xs text-cosmic-light/70">Total</div>
                <div className="text-lg font-bold text-cosmic-light animate-pulse">45,000</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#1EAEDB] mr-2"></div>
                  <span className="text-cosmic-light">Male: 20,000</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FF9966] mr-2"></div>
                  <span className="text-cosmic-light">Female: 25,000</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button 
                size="sm" 
                className="bg-cosmic-accent/30 text-cosmic-light hover:bg-cosmic-accent/40"
                onClick={() => toast({ title: "Customer Segmentation", description: "Analyzing customer segments..." })}
              >
                View Demographics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="cosmic-glass lg:col-span-2 hover:shadow-cosmic transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-cosmic-light">Recent Orders</CardTitle>
              <div className="flex items-center gap-2">
                <Input 
                  className="h-8 w-40 bg-cosmic-dark/30 border-cosmic-light/20 text-cosmic-light text-xs"
                  placeholder="Search orders..."
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-cosmic-light border-cosmic-light/20 hover:bg-cosmic-accent/20"
                  onClick={() => toast({ title: "All Orders", description: "Opening complete order list..." })}
                >
                  View All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-cosmic-dark/20 border-cosmic-light/10">
                  <TableHead className="text-cosmic-light/70">Users</TableHead>
                  <TableHead className="text-cosmic-light/70">Invoice</TableHead>
                  <TableHead className="text-cosmic-light/70">Items</TableHead>
                  <TableHead className="text-cosmic-light/70">Qty</TableHead>
                  <TableHead className="text-cosmic-light/70">Amount</TableHead>
                  <TableHead className="text-cosmic-light/70">Status</TableHead>
                  <TableHead className="text-cosmic-light/70">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-cosmic-dark/20 border-cosmic-light/10 group">
                    <TableCell className="text-cosmic-light">{order.user}</TableCell>
                    <TableCell className="text-cosmic-light">{order.id}</TableCell>
                    <TableCell className="text-cosmic-light">{order.item}</TableCell>
                    <TableCell className="text-cosmic-light">{order.qty}</TableCell>
                    <TableCell className="text-cosmic-light">{order.amount}</TableCell>
                    <TableCell>
                      <select 
                        className={`px-2 py-1 rounded-full text-xs bg-opacity-20 outline-none ${
                          order.status === 'Paid' ? 'bg-green-500/20 text-green-400' : 
                          order.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-blue-500/20 text-blue-400'
                        }`}
                        defaultValue={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      >
                        <option value="Paid" className="bg-cosmic-dark text-green-400">Paid</option>
                        <option value="Pending" className="bg-cosmic-dark text-yellow-400">Pending</option>
                        <option value="Processing" className="bg-cosmic-dark text-blue-400">Processing</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-cosmic-light hover:text-cosmic-accent" onClick={() => handleViewOrder(order)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-cosmic-light hover:text-cosmic-accent" onClick={() => handleEditOrder(order)}>
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-cosmic-light hover:text-destructive" onClick={() => handleDeleteOrder(order.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="cosmic-glass hover:shadow-cosmic transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-cosmic-light">Transactions</CardTitle>
              <select 
                className="bg-cosmic-dark/30 border-cosmic-light/20 text-cosmic-light rounded-md p-1 text-xs"
                onChange={(e) => toast({ title: "Transaction Period Changed", description: `Now showing ${e.target.value}` })}
              >
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-cosmic-dark/50 transition-colors cursor-pointer group"
                  onClick={() => handleTransactionAction(transaction, 'View')}
                >
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-md flex items-center justify-center ${
                      transaction.type === 'income' ? 'bg-blue-500/20' : 'bg-red-500/20'
                    }`}>
                      <span className="text-lg">{transaction.name.charAt(0)}</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-cosmic-light">{transaction.name}</div>
                      <div className="text-xs text-cosmic-light/70">{transaction.details}</div>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {transaction.amount}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="h-5 text-xs text-cosmic-light p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTransactionAction(transaction, 'Details');
                        }}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Button 
                size="sm" 
                className="bg-cosmic-accent/30 text-cosmic-light hover:bg-cosmic-accent/40"
                onClick={() => toast({ title: "Transactions", description: "Opening full transaction ledger..." })}
              >
                View All Transactions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
          <DialogContent className="cosmic-glass text-cosmic-light max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-cosmic-accent">Order Details</DialogTitle>
              <DialogDescription className="text-cosmic-light/70">
                Order ID: {selectedOrder.id}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-cosmic-light/70">Customer</Label>
                  <div className="text-cosmic-light font-medium">{selectedOrder.user}</div>
                </div>
                <div>
                  <Label className="text-cosmic-light/70">Status</Label>
                  <div className={
                    selectedOrder.status === 'Paid' ? 'text-green-400' : 
                    selectedOrder.status === 'Pending' ? 'text-yellow-400' : 
                    'text-blue-400'
                  }>
                    {selectedOrder.status}
                  </div>
                </div>
                <div>
                  <Label className="text-cosmic-light/70">Item</Label>
                  <div className="text-cosmic-light">{selectedOrder.item}</div>
                </div>
                <div>
                  <Label className="text-cosmic-light/70">Quantity</Label>
                  <div className="text-cosmic-light">{selectedOrder.qty}</div>
                </div>
                <div>
                  <Label className="text-cosmic-light/70">Amount</Label>
                  <div className="text-cosmic-light font-medium">{selectedOrder.amount}</div>
                </div>
                <div>
                  <Label className="text-cosmic-light/70">Order Date</Label>
                  <div className="text-cosmic-light">April 19, 2025</div>
                </div>
              </div>
              
              <div>
                <Label className="text-cosmic-light/70">Delivery Address</Label>
                <div className="text-cosmic-light">
                  123 Cosmic Lane, Astral City, AC 12345
                </div>
              </div>
              
              <div>
                <Label className="text-cosmic-light/70">Notes</Label>
                <div className="text-cosmic-light/90 text-sm">
                  This order contains the premium tier package with priority shipping.
                </div>
              </div>
            </div>
            <DialogFooter className="flex flex-row justify-between">
              <Button 
                variant="outline" 
                className="border-cosmic-light/20 text-cosmic-light hover:bg-cosmic-accent/20"
              >
                Print Invoice
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="default" 
                  className="bg-cosmic-accent text-cosmic-light hover:bg-cosmic-accent/80"
                  onClick={() => {
                    toast({ title: "Update Complete", description: "Order details have been saved" });
                    setSelectedOrder(null);
                  }}
                >
                  Save Changes
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={() => {
                    toast({ title: "Order Cancelled", description: "The order has been cancelled" });
                    setSelectedOrder(null);
                  }}
                >
                  Cancel Order
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminDashboard;
