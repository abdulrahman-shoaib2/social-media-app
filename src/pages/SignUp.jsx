import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Alert,
  SelectItem,
  addToast,
} from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import InputAttr from "../util/InputAttr.jsx";
import ButtonAttr from "../util/ButtonAttr";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../validation/signUpSchema";
import { useAuth } from "../contexts/AuthContext";
import { usersAPI } from "../services/APIServices.js";
// import { api } from "../services/APIServices.js";

export default function SignUp({ order }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const { headline, banner } = useAuth();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      // const response = await api.signUp(data);
      const username =
      formData.email.split("@")[0].charAt(0).toUpperCase() +
      formData.email.split("@")[0].slice(1);

      formData.username = username;
      const { data } = await usersAPI.fetchData({
        data: formData,
        method: "post",
        endPoint: "signup",
        tokenRequired: false,
      });

      addToast({
        title: "Account Created",
        description: "Your account has been created successfully",
        variant: "flat",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        ),
        classNames: {
          base: "bg-surface",
          icon: "text-green-500",
        },
      });
      navigate("/signin");
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

  useEffect(() => {
    document.title = "Sign Up - Social Media App";
    banner.bannerElm?.classList.add("animate-slideOut-left");
    headline.setTitle("Sign Up");
    return () => {
      banner.bannerElm?.classList.remove("animate-slideOut-left");
    };
  }, []);

  return (
    <div
      className={`mx-auto w-full max-w-lg p-6 sm:p-16 lg:max-w-md lg:p-0 order-${order} animate-slideIn-left`}
    >
      {/* <h2 className="mb-8 text-2xl font-bold tracking-tight">Sign Up</h2> */}

      <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1  justify-between ">
          <Input
            {...register("name")}
            {...InputAttr("name", errors, "Name", "Enter your name", "text")}
          />
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
          <Input
            {...register("rePassword")}
            {...InputAttr(
              "rePassword",
              errors,
              "Confirm Password",
              "Confirm password",
              "password",
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              {...register("dateOfBirth")}
              {...InputAttr(
                "dateOfBirth",
                errors,
                "Birth date",
                "Birth date",
                "date",
              )}
            />
            <Select
              {...register("gender")}
              {...InputAttr("gender", errors, "Gender", "Choose your gender")}
            >
              <SelectItem key="male">Male</SelectItem>
              <SelectItem key="female">Female</SelectItem>
            </Select>
          </div>
        </div>
        <div className="grid gap-8">
          <Button isLoading={isLoading} {...ButtonAttr("submit")}>
            Sign Up{" "}
          </Button>
        </div>
        <div className="my-2  flex items-center gap-2 min-h-10">
          {errMsg && (
            <Alert
              color="danger"
              hideIcon
              title={errMsg}
              variant="faded"
              classNames={{
                base: "py-0 capitalize text-center animate-slideIn-left",
              }}
            />
          )}
        </div>
      </form>

      {/* <div className="my-8 flex items-center gap-2">
        <span className="bg-black/5 dark:bg-white/5 h-[1px] w-full" />
        <p className="text-muted-foreground/60 text-sm font-semibold">Or</p>
        <span className="bg-black/5 dark:bg-white/5 h-[1px] w-full" />
      </div>
      <div className="grid grid-cols-2 gap-4  mb-6 space-y-4">
        <Button {...ButtonAttr("button", "outline")}>
          <i className="fa-brands fa-google"></i>
        </Button>
        <Button {...ButtonAttr("button", "outline")}>
          <i className="fa-brands fa-x-twitter"></i>
        </Button>
      </div> */}
      <p className="text-muted-foreground flex items-center  justify-center gap-1 text-center">
        Already has an account?
        <Link
          to="/signin"
          className="text-primary font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
