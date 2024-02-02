export default function Header({children, onHeaderClick}) {
    return (
        <header onClick={onHeaderClick}>
            {children}
        </header>
    );
}