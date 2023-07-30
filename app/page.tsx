import styles from './styles/page.module.css';
import HomeLayout from "./components/templates/home/home";

export default function Home() {
  return (
    <HomeLayout>
      <h2>Welcome to the Home Page!</h2>
      <p>Login to see your dashboard</p>
    </HomeLayout>
)}
