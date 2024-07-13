// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
export const isMobile = () => {
  let detection = false

  if (typeof navigator !== 'undefined' && navigator.userAgentData) {
    detection = navigator.userAgentData.mobile
  }

  if (typeof navigator !== 'undefined' && !detection) {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      detection = true
    }
  }

  return detection
}
