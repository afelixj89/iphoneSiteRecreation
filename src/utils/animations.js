export const animateWidthGsapTimeline = (timeline, rotationRef, rotation, firstTarget, secondTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })
  timeline.to(firstTarget, {
    ...animationProps, 
    ease: 'power2.inOut'
  },
'<')
}