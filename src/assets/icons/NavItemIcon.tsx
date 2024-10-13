const NavItemIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      opacity="0.5"
      aria-hidden="true"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      data-view-component="true"
      className={className}
    >
      <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z" />
    </svg>
  );
};

export default NavItemIcon;