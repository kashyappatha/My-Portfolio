import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  // const { theme = "system" } = useTheme()

  return (
    (<Sonner
      // theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `group toast group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg ${
            props.type === 'success' ? 'group-[.toaster]:bg-red-500 group-[.toaster]:text-white' : 'group-[.toaster]:bg-green-500 group-[.toaster]:text-white'
          }`,
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />)
  );
}

export { Toaster }
