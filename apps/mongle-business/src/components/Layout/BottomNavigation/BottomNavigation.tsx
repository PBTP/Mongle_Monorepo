import styles from './BottomNavigation.module.scss';
import { NavLink } from 'react-router-dom';
const BottomNavigation = () => {
  return (
    <nav className={styles.BottomNavigationWrapper}>
      <NavLink
        to="/"
        className={({ isActive }) => `${styles.NavItem} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.BottomIcon}>🏠</div>
        <div className={styles.BottomBottomLabel}>예약내역</div>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => `${styles.NavItem} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.BottomIcon}>🔍</div>
        <div className={styles.BottomLabel}>가게관리</div>
      </NavLink>
      <NavLink
        to="/sign-up"
        className={({ isActive }) => `${styles.NavItem} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.BottomIcon}>🔔</div>
        <div className={styles.BottomLabel}>채팅</div>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => `${styles.NavItem} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.BottomIcon}>👤</div>
        <div className={styles.BottomLabel}>마이페이지</div>
      </NavLink>
    </nav>
  );
}

export default BottomNavigation;