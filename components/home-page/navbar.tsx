'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Card } from "@/components/ui/card"

interface RouteProps {
  href: string
  label: string
}

// const routeList: RouteProps[] = [
//   { href: '#index', label: 'Me' },
//   // { href: '#about', label: 'About Me' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#project', label: 'Project' },
// ]


export default function Header() {
  // useEffect(() => {
  //   const handleSmoothScroll = (event: Event) => {
  //     event.preventDefault();
  //     const targetId = (event.target as HTMLAnchorElement).getAttribute("href");
  //     if (targetId && targetId !== "#") {
  //       const targetElement = document.querySelector(targetId);
  //       if (targetElement) {
  //         window.scrollTo({
  //           top: targetElement.getBoundingClientRect().top + window.scrollY - 50,
  //           behavior: "smooth"
  //         });
  //       }
  //     }
  //   };

  //   const links = document.querySelectorAll("nav a");
  //   links.forEach(link => link.addEventListener("click", handleSmoothScroll));

  //   return () => {
  //     links.forEach(link => link.removeEventListener("click", handleSmoothScroll));
  //   };
  // }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-black py-4">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container px-4 w-full flex justify-center">
          <NavigationMenuItem>
            <Card className="border rounded-full shadow-sm">
              <nav className="flex p-2 space-x-4">
                {/* {routeList.map((route: RouteProps, i) => (
                  <Link
                    rel="noreferrer noopener"
                    href={route.href}
                    key={i}
                    className={buttonVariants({
                      variant: "ghost",
                      className:
                        "font-extrabold hover:bg-transparent hover:text-primary rounded-full",
                    })}
                  >
                    {route.label}
                  </Link>
                ))} */}
                <a href="/" className='font-bold text-l px-3'>Home</a>
                <a href="/project-more" className='font-bold text-l px-3'>Projects</a>
              </nav>
            </Card>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}