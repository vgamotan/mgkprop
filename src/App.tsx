import { useState, useEffect } from 'react';
// @ts-ignore
import prestonHeadshot from './assets/images/preston_soon_new_headshot_1782135825508.jpg';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  Quote,
  Star,
  Flame, 
  Maximize2, 
  Award, 
  Check, 
  HelpCircle,
  TrendingUp,
  Briefcase,
  ExternalLink
} from 'lucide-react';

export default function App() {
  // Safe WhatsApp pre-fills
  const waBase = "https://wa.me/6588033890";
  const defaultMsg = "Hi Preston, I'm looking for food-grade commercial property in Singapore. Can we chat?";
  
  // Custom Requirements Specialist Planner State
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([
    "SFA-Compliant Space",
    "Cold Room Facility"
  ]);
  
  // Available requirements to select
  const requirementsList = [
    { id: "sfa", label: "SFA-Compliant Layout", msg: "SFA-Compliant Layout" },
    { id: "cold", label: "Cold Room / Cold Storage", msg: "Cold Storage readiness" },
    { id: "lift", label: "Separate Raw & Cooked Lifts", msg: "separate lifts for raw & cooked food" },
    { id: "exhaust", label: "Dedicated Kitchen Exhaust", msg: "dedicated kitchen exhaust shaft" },
    { id: "height", label: "High Ceiling Clearance (> 5.5m)", msg: "high floor-to-floor height clearance" },
    { id: "freehold", label: "Freehold Tenure (No ABSD)", msg: "Freehold tenure options" },
    { id: "loading", label: "Direct Rampped-up Loading", msg: "direct loading/unloading operations" }
  ];

  const toggleSpec = (label: string) => {
    if (selectedSpecs.includes(label)) {
      setSelectedSpecs(selectedSpecs.filter(s => s !== label));
    } else {
      setSelectedSpecs([...selectedSpecs, label]);
    }
  };

  // Compile dynamic WhatsApp URL based on user specification selections
  const getDynamicWaLink = () => {
    if (selectedSpecs.length === 0) {
      return `${waBase}?text=${encodeURIComponent(defaultMsg)}`;
    }
    const specsStr = selectedSpecs.join(", ");
    const customMsg = `Hi Preston, I'm looking for a food-grade industrial space with the following specifications: [${specsStr}]. Can you recommend some suitable listings?`;
    return `${waBase}?text=${encodeURIComponent(customMsg)}`;
  };

  // Sticky header background transition on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Active Testimonial Carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialAutoplay, setIsTestimonialAutoplay] = useState(true);

  const testimonials = [
    {
      id: "testimonial-1",
      quote: "Preston is exceptional. Finding an industrial space in Singapore with precise SFA zoning for raw meat processing and proper grease traps is a compliance nightmare. He navigated the NEA/SFA rules flawlessly and secured our 12,000 sqft facility in West Pecan.",
      author: "Tan Wei Seong",
      role: "Co-Founder, Apex Artisanal Meats",
      property: "SFA-Approved Food Suite",
    },
    {
      id: "testimonial-2",
      quote: "Working with Preston within our BNI alliance has been extremely lucrative. He helped my client source a custom 3-phase power, 500-amp food factory with pre-fitted separate raw and cooked material elevators within 3 weeks. Complete transactional elite standards.",
      author: "Marcus Lim",
      role: "Director, Agri-Tech Logistics SG",
      property: "Cold-Room Central Hub, Mandai",
    },
    {
      id: "testimonial-3",
      quote: "Our cold-storage logistics requirements were highly specific regarding structural ceiling limits and floor load-bearing capacity for heavy racking. Preston’s deep technical expertise in food-grade properties saved us months of futile site viewings.",
      author: "Sarah Mendoza",
      role: "Chief Operations Officer, Zenith Cold Chain",
      property: "Cold Storage & Packing Plant, Tuas",
    },
  ];

  useEffect(() => {
    if (!isTestimonialAutoplay) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isTestimonialAutoplay, testimonials.length]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-gold selection:text-brand-green">
      
      {/* 1. FIXED NAV */}
      <nav 
        id="nav-section"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-green/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-gold/20' 
            : 'bg-brand-green/85 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-brand-gold">MGK</span> Prop
            </span>
            <span className="text-[10px] text-brand-cream/60 tracking-wider uppercase font-mono mt-0.5">
              PRESTON SOON · SENIOR SPECIALIST
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-xs text-brand-cream/80 bg-white/5 px-3 py-1.5 rounded border border-white/10 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp Message
            </span>
            <a 
              href={`${waBase}?text=${encodeURI(defaultMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-semibold text-xs md:text-sm px-4 py-2.5 rounded shadow-md transition-all duration-200 flex items-center gap-2 hover:translate-y-[-1px]"
              id="nav-cta-whatsapp"
            >
              <Phone size={14} className="fill-current" />
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header 
        id="hero-section"
        className="relative bg-brand-green text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[90vh]"
      >
        {/* Subtle decorative grid background overlay to mimic real estate planning diagrams */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#C9A84C_1px,transparent_1px),linear-gradient(to_bottom,#C9A84C_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Absolute dark overlay & lighting flare */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-brand-green/90 to-brand-green/45 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded text-brand-gold text-xs font-semibold uppercase tracking-wider font-mono">
              <span>Singapore Industrial Advisory</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-brand-cream">
              Securing Compliant, Top-Tier <span className="text-brand-gold italic">Food-Grade Spaces</span> for Your Corporate Enterprise
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-brand-cream/80 max-w-2xl font-light leading-relaxed">
              Unlock SFA-compliant food factories, cold storages, central kitchens & food processing hubs. Expert commercial advisory backed by premium JTC & freehold listing intelligence.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a 
                href="tel:+6588033890"
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green py-3.5 px-7 rounded font-semibold text-center transition-all duration-200 shadow-xl flex items-center justify-center gap-3 group text-sm md:text-base"
                id="hero-primary-cta"
              >
                <Phone size={18} className="fill-current animate-bounce" />
                <span>Quick Call</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#listings-section"
                className="bg-transparent hover:bg-white/5 border border-brand-cream/30 text-brand-cream/95 py-3.5 px-6 rounded font-medium text-center transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base shadow-sm"
                id="hero-secondary-scroll"
              >
                <span>View Core Properties</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block animate-fade-in-delayed">
            {/* Quick stats panel */}
            <div className="bg-brand-green-dark/80 backdrop-blur-md rounded-lg border border-brand-gold/30 p-6 space-y-6 text-brand-cream shadow-2xl">
              <h3 className="font-serif text-lg font-bold text-brand-gold border-b border-brand-gold/10 pb-3 flex items-center gap-2">
                <Compass size={18} />
                <span>Specialist Advisory Overview</span>
              </h3>
              
              <ul className="space-y-4 font-sans text-sm text-brand-cream/90">
                <li className="flex items-start gap-3">
                  <Check className="text-brand-gold stroke-[3] mt-0.5 shrink-0" size={16} />
                  <span>SFA Site Selection Assessment & Audit Compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-gold stroke-[3] mt-0.5 shrink-0" size={16} />
                  <span>Power Capacity, Gas & Waste Exhaust Sizing Solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-gold stroke-[3] mt-0.5 shrink-0" size={16} />
                  <span>High-Spec Freehold Asset Protection with No ABSD</span>
                </li>
              </ul>

              <div className="bg-brand-green py-3 px-4 rounded border border-brand-cream/10 text-center">
                <span className="text-[11px] uppercase tracking-wider text-brand-cream/60 block font-mono">Agency Representation</span>
                <span className="text-sm font-bold text-brand-gold block mt-0.5">OrangeTee & Tie Pte Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 5. PROPERTY LISTINGS SECTION */}
      <section 
        id="listings-section"
        className="py-20 md:py-24 bg-brand-green text-brand-white relative"
      >
        {/* Subtle background divider elements */}
        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-brand-cream/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">Featured Capital Assets</span>
            <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brand-cream tracking-tight">
              SFA-Compliant Mandai Industrial Hubs
            </h2>
            <p className="text-brand-cream/70 max-w-xl mx-auto text-sm sm:text-base font-light">
              Premium freehold space designed exclusively for modern food manufacturing, cold storage logistics, and high-output central kitchens. Exempt from ABSD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch" id="property-card-grid">
            
            {/* CARD 1: Smart Food @ Mandai */}
            <article className="bg-brand-green-dark border-2 border-brand-gold/40 rounded-xl overflow-hidden flex flex-col hover:border-brand-gold transition-all duration-300 shadow-2xl h-full">
              
              {/* Image Section */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-brand-charcoal">
                <img 
                  src="https://www.orangetee.com/workahome/ProjectLaunch/ProjectImages/1299/092-19%20%26%2021%20Mandai%20Estate-v1-5-HR%20(1).jpg" 
                  alt="Smart Food @ Mandai" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-brand-gold text-brand-green font-mono text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-wider">
                    Freehold
                  </span>
                  <span className="bg-brand-green text-brand-cream border border-brand-gold/40 font-mono text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-wider">
                    B2 Food Factory
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-green-dark to-transparent"></div>
              </div>

              {/* Title & Details */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-cream/60 text-xs">
                    <MapPin size={14} className="text-brand-gold shrink-0" />
                    <span>10 Mandai Estate, Singapore 729907</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-brand-cream tracking-tight mt-2 pb-3 border-b border-brand-gold/10">
                    Smart Food @ Mandai
                  </h3>

                  {/* Fact sheet details */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 py-4 text-xs font-sans text-brand-cream/95">
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Tenure / Zoning</span>
                      <span className="font-medium text-brand-gold">Freehold / B2 Food Factory</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Structure Configuration</span>
                      <span className="font-medium text-brand-cream">10-Storey, Fully Ramped Up</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Unit Capacity</span>
                      <span className="font-medium text-brand-cream">84 Production Units</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Total Project GFA</span>
                      <span className="font-medium text-brand-cream">157,319 sqft</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-brand-gold/10 space-y-2.5">
                    <span className="text-[10px] text-brand-gold uppercase tracking-widest font-mono block">Structural Advantages</span>
                    <ul className="text-xs text-brand-cream/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Customisable cold room integration configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Dedicated lifts separate for raw & cooked food handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Direct ramp-up access for streamlined loading & unloading operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Near JTC Sungei Kadut Eco-District (No ABSD Required)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href={`${waBase}?text=${encodeURIComponent("Hi Preston, I'd like to enquire about Smart Food @ Mandai.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-semibold text-center py-3 rounded text-xs uppercase tracking-wider block transition-all duration-200 outline-none hover:shadow-lg focus:ring-2 focus:ring-brand-gold"
                    id="enquire-smart-food"
                  >
                    WhatsApp Enquiry & Specs Brochure
                  </a>
                </div>
              </div>

            </article>

            {/* CARD 2: Food Vision @ Mandai */}
            <article className="bg-brand-green-dark border-2 border-brand-gold/40 rounded-xl overflow-hidden flex flex-col hover:border-brand-gold transition-all duration-300 shadow-2xl h-full">
              
              {/* Image Section */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-brand-charcoal">
                <img 
                  src="https://www.orangetee.com/workahome/ProjectLaunch/ProjectImages/1299/092-19%20%26%2021%20Mandai%20Estate-V3.jpg" 
                  alt="Food Vision @ Mandai" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-brand-gold text-brand-green font-mono text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-wider">
                    Freehold
                  </span>
                  <span className="bg-brand-green text-brand-cream border border-brand-gold/40 font-mono text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-wider">
                    High Floor-to-Floor
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-green-dark to-transparent"></div>
              </div>

              {/* Title & Details */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-cream/60 text-xs">
                    <MapPin size={14} className="text-brand-gold shrink-0" />
                    <span>21 Mandai Estate Road, Singapore 729913</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-brand-cream tracking-tight mt-2 pb-3 border-b border-brand-gold/10">
                    Food Vision @ Mandai
                  </h3>

                  {/* Fact sheet details */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 py-4 text-xs font-sans text-brand-cream/95">
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Tenure & Units</span>
                      <span className="font-medium text-brand-gold">Freehold / 115 Units Total</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Commercial Pricing</span>
                      <span className="font-medium text-brand-cream font-mono">From $2,319,000</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Floor Clearance Height</span>
                      <span className="font-medium text-brand-cream">Up to 5.95m Clearance</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-cream/50 uppercase font-mono block tracking-wider">Unit GFA Sizes</span>
                      <span className="font-medium text-brand-cream">1,668 sqft – 1,765 sqft</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-brand-gold/10 space-y-2.5">
                    <span className="text-[10px] text-brand-gold uppercase tracking-widest font-mono block">Structural Advantages</span>
                    <ul className="text-xs text-brand-cream/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Zero absolute void space (maximise usable efficiency footprint)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Pre-installed dedicated kitchen exhaust ventilation shafts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Sunken floor sections specifically for cold-room & kitchen ops</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 font-bold">✔</span>
                        <span>Adjacent to Sungei Kadut ECO & Agri-Tech Corridor (No ABSD)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href={`${waBase}?text=${encodeURIComponent("Hi Preston, I'd like to enquire about Food Vision @ Mandai.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-semibold text-center py-3 rounded text-xs uppercase tracking-wider block transition-all duration-200 outline-none hover:shadow-lg focus:ring-2 focus:ring-brand-gold"
                    id="enquire-food-vision"
                  >
                    WhatsApp Enquiry & Specs Brochure
                  </a>
                </div>
              </div>

            </article>

          </div>
        </div>
      </section>

      {/* NEW INTERACTIVE SECTION: REQUIREMENTS CONSTRUCTOR PLANNER */}
      <section 
        id="planner-section" 
        className="py-20 md:py-24 max-w-5xl mx-auto px-4 md:px-8 text-brand-charcoal"
      >
        <div className="bg-white rounded-xl shadow-2xl border border-brand-gold/20 overflow-hidden">
          <div className="bg-brand-green p-6 md:p-10 text-white min-h-[160px] relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            <div className="relative">
              <span className="text-[10px] text-brand-gold font-mono tracking-widest uppercase block mb-1">Corporate Client Advisory Utility</span>
              <h3 className="font-serif text-2xl md:text-3.5xl font-bold tracking-tight text-brand-cream">
                SFA Food Industrial Specification Matcher
              </h3>
              <p className="text-brand-cream/70 text-xs md:text-sm font-light mt-1 max-w-2xl">
                Configure your enterprise requirements below. This tool will auto-construct a compliant WhatsApp brief specifically curated for Preston's immediate inventory search.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8 bg-brand-cream/25">
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-wider text-brand-green uppercase flex items-center gap-1.5">
                <Check icon="true" size={12} className="text-brand-gold bg-brand-green p-0.5 rounded-full" />
                <span>Select Your Required Mechanical & Electrical Specifications:</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {requirementsList.map((item) => {
                  const selected = selectedSpecs.includes(item.label);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleSpec(item.label)}
                      className={`flex items-start text-left gap-3 p-3 rounded border text-xs sm:text-xs font-medium cursor-pointer transition-all duration-200 ${
                        selected 
                          ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-inner font-semibold' 
                          : 'border-brand-charcoal/15 bg-white text-brand-charcoal hover:border-brand-gold'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        selected ? 'bg-brand-green border-brand-green text-brand-gold' : 'border-brand-charcoal/30 bg-transparent'
                      }`}>
                        {selected && <Check size={10} className="stroke-[4]" />}
                      </div>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compiled code display */}
            <div className="bg-brand-green-dark rounded-lg p-5 text-brand-cream border border-brand-gold/30 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-brand-gold uppercase pb-2 border-b border-brand-gold/15">
                <span>WhatsApp Brief Auto-Compiled Preview</span>
                <span className="text-[10px] text-green-400">Ready to Send</span>
              </div>
              <p className="font-sans text-xs md:text-sm text-brand-cream/90 italic leading-relaxed font-light">
                "{selectedSpecs.length > 0 
                  ? `Hi Preston, I'm looking for a food-grade industrial space with the following specifications: [${selectedSpecs.join(", ")}]. Can you recommend some suitable listings?`
                  : defaultMsg
                }"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-brand-charcoal/75">
                <ShieldCheck className="text-brand-gold" size={18} />
                <span>Your configuration details are encrypted and loaded directly on client-side WhatsApp.</span>
              </div>
              
              <a 
                href={getDynamicWaLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-hover text-brand-green hover:-translate-y-0.5 active:translate-y-0 text-center font-bold px-8 py-3.5 rounded shadow-xl text-xs uppercase tracking-wider block transition-all duration-200"
                id="developer-dynamic-wa-cta"
              >
                Send Specifications Brief to Preston
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT PRESTON */}
      <section 
        id="about-section"
        className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Portrait Photo Container (Left side) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-lg shadow-2xl p-1 bg-brand-gold">
              <div className="relative w-full h-full bg-brand-green-dark rounded-lg overflow-hidden group">
                <img 
                  src={prestonHeadshot} 
                  alt="Preston Soon - Senior Real Estate Specialist" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top opacity-95 transition-all duration-300 group-hover:scale-[1.02]"
                />
                
                {/* Branding element overlays */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent p-6 pt-20 flex flex-col justify-end text-left">
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#FFF] bg-brand-green/80 backdrop-blur-sm border border-brand-gold/40 px-2.5 py-1 rounded font-mono font-bold leading-none">
                      Senior Specialist
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white tracking-tight">Preston Soon</h4>
                    <p className="text-brand-gold text-xs uppercase tracking-wider font-mono mt-1 font-semibold">OrangeTee & Tie Pte Ltd</p>
                  </div>
                  
                  {/* Small line to split credentials */}
                  <div className="border-t border-brand-gold/20 pt-3 mt-3 flex justify-between items-center text-[10px] text-brand-cream/70 font-mono">
                    <span>CEA No: <strong>R067294A</strong></span>
                    <span>Licence No: <strong>L3009250K</strong></span>
                  </div>
                </div>

                {/* Delicate gold outline corner decoration */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-brand-gold/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-brand-gold/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-brand-gold/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-brand-gold/40"></div>
              </div>
            </div>
          </div>

          {/* Bio + Niche tags (Right side) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">Professional Background</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green tracking-tight mt-2">
                Specialized Property Strategy Tailored for the Food Industry
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-light">
              <p>
                I am <strong className="font-semibold text-brand-green">Preston Soon</strong>, a Senior Real Estate Specialist with OrangeTee & Tie. Unlike typical generalist brokers, my practice is exclusively focused on Singapore’s complex <span className="font-semibold text-brand-green underline decoration-brand-gold decoration-2">food-grade commercial & industrial land sector</span>.
              </p>
              <p>
                The modern food business environment demands rigorous operational standards. Finding the correct facility requires expert calculations regarding <strong>SFA food safety guidelines</strong>, cold-chain capacity, separate lift flows for raw/cooked products, and high-ampere electrical power supply. 
              </p>
              <p>
                As an active <strong>BNI member</strong>, my goal is to serve as the elite, go-to referral resource for food corporations, Agri-tech firms, central kitchen operators, and commercial real estate investors across Singapore. I remove the friction of site acquisition, ensuring complete structural and regulatory compliance from day one.
              </p>
            </div>

            {/* Specialist Niche Tags */}
            <div className="pt-4 space-y-3">
              <h4 className="font-serif text-lg font-bold text-brand-green">Niche Advisory Footprint</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Food Factories",
                  "Central Kitchens",
                  "Cold Storage Facilities",
                  "Food Processing Hubs",
                  "SFA-Compliant Spaces",
                  "B2 Heavy Industrial"
                ].map((tag, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-brand-green bg-brand-green/5 border border-brand-green/10 rounded-full font-medium"
                  >
                    <CheckCircle2 size={12} className="text-brand-gold stroke-[3.5]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick credentials box */}
            <div className="bg-brand-cream-dark p-4 rounded-md border border-brand-green/5 mt-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-charcoal/50">CEA Registration No</span>
                <span className="block font-serif text-base font-bold text-brand-green">R067294A</span>
              </div>
              <div className="border-l border-brand-charcoal/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-charcoal/50">Agency Licence No</span>
                <span className="block font-serif text-base font-bold text-brand-green">L3009250K</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BNI STRIP */}
      <section 
        id="bni-strip"
        className="bg-gradient-to-r from-brand-gold via-brand-gold/95 to-brand-gold/90 text-brand-green py-12 shadow-lg border-y border-brand-gold-hover"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-1.5 bg-brand-green rounded-full shadow-inner mb-2 text-brand-gold">
            <span className="text-[10px] tracking-widest uppercase font-mono px-3 py-1 font-bold">BNI EXCLUSIVE CONTACT</span>
          </div>
          
          <h3 className="font-serif text-2xl md:text-3.5xl font-bold tracking-tight">
            Connecting BNI Colleagues with Prime Food-Grade Referrals
          </h3>
          
          <p className="text-sm md:text-base leading-relaxed text-brand-green/90 font-light max-w-2xl mx-auto">
            I am dedicated to serving as the highest-tier referral contact for Singapore industrial properties within our networks. If you have partners, business acquaintances, or food industry contacts examining relocation options, I guarantee expert compliance advisory and exceptional transactional representation. Let's grow together.
          </p>

          <div className="pt-2">
            <a 
              href={`${waBase}?text=${encodeURIComponent("Hi Preston, I am a BNI member and would like to coordinate commercial referrals with you.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-brand-cream hover:text-brand-gold font-semibold text-xs md:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-200"
              id="bni-coordinates-cta"
            >
              <span>Coordinate Referrals with Preston</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <section 
        id="trust-bar" 
        className="bg-brand-gold py-5 shadow-inner border-y border-brand-gold-hover/30 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Flex wrap on mobile, row on desktop */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-y-3 gap-x-6 md:gap-x-12 text-brand-green font-serif text-sm md:text-base font-semibold text-center">
            <span className="inline-flex items-center gap-1">
              <span className="text-xs tracking-wider uppercase font-mono px-1.5 py-0.5 bg-brand-green text-brand-cream rounded mr-1">CEA</span> 
              R067294A
            </span>
            <span className="hidden md:inline text-brand-green/40 font-mono">·</span>
            <span>OrangeTee & Tie</span>
            <span className="hidden md:inline text-brand-green/40 font-mono">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              BNI Member
            </span>
            <span className="hidden md:inline text-brand-green/40 font-mono">·</span>
            <span>Food-Grade Property Specialist</span>
            <span className="hidden md:inline text-brand-green/40 font-mono">·</span>
            <span>HDB & Commercial Licensed</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL SECTION */}
      <section 
        id="testimonials-section"
        className="py-20 bg-gradient-to-br from-brand-green to-brand-green/95 text-white relative overflow-hidden"
        onMouseEnter={() => setIsTestimonialAutoplay(false)}
        onMouseLeave={() => setIsTestimonialAutoplay(true)}
      >
        {/* Soft background quote marks decoration */}
        <div className="absolute top-10 left-10 opacity-5 pointer-events-none text-[150px] font-serif leading-none select-none">“</div>
        <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none text-[150px] font-serif leading-none select-none">”</div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10 relative z-10 text-center">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">CLIENT SUCCESS STORIES</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream">
              Advising Singapore’s Top Food Institutions
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded mt-3"></div>
          </div>

          {/* Carousel Frame */}
          <div className="relative min-h-[300px] md:min-h-[240px] flex items-center justify-center">
            {testimonials.map((t, index) => {
              const isActive = index === activeTestimonial;
              return (
                <div
                  key={t.id}
                  className={`space-y-6 max-w-3xl mx-auto px-4 transition-all duration-500 ease-in-out transform ${
                    isActive 
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto relative z-10' 
                      : 'opacity-0 translate-y-4 scale-95 pointer-events-none absolute'
                  }`}
                >
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 text-brand-gold" id={`stars-${t.id}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed italic text-white/90 font-light">
                    "{t.quote}"
                  </p>

                  {/* Client Metadata */}
                  <div className="space-y-1">
                    <h4 className="font-sans text-base font-bold text-brand-gold tracking-wide">
                      {t.author}
                    </h4>
                    <p className="font-mono text-xs text-brand-cream/70">
                      {t.role} · <span className="text-brand-cream underline decoration-brand-gold/60">{t.property}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Controls & Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 gap-4">
            
            {/* Auto-play status indicator */}
            <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${isTestimonialAutoplay ? 'bg-brand-gold animate-ping' : 'bg-white/40'}`}></span>
              {isTestimonialAutoplay ? 'Autoplaying (Pause on hover)' : 'Paused'}
            </span>

            {/* Pagination Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimonial-dot-${idx}`}
                  onClick={() => {
                    setActiveTestimonial(idx);
                    setIsTestimonialAutoplay(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial 
                      ? 'bg-brand-gold scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                id="testimonial-prev-btn"
                onClick={() => {
                  setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setIsTestimonialAutoplay(false);
                }}
                className="p-2 rounded-full border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={() => {
                  setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                  setIsTestimonialAutoplay(false);
                }}
                className="p-2 rounded-full border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT / CTA SECTION */}
      <section 
        id="contact-section"
        className="py-24 bg-brand-cream relative"
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#0D3B2E_1px,transparent_1px),linear-gradient(to_bottom,#0D3B2E_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-mono block">Direct Channels</span>
            <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brand-green tracking-tight">
              Initiate Your Property Mandate
            </h2>
            <p className="text-brand-charcoal/70 max-w-lg mx-auto text-sm sm:text-base font-light leading-relaxed">
              Have specific food factory parameters on power capacity, floor loading, or zoning regulation clearances? Initiate a direct advisory consult now. 
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border border-brand-green/10 flex flex-col items-center max-w-md mx-auto space-y-6">
            
            <a 
              href={`${waBase}?text=${encodeURIComponent(defaultMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-green hover:bg-brand-green-dark text-brand-cream hover:text-brand-gold transition-all duration-200 py-4 px-8 w-full rounded font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg"
              id="contact-large-whatsapp-cta"
            >
              <Phone size={18} className="fill-current animate-pulse text-brand-gold" />
              <span>Launch WhatsApp Chat</span>
            </a>

            <div className="space-y-1">
              <span className="text-[10px] text-brand-charcoal/50 uppercase font-mono tracking-widest block">Direct Phone Line</span>
              <a 
                href="tel:+6588033890" 
                className="font-serif text-2xl font-bold text-brand-green tracking-tight hover:text-brand-gold transition-colors duration-200"
              >
                +65 8803 3890
              </a>
            </div>

            <div className="pt-4 border-t border-brand-charcoal/10 w-full text-[11px] text-brand-charcoal/60 leading-relaxed font-mono">
              OrangeTee & Tie Pte Ltd <br />
              Agency Licence Licence No: L3009250K <br />
              CEA Reg No: R067294A
            </div>
          </div>

          <p className="text-[10px] sm:text-xs text-brand-charcoal/50 max-w-xl mx-auto leading-relaxed pt-4">
            Disclaimer: The information above has been obtained with strict compliance to developer-provided figures and represents actual ongoing commercial property offerings in Mandai, Singapore. Transacting business via registered, licensed agencies guarantees client safety. 
          </p>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer 
        id="footer-section"
        className="bg-brand-charcoal text-brand-cream/80 py-12 border-t border-brand-gold/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          
          <div className="space-y-3">
            <span className="font-serif text-lg font-bold tracking-tight text-white block">
              <span className="text-brand-gold font-medium">MGK</span> Prop
            </span>
            <p className="text-xs text-brand-cream/50 max-w-sm tracking-wide leading-relaxed">
              Bespoke real estate strategy for food cold room storage, central kitchen spaces, and manufacturing entities across Singapore.
            </p>
            <p className="text-[10px] font-mono tracking-widest text-brand-gold">
              CEA REG: R067294A / LICENCE: L3009250K
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <div className="text-xs text-brand-cream/60 leading-relaxed">
              © {new Date().getFullYear()} Preston Soon · MGK Prop. All Rights Reserved. <br />
              Represented by OrangeTee & Tie Pte Ltd.
            </div>
            
            <div className="text-[10px] text-brand-cream/40 max-w-xs md:ml-auto leading-normal">
              <strong>Official Agency Legal Disclaimer:</strong> CEA Reg. R067294A · OrangeTee Group · Elite Member BNI. All representations valid under Singapore Housing and Development Board & Council for Estate Agencies rules.
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
