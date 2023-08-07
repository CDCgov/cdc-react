export type GlobalEventHandlerType =
  | ((this: GlobalEventHandlers, ev: Event) => unknown)
  | null;
