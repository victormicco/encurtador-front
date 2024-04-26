import { ModeToggle } from "./mode-toggle";

export default function Footer() {
    return (
      <footer className="fixed inset-x-0 bottom-0 p-4 border-t dark:border-gray-800 backdrop-blur-lg">
        <div className="container flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Created by Victor Micco </p>
        </div>
      </footer>
    )
  }
  
 
  