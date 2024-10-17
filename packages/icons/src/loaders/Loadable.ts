export interface Loadable {
  readonly trusted: boolean
  fetch(): Promise<string>
}
