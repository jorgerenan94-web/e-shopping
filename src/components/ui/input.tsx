import cn from "@/lib/utils";
import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, placeholder, ...props }, ref) => {
        return (
            <input 
                type={type}
                className={
                    cn(
                        "flex h-10 w-full rounded-md border border-[#21252b] bg-[#21252b80] px-3 py-2 text-base",
                        className
                    )
                } 
                {...props}
                ref={ref}
                placeholder={placeholder}
            />
        )
    }
)

export default Input;