import Logo from "@components/Logo";
import { useForm } from "react-hook-form";

export default function AuthPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-violet-100">
      <div className="container flex min-h-[80vh] max-w-[1440px] bg-white rounded-md overflow-hidden">
        <section className="w-[48.75%] flex flex-col justify-center items-center">
          <header>
            <Logo />
            <h1 className="text-delft-blue text-[2rem] mt-[4.6875rem]">
              Get started form here
            </h1>
            <h6 className="text-light-slate-gray text-center text-[0.9375rem] mt-[0.625rem]">
              Choose your role form below
            </h6>
          </header>
          <form className="w-90 w-[320px] mt-14">
            <div className="flex flex-col">
              <label
                htmlFor="full-name-input"
                className="font-medium text-cadet-blue text-xs uppercase"
              >
                full name
              </label>
              <input
                type="text"
                className="h-[40px] px-4 mt-2 rounded-[5px] border border-link-water text-[15px] bg-lavender-web hover:drop-shadow-input outline-none transition-all duration-300"
                placeholder="Suhab Al Minas"
                id="full-name-input"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label
                htmlFor="email-input"
                className="font-medium text-cadet-blue text-xs uppercase"
              >
                email address
              </label>
              <input
                type="email"
                className="h-[40px] px-4 mt-2 rounded-[5px] border border-link-water text-[15px] bg-lavender-web hover:drop-shadow-input outline-none transition-all duration-300"
                placeholder="hilpert_vicky@yahoo.com"
                id="email-input"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label
                htmlFor="password-input"
                className="font-medium text-cadet-blue text-xs uppercase"
              >
                password
              </label>
              <input
                type="password"
                className="h-[40px] px-4 mt-2 rounded-[5px] border border-link-water text-[15px] bg-lavender-web hover:drop-shadow-input outline-none transition-all duration-300"
                id="password-input"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 mt-6 flex justify-center items-center bg-blue-ribbon rounded-[4px] text-white font-medium"
            >
              Submit
            </button>
            <p className="text-cadet-blue text-center mt-4">
              Already have an account?{" "}
              <a href="" className="text-blue-ribbon">
                Login
              </a>
            </p>
          </form>
        </section>
        <section className="flex-1 illustration"></section>
      </div>
    </div>
  );
}
