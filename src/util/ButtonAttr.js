
export default function ButtonAttr(type='button',btnStyle='solid',extraClasses="",slot='button') {
  extraClasses = 'bg-primary text-primary-foreground'
  if(btnStyle == 'outline'){
    extraClasses = 'border border-primary/20 bg-background shadow-xs hover:bg-primary/10 dark:text-accent-foreground dark:bg-white/5 dark:border-input dark:hover:bg-white/10 w-full'
  }

  return (
    {
      'data-slot':slot,
      type,
      className:`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  h-10 rounded-lg px-6 has-[>svg]:px-4   ${extraClasses}`
    }
  )
}



