// eslint-disable-next-line jsx-a11y/alt-text
import './Logo.css';
import logo from './Logo-BR.png'
export default function Logo() {
  return (
    <div className="Logo text-3xl font-bold underline">
    
    <img src={logo}></img>
    </div>
  );
}