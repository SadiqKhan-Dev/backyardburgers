import { Link } from 'react-router-dom';
import { Flame, Star, Clock, MapPin, Truck, ShieldCheck, ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Backyard Burgers.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-xl border border-accent-400/30">
              <Flame className="w-4 h-4" />
              <span>#1 Rated Burgers in Town</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-display leading-[1.1]">
              Flame-Grilled
              <span className="block bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent mt-3 drop-shadow-2xl">Perfection</span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-lg leading-relaxed font-light">
              Fresh ingredients, bold flavors, and made-to-order burgers that hit the spot every single time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <p className="text-3xl font-bold mb-1 text-white">40+</p>
                <p className="text-sm text-gray-300 font-medium">Menu Items</p>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <span className="text-3xl font-bold text-white">4.8</span>
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">Rating</p>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <p className="text-3xl font-bold mb-1 text-white">15m</p>
                <p className="text-sm text-gray-300 font-medium">Avg. Prep</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/menu" className="btn-primary bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-lg px-10 py-4 shadow-2xl flex items-center space-x-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <span>Order Now</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/menu" className="btn-outline border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-lg px-10 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Menu
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-gray-200">Fresh Ingredients</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium text-gray-200">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full">
                <Truck className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-gray-200">Free Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block animate-scale-in">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent-500/30 rounded-3xl opacity-20 blur-2xl"></div>

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop"
                alt="Delicious Burger"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-2 border-white/20"
              />

              {/* Floating Rating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md text-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-700">4.8/5</p>
                    <p className="text-xs text-gray-600 font-medium">10,000+ Reviews</p>
                  </div>
                </div>
              </div>

              {/* Price Badge */}
              <div className="absolute -top-4 -right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl p-5 shadow-2xl border border-accent-400/40">
                <p className="text-xs font-semibold mb-1 text-white/90">Starting at</p>
                <p className="text-2xl font-bold">$2.49</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}

export default Hero;
