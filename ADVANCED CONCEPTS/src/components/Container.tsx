import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type ContainerProps<T extends ElementType>={
    as:ElementType;
    children:ReactNode
}&ComponentPropsWithoutRef<T>
export default function Container<C extends ElementType>({as:Components,children,...props}:ContainerProps<C>) {
  return (
    <Components {...props}>{children}</Components>
  )
}
