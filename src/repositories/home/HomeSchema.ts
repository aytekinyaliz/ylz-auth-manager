import { SchemaOptions } from "mongoose";
import { BaseSchema } from "@ylz/data-access";
import { auditSchema } from "@ylz/data-access";

export class HomeSchema extends BaseSchema {
  constructor(options?: SchemaOptions) {
    const homeDefinition = {
      _id: String,
      name: {
        type: String,
        trim: true,
        required: [true, "Name is required!"], // '' will fail
        minlength: [2, "Name needs to be at least 2 chars!"]
      },
      address: {
        type: String,
        trim: true,
        required: [true, "Address is required!"],
        minlength: [2, "Address needs to be at least 2 chars!"],
        validate: {
          validator(address) {
            return !!address; // validator.isEmail(address);
          },
          message: "{VALUE} is not a valid address!"
        }
      },
      phones: {
        type: [
          {
            type: String,
            required: true
          }
        ],
        default: []
      },

      ...auditSchema
    };

    super(homeDefinition, options);
  }
}
