
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-muted/30 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-blue-700 italic">BlogIt</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Your daily source for amazing articles, trending stories, and impactful content.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-700" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-500" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">About Us</li>
              <li className="hover:text-foreground cursor-pointer">Careers</li>
              <li className="hover:text-foreground cursor-pointer">Press</li>
              <li className="hover:text-foreground cursor-pointer">Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">Help Center</li>
              <li className="hover:text-foreground cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-foreground cursor-pointer">Privacy Policy</li>
              <li className="hover:text-foreground cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Subscribe for the latest articles and trending updates.
            </p>

            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-white" />
              <Button className="bg-blue-700 text-white hover:bg-blue-800">Join</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BlogIt — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
