export interface Loadable {
  fetch(): Promise<string>
}
