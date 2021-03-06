import { IVersionableCreateInput } from "../../_versionable/models";

export interface ISignupInput extends IVersionableCreateInput {
  email: string;
  password: string;
  applicationId: string;
}
