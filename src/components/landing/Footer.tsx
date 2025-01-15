const Footer = () => (
  <footer className="py-12 px-4 md:px-6 lg:px-8 border-t">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold mb-4">Product</h3>
        <ul className="space-y-2">
          <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
          <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
          <li><a href="#demo" className="text-muted-foreground hover:text-foreground">Request Demo</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
          <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
          <li><a href="#careers" className="text-muted-foreground hover:text-foreground">Careers</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#docs" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
          <li><a href="#blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
          <li><a href="#support" className="text-muted-foreground hover:text-foreground">Support</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
          <li><a href="#terms" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
          <li><a href="#security" className="text-muted-foreground hover:text-foreground">Security</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-12 text-center text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Proctor AI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;