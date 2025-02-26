'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { ButtonDefault } from '../ButtonDefault'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ScrollableComponent: FC<{ children: any }> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const scrollHorizontally = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current
        setIsAtStart(scrollLeft === 0)
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex min-w-full gap-16 overflow-x-scroll whitespace-nowrap"
      >
        {children}
      </div>
      <div className="my-8 flex w-full justify-between">
        <ButtonDefault
          onClick={() => scrollHorizontally(-100)}
          hidden={isAtStart && isAtEnd}
          disabled={isAtStart}
          className="self-start rounded-full px-2 py-2"
        >
          <GoChevronLeft />
        </ButtonDefault>
        <ButtonDefault
          onClick={() => scrollHorizontally(100)}
          hidden={isAtStart && isAtEnd}
          disabled={isAtEnd}
          className="self-end rounded-full px-2 py-2"
        >
          <GoChevronRight />
        </ButtonDefault>
      </div>
    </div>
  )
}
