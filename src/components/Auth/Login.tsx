import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { api } from "../../axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";

type LoginDataType = {
  usernameOrEmail: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, error, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginDataType) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
    onSuccess: () => {
      setIdentifier(identifier);
      setPassword(password);
      toast.success("Login successful!");
      setIsOpen(false);
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email" || id === "username") {
      setIdentifier(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ usernameOrEmail: identifier, password });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Login to Account</DialogTitle>
            <DialogDescription>
              Fill in your information to login to your account.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="text"
                placeholder="example@gmail.com"
                value={identifier}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button onClick={handleSubmit} className="bg-blue-600 text-white">
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default Login;
