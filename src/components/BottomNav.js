import './BottomNav.css';

const BottomNav = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'hero', icon: 'fas fa-home', label: 'Home' },
    { id: 'about', icon: 'fas fa-user', label: 'About' },
    { id: 'resume', icon: 'fas fa-file-alt', label: 'Resume' },
    { id: 'projects', icon: 'fas fa-code', label: 'Projects' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' },
  ];

  const handleNav = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => handleNav(item.id)}
          aria-label={`Navigate to ${item.label}`}
          aria-current={activeSection === item.id ? 'page' : undefined}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
