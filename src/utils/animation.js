import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target,animationProps,scrollProps) =>{
  gsap.to(target,{
    ...animationProps,
    scrollTrigger:{
      target:target,
      toggleActions: 'restart reverse restart reverse',
      start:'top-85%',
      ...scrollProps
    }
  })
}



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
