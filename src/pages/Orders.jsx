import { useState } from 'react';
import { useSelector } from 'react-redux';
import OrderCard from '../components/OrderCard';
import { ClipboardList, TrendingUp, Clock, CheckCircle, DollarSign, Hourglass, ChefHat, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';

function Orders() {
  const { orders } = useSelector((state) => state.orders);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredOrders = orders.filter((order) => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  const statusCounts = {
    all: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    completed: orders.filter(o => o.status === 'completed').length,
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 font-display flex items-center justify-center space-x-3">
              <ClipboardList className="w-12 h-12" />
              <span>Order Tracking</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Real-time updates on all your orders
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 bg-white dark:bg-gray-800 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{statusCounts.all}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="card p-6 bg-white dark:bg-gray-800 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Pending</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{statusCounts.pending}</p>
              </div>
              <Clock className="w-12 h-12 text-yellow-500" />
            </div>
          </div>

          <div className="card p-6 bg-white dark:bg-gray-800 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Completed</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{statusCounts.completed}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="card p-6 bg-white dark:bg-gray-800 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">${totalRevenue.toFixed(2)}</p>
              </div>
              <DollarSign className="w-12 h-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="card p-6 mb-8 bg-white dark:bg-gray-800">
          <div className="flex flex-wrap gap-3">
            {[
              { key: 'all', label: 'All Orders', color: 'bg-gray-600', icon: ClipboardList },
              { key: 'pending', label: 'Pending', color: 'bg-yellow-500', icon: Hourglass },
              { key: 'preparing', label: 'Preparing', color: 'bg-blue-500', icon: ChefHat },
              { key: 'completed', label: 'Completed', color: 'bg-green-500', icon: CheckCircle },
            ].map((status) => {
              const Icon = status.icon;
              return (
                <button
                  key={status.key}
                  onClick={() => setFilterStatus(status.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    filterStatus === status.key
                      ? `${status.color} text-white shadow-lg transform scale-105`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{status.label}</span>
                  <span className="bg-white bg-opacity-30 px-2 py-1 rounded text-xs">
                    {statusCounts[status.key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="card p-16 text-center bg-white dark:bg-gray-800">
            <ClipboardList className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 font-display">
              No orders found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
              {filterStatus === 'all'
                ? 'Place your first order to get started!'
                : `No ${filterStatus} orders`}
            </p>
            {filterStatus === 'all' && (
              <a
                href="/menu"
                className="btn-primary inline-block text-lg px-8 py-4"
              >
                Browse Menu
              </a>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}

        {/* Order Status Guide */}
        <div className="card p-8 mt-12 bg-blue-50 dark:bg-blue-900/20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display flex items-center space-x-3">
            <BookOpen className="w-7 h-7" />
            <span>Order Status Guide</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Pending</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your order has been received and is waiting to be prepared
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <ChefHat className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Preparing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our chefs are preparing your meal with fresh ingredients
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Completed</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your order is ready for pickup or out for delivery!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
