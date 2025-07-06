export type ExtractResponse<
  R extends { content?: { "application/json": unknown } }
> = R extends { content: { "application/json": infer Body } } ? Body : never;
