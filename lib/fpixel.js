export const FB_PIXEL_ID = '133807123022854'

export const pageLead = ()=>{
    window.fbq('track', 'Lead')
}

export const event = (name, options = {}) => {
    window.fbq('track', name, options)
}