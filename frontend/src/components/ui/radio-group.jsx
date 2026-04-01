import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroupContext = React.createContext({ value: '', onValueChange: () => {} })

const RadioGroup = React.forwardRef(({ className, value, onValueChange, children, ...props }, ref) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div ref={ref} className={cn("grid gap-2", className)} role="radiogroup" {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef(({ className, value, id, ...props }, ref) => {
  const context = React.useContext(RadioGroupContext)
  const checked = context.value === value

  return (
    <button
      ref={ref}
      type="button"
      role="radio"
      id={id}
      aria-checked={checked}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => context.onValueChange && context.onValueChange(value)}
      {...props}
    >
      {checked && (
        <span className="flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-current" />
        </span>
      )}
    </button>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
