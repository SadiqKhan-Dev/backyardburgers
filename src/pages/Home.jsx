import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import {
  Star, Clock, Users, ChefHat, Gift,
  ArrowRight, MessageSquare, Quote, Phone, Mail, MapPin,
  Smartphone, ShoppingCart, CreditCard, PartyPopper,
  Sun, Heart, Utensils, Beef, Drumstick, Soup,
  CupSoda, CakeSlice, Salad, Sunrise, Circle
} from 'lucide-react';
import Footer from '../components/Footer';

function Home() {
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.orders);
  
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  const stats = [
    { icon: ChefHat, value: '40+', label: 'Menu Items', color: 'text-primary-600' },
    { icon: Star, value: '4.8', label: 'Average Rating', color: 'text-yellow-500' },
    { icon: Users, value: '15+', label: 'Expert Chefs', color: 'text-blue-600' },
    { icon: Users, value: '10K+', label: 'Happy Customers', color: 'text-green-600' },
  ];

  const howItWorks = [
    {
      step: '1',
      icon: Smartphone,
      title: 'Browse Menu',
      description: 'Explore our delicious selection of burgers, chicken, sides, and more',
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: '2',
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'Customize your order and add your favorites to the cart',
      color: 'from-green-500 to-green-600',
    },
    {
      step: '3',
      icon: CreditCard,
      title: 'Checkout',
      description: 'Choose dine-in, takeout, or delivery and complete your order',
      color: 'from-purple-500 to-purple-600',
    },
    {
      step: '4',
      icon: PartyPopper,
      title: 'Enjoy!',
      description: 'Sit back and enjoy your delicious meal',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      avatar: 'SJ',
      rating: 5,
      text: "Best burgers in town! The quality and taste are consistently amazing. My family's go-to spot every weekend.",
    },
    {
      name: 'Mike Chen',
      role: 'Regular Customer',
      avatar: 'MC',
      rating: 5,
      text: "The online ordering system is so smooth! I love how I can track my order in real-time. Plus, the food is incredible.",
    },
    {
      name: 'Emily Rodriguez',
      role: 'Local Guide',
      avatar: 'ER',
      rating: 5,
      text: "Family Feast is the best deal! Perfect for our family gatherings. Everyone loves the variety and quality.",
    },
  ];

  const [specialOffers, setSpecialOffers] = useState([
    {
      title: 'Lunch Special',
      description: 'Monday-Friday, 11am-3pm',
      discount: '20% OFF',
      code: 'LUNCH20',
      icon: Sun,
      gradient: 'from-yellow-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
    },
    {
      title: 'Family Tuesday',
      description: 'Every Tuesday',
      discount: 'Buy 1 Get 1',
      code: 'FAMILY',
      icon: Users,
      gradient: 'from-blue-400 to-purple-500',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop',
    },
    {
      title: 'Weekend Feast',
      description: 'Saturday & Sunday',
      discount: '$10 OFF',
      code: 'WEEKEND10',
      icon: PartyPopper,
      gradient: 'from-green-400 to-teal-500',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb5773?w=600&h=400&fit=crop',
    },
  ]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSpecialOffers(prev => {
          const updated = [...prev];
          updated[index] = { ...updated[index], image: reader.result };
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const topRated = products
    .filter(p => p.reviews > 200)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-12 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Gift className="w-4 h-4" />
              <span>Exclusive Deals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Special Offers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Save big with our amazing deals and promotions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  {offer.image ? (
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${offer.gradient} flex items-center justify-center`}>
                      <offer.icon className="w-24 h-24 text-white/80" />
                    </div>
                  )}
                  
                  {/* Overlay with upload button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <label className="cursor-pointer bg-white rounded-full p-3 hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-110">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(index, e)}
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </label>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                    <p className="text-xl font-bold text-gray-900">{offer.discount}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                      {offer.title}
                    </h3>
                    <div className={`bg-gradient-to-br ${offer.gradient} rounded-lg p-2`}>
                      <offer.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {offer.description}
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4 border border-gray-100 dark:border-gray-600">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Use code:</p>
                    <p className="text-xl font-bold text-primary-600 dark:text-accent-400 font-mono tracking-wider">{offer.code}</p>
                  </div>

                  <Link
                    to="/menu"
                    className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-accent-600 dark:to-accent-700 dark:hover:from-accent-700 dark:hover:to-accent-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full text-center shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Customer Favorites <Star className="inline-block w-10 h-10 ml-2 text-yellow-500" />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our most loved items based on thousands of reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu" className="btn-primary inline-block text-lg px-12 py-4">
            View Full Menu <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Phone className="w-4 h-4" />
              <span>Simple & Easy</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Getting your favorite food is just 4 simple steps away
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              const images = [
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
              ];

              const stepColors = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-purple-500 to-purple-600',
                'from-orange-500 to-orange-600',
              ];

              return (
                <div key={index} className="relative group">
                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-400 rounded-full"></div>
                    </div>
                  )}

                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 z-10">
                    {/* Step Number Badge */}
                    <div className={`absolute top-4 left-4 z-20 bg-gradient-to-br ${stepColors[index]} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={images[index]}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Icon Circle */}
                      <div className={`absolute bottom-4 right-4 bg-gradient-to-br ${stepColors[index]} rounded-full p-4 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Step {step.step} of 4
                          </span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  dot <= parseInt(step.step)
                                    ? `bg-gradient-to-r ${stepColors[index]}`
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-full shadow-lg">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">Average order time: 15 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Top Rated <Star className="inline-block w-10 h-10 ml-2 text-yellow-500" />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Highest-rated items that keep our customers coming back
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display">
              What Our Customers Say <MessageSquare className="inline-block w-10 h-10 ml-2" />
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-gray-900 dark:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-4" />

                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Utensils className="w-4 h-4" />
            <span>Delicious Options</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Explore Our Menu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From juicy burgers to crispy chicken, we've got something for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              name: 'Burgers', 
              icon: Beef, 
              color: 'from-red-600 to-red-700',
              count: products.filter(p => p.category === 'burgers').length,
              image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
              description: 'Handcrafted & juicy'
            },
            { 
              name: 'Chicken', 
              icon: Drumstick, 
              color: 'from-amber-500 to-amber-600',
              count: products.filter(p => p.category === 'chicken').length,
              image: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&h=300&fit=crop',
              description: 'Crispy & flavorful'
            },
            { 
              name: 'Sides', 
              icon: Soup, 
              color: 'from-emerald-500 to-emerald-600',
              count: products.filter(p => p.category === 'sides').length,
              image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f87f?w=400&h=300&fit=crop',
              description: 'Perfect complements'
            },
            { 
              name: 'Drinks', 
              icon: CupSoda, 
              color: 'from-sky-500 to-sky-600',
              count: products.filter(p => p.category === 'drinks').length,
              image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc669?w=400&h=300&fit=crop',
              description: 'Refreshing beverages'
            },
            { 
              name: 'Desserts', 
              icon: CakeSlice, 
              color: 'from-pink-600 to-pink-700',
              count: products.filter(p => p.category === 'desserts').length,
              image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
              description: 'Sweet indulgence'
            },
            { 
              name: 'Salads', 
              icon: Salad, 
              color: 'from-green-600 to-green-700',
              count: products.filter(p => p.category === 'salads').length,
              image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
              description: 'Fresh & healthy'
            },
            { 
              name: 'Breakfast', 
              icon: Sunrise, 
              color: 'from-orange-500 to-orange-600',
              count: products.filter(p => p.category === 'breakfast').length,
              image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
              description: 'Start your day right'
            },
            { 
              name: 'Combos', 
              icon: Gift, 
              color: 'from-violet-600 to-violet-700',
              count: products.filter(p => p.category === 'combos').length,
              image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
              description: 'Best value deals'
            },
          ].map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/menu?category=${category.name.toLowerCase()}`}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${category.color} p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Category Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 font-display drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {category.count} Items
                    </span>
                    <span className="text-sm font-medium text-primary-600 dark:text-accent-400 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                      View Menu
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Utensils className="w-6 h-6" />
            View Full Menu
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6 font-display">
            Ready to Taste the Difference?
          </h2>
          <p className="text-2xl mb-8 text-gray-100">
            Join thousands of happy customers who've made us their favorite burger spot
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-block bg-white text-primary-700 font-bold text-xl px-12 py-5 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl transform hover:scale-105"
            >
              Start Ordering Now
            </Link>
            <Link
              to="/orders"
              className="inline-block bg-transparent border-2 border-white text-white font-bold text-xl px-12 py-5 rounded-lg hover:bg-white hover:text-primary-700 transition-all"
            >
              Track Order
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">15 min</p>
              <p className="text-sm text-gray-200">Avg. Prep Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <p className="text-3xl font-bold">4.8</p>
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-sm text-gray-200">Customer Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">10K+</p>
              <p className="text-sm text-gray-200">Orders Served</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
