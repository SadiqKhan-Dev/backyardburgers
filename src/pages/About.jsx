import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChefHat, User, Beef, Flame, Heart, Zap,
  PartyPopper, Users, ClipboardList, Laptop,
  Trophy, Star, Rocket, Gem, Calendar, Target,
  CircleUser, ArrowRight, MapPin, Award, BookOpen
} from 'lucide-react';
import Footer from '../components/Footer';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: 'Chef Marcus Williams',
      role: 'Head Chef & Founder',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=face',
      bio: '20+ years of culinary experience specializing in flame-grilled perfection. Previously worked at Michelin-star restaurants across the country.',
      specialties: ['Grill Master', 'Recipe Development', 'Menu Innovation'],
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      icon: User,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'MBA graduate with 12 years in restaurant management. Ensuring every order is prepared with precision and delivered fresh to our customers.',
      specialties: ['Quality Control', 'Team Leadership', 'Customer Experience'],
    },
    {
      name: 'David Rodriguez',
      role: 'Master Grill Chef',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15f546?w=400&h=400&fit=crop&crop=face',
      bio: 'The burger whisperer - crafting perfect patties since day one. Expert in temperature control and achieving that signature backyard flavor.',
      specialties: ['Perfect Burgers', 'Meat Selection', 'Flavor Profiles'],
    },
    {
      name: 'Emily Thompson',
      role: 'Customer Experience Lead',
      icon: User,
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&crop=face',
      bio: 'Making sure every customer leaves with a smile. Emily handles feedback, loyalty programs, and ensures our service exceeds expectations.',
      specialties: ['Customer Relations', 'Feedback Management', 'Loyalty Programs'],
    },
    {
      name: 'James Park',
      role: 'Pastry & Desserts Chef',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning pastry chef with a passion for creating decadent desserts that perfectly complement our burger menu.',
      specialties: ['Desserts', 'Baking', 'Creative Plating'],
    },
    {
      name: 'Maria Santos',
      role: 'Kitchen Supervisor',
      icon: User,
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
      bio: '15 years of kitchen management experience. Maria coordinates the kitchen team and ensures smooth operations during peak hours.',
      specialties: ['Kitchen Management', 'Food Safety', 'Team Coordination'],
    },
    {
      name: 'Alex Johnson',
      role: 'Sous Chef',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      bio: 'Rising culinary talent with expertise in both traditional and modern cooking techniques. Alex brings creativity and precision to every dish.',
      specialties: ['Sides & Salads', 'Sauce Creation', 'Food Styling'],
    },
    {
      name: 'Lisa Chang',
      role: 'Marketing & Social Media',
      icon: User,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      bio: 'Digital marketing expert who shares our backyard burger story with the world. Lisa manages our online presence and community engagement.',
      specialties: ['Social Media', 'Content Creation', 'Brand Management'],
    },
  ];

  const values = [
    {
      icon: Beef,
      title: 'Quality First',
      description: 'We source only the freshest, premium ingredients from local suppliers',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Flame,
      title: 'Flame-Grilled',
      description: 'Every burger is flame-grilled to order for that authentic backyard taste',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each dish is crafted with passion and attention to detail',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick preparation without compromising on quality',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Backyard Burgers founded', icon: PartyPopper },
    { year: '2021', event: 'Reached 1,000 happy customers', icon: Users },
    { year: '2022', event: 'Expanded menu to 40+ items', icon: ClipboardList },
    { year: '2023', event: 'Launched online ordering system', icon: Laptop },
    { year: '2024', event: '10,000+ orders completed', icon: Trophy },
    { year: '2025', event: 'Voted #1 Burger Spot in the city', icon: Star },
    { year: '2026', event: 'Continuing to serve excellence', icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=800&fit=crop"
            alt="Backyard Burgers restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 animate-pulse">
          <Flame className="w-16 h-16 text-orange-500" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Beef className="w-16 h-16 text-red-500" />
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <Award className="w-5 h-5 text-yellow-400" />
            <span>Voted #1 Burger Spot 2025</span>
          </div>

          {/* Main Heading */}
          <div className="flex items-center justify-center mb-6 space-x-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl shadow-2xl">
              <Flame className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-display drop-shadow-2xl">
              Our Story
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 font-light drop-shadow-xl">
            From a small backyard grill to your favorite burger destination
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white/85 mb-12">
            What started as a passion for flame-grilled perfection has grown into a beloved local institution.
            At Backyard Burgers, we believe every meal should be an experience worth remembering.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-orange-400" />
              <p className="text-2xl font-bold text-white">Est. 2020</p>
              <p className="text-xs text-white/70">Founded With Love</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <ChefHat className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-xs text-white/70">Expert Chefs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Star className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
              <p className="text-2xl font-bold text-white">4.8</p>
              <p className="text-xs text-white/70">Average Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
              <p className="text-2xl font-bold text-white">50K+</p>
              <p className="text-xs text-white/70">Happy Customers</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowRight className="w-8 h-8 mx-auto text-white/60 rotate-90" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Gem className="w-4 h-4" />
              <span>Our Core Values</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence in every bite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Beef,
                title: 'Quality First',
                description: 'We source only the freshest, premium ingredients from local suppliers',
                color: 'from-red-500 to-red-600',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
              },
              {
                icon: Flame,
                title: 'Flame-Grilled',
                description: 'Every burger is flame-grilled to order for that authentic backyard taste',
                color: 'from-orange-500 to-orange-600',
                image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
              },
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Each dish is crafted with passion and attention to detail',
                color: 'from-pink-500 to-pink-600',
                image: 'https://images.unsplash.com/photo-1551782450-17144efb5773?w=400&h=300&fit=crop',
              },
              {
                icon: Zap,
                title: 'Fast Service',
                description: 'Quick preparation without compromising on quality',
                color: 'from-yellow-500 to-yellow-600',
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-600"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-br ${value.color} p-3 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center font-display">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Milestones That Shaped Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The milestones that shaped Backyard Burgers
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full"></div>

            <div className="space-y-16">
              {[
                { year: '2020', event: 'Backyard Burgers founded', icon: PartyPopper, image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop' },
                { year: '2021', event: 'Reached 1,000 happy customers', icon: Users, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop' },
                { year: '2022', event: 'Expanded menu to 40+ items', icon: ClipboardList, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
                { year: '2023', event: 'Launched online ordering system', icon: Laptop, image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop' },
                { year: '2024', event: '10,000+ orders completed', icon: Trophy, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
                { year: '2025', event: 'Voted #1 Burger Spot in the city', icon: Star, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop' },
                { year: '2026', event: 'Continuing to serve excellence', icon: Rocket, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop' },
              ].map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                        {/* Image */}
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={milestone.image}
                            alt={milestone.event}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          {/* Icon Badge */}
                          <div className="absolute top-3 right-3 bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text mb-2 font-display">
                            {milestone.year}
                          </p>
                          <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full border-4 border-white dark:border-gray-900 shadow-xl animate-pulse"></div>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <ChefHat className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Meet The Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind your favorite meals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {/* Team Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                        <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                            {member.name}
                          </h3>
                          <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    {/* Specialties */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-400 mb-2">
                        Specialties:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 via-red-600/95 to-pink-600/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Target className="w-4 h-4" />
              <span>Fun Facts</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4 font-display drop-shadow-2xl">
              Numbers That Tell Our Story
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our impact in numbers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Burgers Served', icon: '🍔' },
              { value: '1,200+', label: 'Lbs of Beef Weekly', icon: '🥩' },
              { value: '98%', label: 'Customer Satisfaction', icon: '⭐' },
              { value: '15 min', label: 'Average Prep Time', icon: '⏱️' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 shadow-xl hover:shadow-2xl"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <p className="text-5xl font-bold text-white mb-3 drop-shadow-lg">
                  {stat.value}
                </p>
                <p className="text-lg text-white/85 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=600&fit=crop"
            alt="Delicious food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-5 rounded-full shadow-2xl animate-pulse">
              <Rocket className="w-14 h-14 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 font-display drop-shadow-2xl">
            Ready to Experience the Best?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Join thousands of happy customers who've made us their favorite burger spot
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Flame className="w-6 h-6" />
              Order Now
            </Link>
            <Link
              to="/orders"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-6 h-6" />
              Track Your Order
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
