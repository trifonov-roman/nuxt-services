import type { paths } from "~/types/api";
import type { ExtractResponse } from "~/types/helpers";

type GetUserResponse = paths["/user"]["get"]["responses"];
export type UserResponseStatus = keyof GetUserResponse;

export type GetUser = ExtractResponse<GetUserResponse["200"]>;
export type GetUserError403 = ExtractResponse<GetUserResponse["403"]>;
