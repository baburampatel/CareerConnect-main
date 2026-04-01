import * as React from "react"
import { cn } from "@/lib/utils"

const Popover = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false)
  const popoverRef = React.useRef(null)

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={popoverRef} className="relative" {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child, { open, setOpen })
      })}
    </div>
  )
}

const PopoverTrigger = React.forwardRef(({ className, asChild, open, setOpen, children, ...props }, ref) => {
  const handleClick = () => setOpen && setOpen(!open)
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      onClick: handleClick,
      ...props
    })
  }

  return (
    <button ref={ref} onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  )
})
PopoverTrigger.displayName = "PopoverTrigger"

const PopoverContent = React.forwardRef(({ className, open, setOpen, align = "center", sideOffset = 4, children, onInteractOutside, ...props }, ref) => {
  if (!open) return null
  
  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 mt-2 right-0 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent }
