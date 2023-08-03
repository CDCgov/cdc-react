export type ImageOnLoadEventHandlerType =
  | ((this: GlobalEventHandlers, ev: Event) => unknown)
  | null;
