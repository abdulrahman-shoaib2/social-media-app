import { Alert, Button, Checkbox, Input } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import InputAttr from "../util/InputAttr.jsx";
import ButtonAttr from "../util/ButtonAttr";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../validation/signInSchema";
import { usersAPI } from "../services/APIServices.js";
import { useLocation } from "react-router-dom";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const { headline, authToken, banner } = useAuth();
  const errorMessage = useRef();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // defaultValues: {
    //   email: "aaaab@gmail.com",
    //   password: `ASDqwe123@#$`,
    // },
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      const { data } = await usersAPI.fetchData({
        data: formData,
        method: "post",
        endPoint: "signin",
        tokenRequired: false,
      });
      localStorage.token = JSON.stringify(data.data);
      authToken.setToken(data.data);
      usersAPI.token = data.data;
    } catch (e) {
      if (e.response) {
        setErrMsg(e.response.data.message);
      } else {
        setErrMsg("Network error, please try again later");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!errMsg) return;

    const timer = setTimeout(() => {
      setErrMsg(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [errMsg]);

  const location = useLocation();

  useEffect(() => {
    document.title = "Sign In - Social Media App";
    banner.bannerElm?.classList.add("animate-slideOut-right");
    headline.setTitle("Welcome Back");
    return () => {
      if (location.pathname == "/signup") {
        banner.bannerElm?.classList.remove("animate-slideOut-right");
      }
    };
  }, []);

  return (
    <div
      className={`mx-auto w-full max-w-lg p-6 sm:p-16 lg:max-w-md lg:p-0 animate-slideIn-right`}
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight">Sign In</h2>
      <p className="text-muted-foreground mb-8 text-base">
        Enter your email and password to sign in
      </p>
      <form className="grid gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between min-h-40">
          <Input
            {...register("email")}
            {...InputAttr("email", errors, "Email", "Enter your email", "text")}
          />
          <Input
            {...register("password")}
            {...InputAttr(
              "password",
              errors,
              "Password",
              "Enter your password",
              "password",
            )}
          />
        </div>
        <div className="grid gap-8">
          <div className="flex flex-wrap w-full items-center justify-between justify-self-end gap-4">
            <div className="flex items-center gap-2">
              <Checkbox>Remember Me</Checkbox>
            </div>
            <Link
              to="/forgot-password"
              className="text-primary  text-sm font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button isLoading={isLoading} {...ButtonAttr("submit")}>
            Sign In
          </Button>
        </div>
        <div className="my-2  flex items-center gap-2 min-h-10">
          {errMsg && (
            <Alert
              color="danger"
              hideIcon
              title={errMsg}
              variant="faded"
              ref={errorMessage}
              classNames={{
                base: "py-0 capitalize text-center animate-slideIn-left",
              }}
            />
          )}
        </div>
      </form>
      <div className="my-8 flex items-center gap-2">
        <span className="bg-black/5 dark:bg-white/5 h-[1px] w-full" />
        <p className="text-muted-foreground/60 text-sm font-semibold">Or</p>
        <span className="bg-black/5 dark:bg-white/5 h-[1px] w-full" />
      </div>
      <div className="mb-6 space-y-4">
        <Button {...ButtonAttr("button", "outline", "w-full")}>
          <i className="fa-brands fa-google"></i> Sign in with Google
        </Button>

        <Button {...ButtonAttr("button", "outline", "w-full")}>
          <i className="fa-brands fa-x-twitter"></i> Sign in with X/Twitter
        </Button>
      </div>
      <p className="text-muted-foreground flex items-center justify-center gap-1 text-center">
        Not registered?
        <Link
          to="/signup"
          className="text-primary font-semibold hover:underline"
        >
          Create account
        </Link>
      </p>
    </div>
  );
}
