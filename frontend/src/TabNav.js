import './TabNav.css';

export default function TabNav() {
    return (
        <nav className="box">
            <ul>
                <li>
                    <a href="/transfer-page" className="text">Transfer Credit</a>
                </li>
                <li>
                    <a href="/schedule-plan" className="text">Schedule Plan</a>
                </li>
                <li>
                    <a href="/credit-list" className="text">My Courses</a>
                </li>
            </ul>
        </nav>
    )
}