export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12" data-testid="footer">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-secondary mb-4" data-testid="text-copyright">
            © 2024 Edoardo Maioli. All rights reserved.
          </p>
          <p className="text-sm text-secondary" data-testid="text-footer-description">
            Built with modern web technologies and a passion for clean design.
          </p>
        </div>
      </div>
    </footer>
  );
}
