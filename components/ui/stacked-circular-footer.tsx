import { Icons } from "./icons"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="py-8 bg-background">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center">
          <div className="p-6 mb-10 rounded-full bg-primary/10">
            <Icons.logo className="w-8 h-8 icon-class" />
          </div>
          <nav className="flex flex-wrap justify-center mb-10 gap-x-8 gap-y-4">
            <a href="/home" className="text-sm transition-colors hover:text-primary">Home</a>
            <a href="/about" className="text-sm transition-colors hover:text-primary">About</a>
            <a href="/services" className="text-sm transition-colors hover:text-primary">Services</a>
            <a href="/products" className="text-sm transition-colors hover:text-primary">Products</a>
            <a href="/contact" className="text-sm transition-colors hover:text-primary">Contact</a>
          </nav>
          <div className="flex mb-10 space-x-6">
            <Button variant="outline" size="icon" className="transition-colors rounded-full hover:bg-primary/10">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="transition-colors rounded-full hover:bg-primary/10">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="transition-colors rounded-full hover:bg-primary/10">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="transition-colors rounded-full hover:bg-primary/10">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="w-full max-w-lg mb-10">
            <form className="flex space-x-3">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  placeholder="メールアドレスを入力"
                  type="email"
                  className="rounded-full h-11"
                />
              </div>
              <Button type="submit" className="px-6 transition-colors rounded-full h-11 hover:bg-primary/90">
                購読する
              </Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground/80">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }