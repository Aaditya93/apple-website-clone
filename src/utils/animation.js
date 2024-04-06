export const  animateWithGsapTimeline = (timeline,rotationRef, rotationState,firstTraget,secondTraget,animationProps) =>{
  timeline.to(rotationRef.current.rotation,{
    y:rotationState,
    duration:1,
    ease: 'power2.inOut'
  })
  timeline.to(
    firstTraget,{
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
  timeline.to(
    secondTraget,{
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )


  
}
