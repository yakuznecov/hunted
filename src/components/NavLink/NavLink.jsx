function NavLink({ className, to, children }) {
    return (
        <a href={to} className={className} target="_blank">
            {children}
        </a>
    );
}

export default NavLink;
