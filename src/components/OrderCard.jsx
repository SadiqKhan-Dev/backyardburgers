import { useDispatch } from 'react-redux';
import { updateOrderStatus, deleteOrder } from '../features/orders/orderSlice';
import { CheckCircle, Clock, ArrowRight, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

function OrderCard({ order }) {
  const dispatch = useDispatch();

  const statusConfig = {
    pending: {
      label: 'Pending',
      color: 'bg-yellow-100 text-yellow-800',
      icon: Clock,
    },
    preparing: {
      label: 'Preparing',
      color: 'bg-blue-100 text-blue-800',
      icon: ArrowRight,
    },
    completed: {
      label: 'Completed',
      color: 'bg-green-100 text-green-800',
      icon: CheckCircle,
    },
  };

  const config = statusConfig[order.status];
  const StatusIcon = config.icon;

  const handleStatusUpdate = (newStatus) => {
    dispatch(updateOrderStatus({ orderId: order.id, status: newStatus }));
    toast.success(`Order status updated to ${newStatus}`, {
      position: 'bottom-right',
      duration: 2000,
    });
  };

  const handleDeleteOrder = () => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      dispatch(deleteOrder(order.id));
      toast.success('Order deleted', {
        position: 'bottom-right',
        duration: 2000,
      });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getNextStatus = () => {
    if (order.status === 'pending') return 'preparing';
    if (order.status === 'preparing') return 'completed';
    return null;
  };

  const nextStatus = getNextStatus();

  return (
    <div className="card p-6 animate-slide-up">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Order #{order.id}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {formatDate(order.createdAt)}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Customer: <span className="font-semibold text-gray-900">{order.customerName}</span>
          </p>
          {order.orderType && (
            <span className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700 capitalize">
              {order.orderType}
            </span>
          )}
        </div>

        {/* Status Badge */}
        <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 ${config.color}`}>
          <StatusIcon className="w-4 h-4" />
          <span>{config.label}</span>
        </span>
      </div>

      {/* Order Items */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <h4 className="font-semibold text-gray-700 mb-3">Items:</h4>
        <div className="space-y-2">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-gray-600">
                {item.quantity}x {item.name}
              </span>
              <span className="font-semibold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <span className="text-lg font-bold text-gray-900">Total:</span>
        <span className="text-2xl font-bold text-primary-600">
          ${order.totalAmount.toFixed(2)}
        </span>
      </div>

      {/* Actions */}
      <div className="flex space-x-2 mt-4">
        {nextStatus && (
          <button
            onClick={() => handleStatusUpdate(nextStatus)}
            className="flex-1 btn-primary py-2 text-sm"
          >
            Mark as {nextStatus.charAt(0).toUpperCase() + nextStatus.slice(1)}
          </button>
        )}
        
        {order.status !== 'completed' && (
          <button
            onClick={handleDeleteOrder}
            className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
            title="Delete order"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
