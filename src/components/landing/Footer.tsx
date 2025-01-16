import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 px-4 md:px-6 lg:px-8 border-t">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="https://9e38803f74ddb504334f22284cd158ed.cdn.bubble.io/f1736994810080x309177236220420350/LOGO.jpg?_gl=1*1r0ttmm*_gcl_au*MjEzOTIzMjUzNS4xNzM0NjY4Mzgz*_ga*MTkzMjQ5Nzg5OC4xNzExMTk0Mzcw*_ga_BFPVR2DEE2*MTczNjk5NDQwNi4xNDcuMC4xNzM2OTk0NDA3LjU5LjAuMA.." 
              alt="Proctor AI Logo" 
              className="w-8 h-8 rounded-md"
            />
            <span className="text-xl font-bold">Proctor AI</span>
          </div>
          <p className="text-muted-foreground max-w-xs">
            Revolutionizing academic integrity through AI-powered proctoring solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
              <li><WaitingListForm /></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-muted-foreground border-t pt-8">
        <p>&copy; {new Date().getFullYear()} Proctor AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;