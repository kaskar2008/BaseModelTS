import Container from './Container'

export interface Processor {
  name: string,
  proc: (...params) => any
}

export interface Modifier {
  name: string,
  proc: (...params) => any
}

export interface MethodSet {
  [key: string]: (...args) => any
}

export interface ContainerSet {
  [key: string]: Container
}
