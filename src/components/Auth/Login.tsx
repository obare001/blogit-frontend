import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"


export function Login() {
  return (
   <Dialog>
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
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit" className="bg-blue-600 text-white">
              Create Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
