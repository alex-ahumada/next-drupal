import { merge, Theme } from "reflexjs"
import coreTheme from "@/core/config/theme"

const theme: Theme = merge(coreTheme, {
  list: {
    code: {
      fontFamily: "monospace",
      color: "accent",
      fontSize: "sm",
      p: "0 .2em",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border",
      bg: "muted",
    },
  },
  icons: {
    logo: `<svg viewBox="0 0 187 244" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M131.64 51.91C114.491 34.769 98.13 18.428 93.26 0c-4.87 18.429-21.234 34.769-38.38 51.91C29.16 77.612 0 106.743 0 150.434a93.258 93.258 0 0057.566 86.191A93.258 93.258 0 00159.22 216.4a93.248 93.248 0 0027.305-65.966c0-43.688-29.158-72.821-54.885-98.524zm-92 120.256c-5.719-.194-26.824-36.571 12.329-75.303l25.909 28.301a2.212 2.212 0 01.413 2.586 2.226 2.226 0 01-.586.719c-6.183 6.34-32.534 32.765-35.81 41.902-.675 1.886-1.663 1.815-2.256 1.795zm53.623 47.943a32.074 32.074 0 01-32.076-32.075 33.423 33.423 0 017.995-21.187c5.784-7.072 24.076-26.963 24.076-26.963s18.013 20.183 24.034 26.896a31.366 31.366 0 018.046 21.254 32.078 32.078 0 01-9.394 22.681 32.078 32.078 0 01-22.681 9.394zm61.392-52.015c-.691 1.512-2.259 4.036-4.376 4.113-3.773.138-4.176-1.796-6.965-5.923-6.122-9.06-59.551-64.9-69.545-75.699-8.79-9.498-1.238-16.195 2.266-19.704C80.43 66.478 93.26 53.656 93.26 53.656s38.254 36.296 54.19 61.096c15.935 24.8 10.443 46.26 7.205 53.342" fill="currentColor"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h186.525v243.713H0z"/></clipPath></defs></svg>`,
  },
})

export default theme
