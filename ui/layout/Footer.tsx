import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer site-shell"><span>© {new Date().getFullYear()} Jordan Harrison</span><span className="footer-note">A little design. A lot of care.</span><div className="footer-links"><a href="https://github.com/jouwdan" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/jouwdan" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#top" aria-label="Back to top"><ArrowUp size={18} /></a></div></footer>
  );
}
