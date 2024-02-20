import { createMedia } from "@artsy/fresnel"

export const Breakpoints = {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1621,
}

const AppMedia = createMedia({
  breakpoints: Breakpoints,
})

export const mediaStyle = AppMedia.createMediaStyle()
export const { MediaContextProvider, Media } = AppMedia
