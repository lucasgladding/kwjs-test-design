import Link from "next/link";

export default function Navigation() {
    return (
        <header className="flex pb-8">
            <h1>Test Design</h1>
            <div className="flex-1" />
            <ul className="flex flex-row gap-4">
                <li>
                    <Link href="/ag-grid">Ag Grid</Link>
                </li>
                <li>
                    <Link href="/mui-data-grid">MUI</Link>
                </li>
            </ul>
        </header>
    );
}
