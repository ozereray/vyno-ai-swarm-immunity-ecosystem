import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-vyno-black pt-32 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-vyno-accent flex items-center justify-center rounded">
                <Shield size={18} className="text-black" />
              </div>
              <span className="text-xl font-black tracking-tighter">VYNO BRAIN</span>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm leading-relaxed font-light">
              Engineering a decentralized neural future. Providing the digital immune system 
              for autonomous systems across the global infrastructure.
            </p>
          </div>

          {/* Sectors Column */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">The Ecosystem</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-light">
              <li className="hover:text-vyno-accent cursor-pointer transition">Mobility Systems</li>
              <li className="hover:text-vyno-accent cursor-pointer transition">Energy Grids</li>
              <li className="hover:text-vyno-accent cursor-pointer transition">Industrial Swarms</li>
            </ul>
          </div>

          {/* Vision Column */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Our Vision</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-light">
              <li className="hover:text-vyno-accent cursor-pointer transition">German Engineering</li>
              <li className="hover:text-vyno-accent cursor-pointer transition">Self-Evolution</li>
              <li className="hover:text-vyno-accent cursor-pointer transition">Global Integrity</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-700 text-[10px] uppercase tracking-widest font-medium">
            © 2025 VYNO AI ECOSYSTEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-10 text-[10px] text-zinc-700 uppercase tracking-widest font-medium">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Legal Audit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}