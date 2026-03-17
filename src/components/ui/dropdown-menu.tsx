import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import cn from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuSubTrigger = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => {
    return (
        <DropdownMenuPrimitive.SubTrigger
            ref={ ref }
            className={cn(
                `flex select-none cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[#2c313a] focus:text-white 
                data-[state=open]:bg-[#2c313a]`, className
            )}
            {...props}
        >
            { children }
        </DropdownMenuPrimitive.SubTrigger>
    )
})