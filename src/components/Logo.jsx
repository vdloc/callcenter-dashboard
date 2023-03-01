import logo from "@assets/images/logo.svg";

export default function Logo({ className = "", alt = "" }) {
  return <img src={logo} alt={alt} className={className} />;
}
