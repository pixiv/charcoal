export interface Loadable {
  fetch(): Promise<string>
  isLoading(): boolean
}
